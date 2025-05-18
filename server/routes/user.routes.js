import express from 'express'
import { adminLogin, loginUSer, registerUser } from '../controllers/user.controller.js';

const userRouter = express.Router();


userRouter.post('/register', registerUser);
userRouter.post('/login', loginUSer);
userRouter.post('/admin', adminLogin);


export default userRouter