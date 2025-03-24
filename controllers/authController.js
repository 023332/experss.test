import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import Joi from 'joi';

const registrationSchema = Joi.object({
    fName: Joi.string().min(1).required(),
    lName: Joi.string().min(1).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
});

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
});

export const register = async (req, res) => {
    const { error } = registrationSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const { fName, lName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ fName, lName, email, password: hashedPassword });
    await user.save();

    res.status(201).send({ message: 'User registered successfully' });
};

export const login = async (req, res) => {
    const { error } = loginSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send('Invalid email or password');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send('Invalid email or password');

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
};