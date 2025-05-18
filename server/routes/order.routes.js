import express from 'express';
import { allOders, placeOrder, placeOrderRazorpay, placeOrderStripe, updateStatus, userOrders, verifyStripe } from '../controllers/orders.controller.js';
import adminAuth from '../middleware/admin.auth.js';
import authUser from '../middleware/auth.js'

const orderRoute = express.Router()


//admin routes
orderRoute.post('/list',adminAuth, allOders);
orderRoute.post('/status',adminAuth, updateStatus);


//paymets
orderRoute.post('/place', authUser, placeOrder);
orderRoute.post('/stripe', authUser, placeOrderStripe );
orderRoute.post('/rezorpay', authUser, placeOrderRazorpay );


//users

orderRoute.post('/user-orders', authUser, userOrders);

//verify

orderRoute.post('/verify-stripe', authUser, verifyStripe)


export default orderRoute

