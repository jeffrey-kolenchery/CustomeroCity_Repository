const Customer = require('../models/customerModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerCustomer  = (req, res, next) => {
    // var givenName = req.body.givenName;
    // var designation = req.body.designation;
    // var company = req.body.company;
    // var email = req.body.email;
    // var phoneNo = req.body.phoneNo;
    // var age = req.body.age;
    // var interests = req.body.interests;


    let customer = new Customer ({
        givenName: req.body.givenName,
        designation: req.body.designation,
        company: req.body.comapany,
        email: req.body.email,
        age: req.body.age,
        phoneNo: req.body.phoneNo,
        interests: req.body.interests
    })
    customer.save()
        .then(customer => {
            res.status(200).send('Customer Added Successfully!');
        })
    .catch(error=> {
        res.status(400).send('An error occured!');
    })


};

const deleteCustomer = (req, res, next) => {
    var customerName = req.body.givenName;
    
    try {
        Customer.findOneAndDelete(
            {
                givenName : customerName
            }
        );
        res.status(200).send("customer deleted successfully");
    } catch (error) {
        res.status(404).send("customer does not exist in database");
    }

};
//     var username = req.body.username;
//     var password = req.body.password;

//     User.findOne({$or: [{email:username}, {phone: username}]})
//     .then(user => {
//         if(user){
//             bcrypt.compare(password, user.password, function(err, result) {
//                 if(err) {
//                     res.json({
//                         error: err
//                     })
//                 }
//                 if(result) {
//                     let token = jwt.sign({name: user.name}, 'verysecretValue', {expiresIn: '1hr'})
//                     res.json({
//                         message: 'Login Successful!', 
//                         token
//                     })
//                 }else {
//                     res.json({
//                         message: 'Password does not match!', 
//                     })
//                 }
//             })
//         } else{
//             res.json({
//                 message: 'No user found'
//             })
//         }
//     })
// };

module.exports = {
    registerCustomer,
    deleteCustomer
//     login
}