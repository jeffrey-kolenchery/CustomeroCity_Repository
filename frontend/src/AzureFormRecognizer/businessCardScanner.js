import { FormRecognizerClient, AzureKeyCredential } from '@azure/ai-form-recognizer'
import * as dotenv from 'dotenv'


dotenv.config()

const apiKey = '6853fe3b32fd482c9239acb395cf03de'
const endpoint = 'https://businesscardscanningapi.cognitiveservices.azure.com/'

const client = new FormRecognizerClient(endpoint, new AzureKeyCredential(apiKey))

var resultString = ''

async function scanBusinessCard(url) {
    const bcUrl = url
    console.log(url)
    const poller = await client.beginRecognizeBusinessCardsFromUrl(bcUrl, {
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
        resultString += '- Contact Names:'
        for (const contactName of contactNames) {
            if (contactName.valueType === 'object') {
                const firstName = contactName.value?.['FirstName'].value ?? '<no first name>'
                const lastName = contactName.value?.['LastName'].value ?? '<no last name>'
                resultString += `  - ${firstName} ${lastName} (${contactName.confidence} confidence)`
            }
        }
    }

    printSimpleArrayField(businessCard, 'CompanyNames')
    printSimpleArrayField(businessCard, 'Departments')
    printSimpleArrayField(businessCard, 'JobTitles')
    printSimpleArrayField(businessCard, 'Emails')
    printSimpleArrayField(businessCard, 'Websites')
    printSimpleArrayField(businessCard, 'Addresses')
    printSimpleArrayField(businessCard, 'MobilePhones')
    printSimpleArrayField(businessCard, 'Faxes')
    printSimpleArrayField(businessCard, 'WorkPhones')
    printSimpleArrayField(businessCard, 'OtherPhones')

    return(resultString)
}

// Helper function to print array field values. 
function printSimpleArrayField(businessCard, fieldName) {
    const fieldValues = businessCard.fields[fieldName]?.value
    if (Array.isArray(fieldValues)) {
        resultString += `- ${fieldName}:`
        for (const item of fieldValues) {
            resultString += `  - ${item.value ?? '<no value>'}`
        }
    } else if (fieldValues === undefined) {
        resultString += `No ${fieldName} were found in the document.`
    } else {
        resultString += `Error: expected field "${fieldName}" to be an Array, but it was a(n) ${businessCard.fields[fieldName].valueType}`
    }
}

scanBusinessCard().catch((err) => {
    resultString += 'The sample encountered an error:', err
})



export {
    scanBusinessCard
}