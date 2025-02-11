import express from 'express'
import {placeOrder,placeOrderStripe,placeOrderRazorpay,allOrders,userOrders,updateStatus} from '../controllers/orderController.js'
import adminauth from '../middleware/adminauth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

//admin features

orderRouter.post('/list',adminauth,allOrders)
orderRouter.post('/placeorder',adminauth,updateStatus)

//payment features
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)

//user features
orderRouter.post('/userorders',authUser,userOrders)

export default orderRouter

