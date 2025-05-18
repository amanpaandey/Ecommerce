import userModel from '../models/user.model.js';
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const createToken = (id) => {
  return jwt.sign(
    {
      id,
    },
    process.env.JWT_SECRET
  );
};

const registerUser = async (req, res) => {
  try {
    

    const { name, email, password } = req.body;

    if (!(name && email && password)) {
      return res.json({
        success: false,
        message: 'All field are required',
      });
    }

    const exists = await userModel.findOne({ email });

    if (exists) {
      return res.json({
        success: false,
        message: 'User already exist',
      });
    }

    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: 'please enter a valid email',
      });
    }

    if (!validator.isStrongPassword(password)) {
      return res.json({
        success: false,
        message: 'Please Enter a strong password',
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hasedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hasedPassword,
    });

    const user = await newUser.save();

    const token = createToken(user._id);

    res.json({
      success: true,
      token,
    });
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

const loginUSer = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        message: "User Doesn't exists",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({
        success: false,
        message: 'wrong password',
      });
    }

    const token = createToken(user._id);

    res.json({
      success: true,
      token,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      !(
        email === process.env.ADMIN_EMAIL &&
        password === process.env.ADMIN_PASSWORD
      )
    ) {
      return res.json({
        success: false,
        message: 'Invalid credentials',
      });
    }

    const token = jwt.sign(email + password, process.env.JWT_SECRET);

    res.json({
      success: true,
      token,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export { registerUser, loginUSer, adminLogin };
