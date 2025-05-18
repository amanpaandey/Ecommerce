import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloundinary.js';
import userRouter from './routes/user.routes.js';
import productRouter from './routes/product.routes.js';
import cartRouter from './routes/cart.routes.js';
import orderRoute from './routes/order.routes.js';

//APP config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// middleware's
app.use(express.json());
app.use(cors());

// api end-point
app.get('/', (req, res) => {
  res.send('API WORKING');
});

app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRoute);


app.listen(port, () => {
  console.log(`server started on port ${port} `);
});
