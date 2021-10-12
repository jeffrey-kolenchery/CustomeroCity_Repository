import { FormRecognizerClient, AzureKeyCredential } from '@azure/ai-form-recognizer'
import fs from 'fs'
import * as dotenv from 'dotenv'
import * as base64 from 'base-64'


dotenv.config()

const apiKey = process.env.AZURE_FORM_RECOGNIZER_APIKEY
const endpoint = process.env.AZURE_FORM_RECOGNIZER_ENDPOINT

const client = new FormRecognizerClient(endpoint, new AzureKeyCredential(apiKey))

const scanBusinessCard = async (req, res) => {

    var fileName = req.body.formData
    fileName = base64.decode(fileName)

    if (!fs.existsSync(fileName)) {
        throw new Error(`Expected file "${fileName}" to exist.`)
    }

    const readStream = fs.createReadStream(fileName)

    const poller = await client.beginRecognizeBusinessCards(readStream, {
        contentType: 'image/png',
        onProgress: (state) => {
            console.log(`status: ${state.status}`)
        }
    })

    const [businessCard] = await poller.pollUntilDone()

    if (businessCard === undefined) {
        throw new Error('Failed to extract data from at least one business card.')
    }

    const contactNames = businessCard.fields['ContactNames'].value
    if (Array.isArray(contactNames)) {
        console.log('- Contact Names:')
        for (const contactName of contactNames) {
            if (contactName.valueType === 'object') {
                const firstName = contactName.value?.['FirstName'].value ?? '<no first name>'
                const lastName = contactName.value?.['LastName'].value ?? '<no last name>'
                console.log(`  - ${firstName} ${lastName} (${contactName.confidence} confidence)`)
                res.status(200).json(firstName, lastName)
            }
        }
    }

    

    printSimpleArrayField(businessCard, 'CompanyNames')
    printSimpleArrayField(businessCard, 'Departments')
    printSimpleArrayField(businessCard, 'JobTitles')
    printSimpleArrayField(businessCard, 'Emails')
    printSimpleArrayField(businessCard, 'Addresses')
    printSimpleArrayField(businessCard, 'MobilePhones')
}

// Helper function to print array field values. 
function printSimpleArrayField(businessCard, fieldName) {
    const fieldValues = businessCard.fields[fieldName]?.value
    if (Array.isArray(fieldValues)) {
        console.log(`- ${fieldName}:`)
        for (const item of fieldValues) {
            console.log(`  - ${item.value ?? '<no value>'} (${item.confidence} confidence)`)
        }
    } else if (fieldValues === undefined) {
        console.log(`No ${fieldName} were found in the document.`)
    } else {
        console.error(
            `Error: expected field "${fieldName}" to be an Array, but it was a(n) ${businessCard.fields[fieldName].valueType}`
        )
    }
}

// scanBusinessCard().catch((err) => {
//     console.error('The sample encountered an error:', err)
// })

export {
    scanBusinessCard
}