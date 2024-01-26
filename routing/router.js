//to setup path
//import express
const express = require('express')

//import controller
const userController =  require('../controllers/userController')

//import admin controller 
const adminController =require('../controllers/adminController')

//import servicecontroller
const serviceController = require('../controllers/seviceController')

//import bookingController
const bookingController = require('../controllers/bookingController')


//import jwtmiddleware
const jwtMiddleware = require('../middleware/jwtMiddleware')


//import multermiddleware
const multerConfig = require('../middleware/multerMiddleware') 

//create an object for router class in the express module
const router = new express.Router()

//logic
router.post('/user/register',userController.register)


//login
router.post('/user/login',userController.login)

//add car
router.post('/admin/addcar',adminController.addcar)

//show all cars
router.get('/admin/allcars',adminController.showcars)

//delete car
router.delete('/admin/remove/:id',adminController.deletecar)

//add services
router.post('/admin/services',jwtMiddleware,multerConfig.single('image'),serviceController.addservices)

//show all services
router.get('/admin/allservices',serviceController.allservices)

//edit services
router.put('/admin/editservice/:id',jwtMiddleware,multerConfig.single('image'),serviceController.editservices)

//delete car
router.delete('/admin/removeservice/:id',jwtMiddleware,serviceController.deleteservices)


//show  selected service
router.get('/admin/selectedservice/:id',serviceController.choosedservice)

//add car
router.post('/admin/addbooking',jwtMiddleware,bookingController.addbooking)

//show all user booking services
router.get('/admin/userbooking',jwtMiddleware,bookingController.userbookings)

//edit booking status
router.put('/admin/editbookingstatus/:id',bookingController.editstatus)

//show all user booking services
router.get('/admin/allbookings',bookingController.allbookings)


//export router
module.exports = router