import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import User from './models/user.model.js';

const app = express();

const corsOptions = {
    origin: ['http://localhost:1573', 'http://localhost:5173'], // Add all allowed origins
    credentials: true, // Allow cookies
  };
  
  app.use(cors(corsOptions));

app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.post('/signup', async (req, res) => {
  const { name, email, password, city, state, pin } = req.body;
  consolelog

  try {
   
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    
    const newUser = new User({ name, email, password, city, state, pin });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default app
