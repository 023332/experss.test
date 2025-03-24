import User from '../models/userModel.js';

export const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).send('User not found');

        res.render('profile', { user });
    } catch (error) {
        res.status(500).send('Server error');
    }
};

export const updateUserProfile = async (req, res) => {
    const { fName, lName, email } = req.body;

    try {
        const user = await User.findByIdAndUpdate(req.user.id, { fName, lName, email }, { new: true });
        if (!user) return res.status(404).send('User not found');

        res.render('profile', { user, message: 'Profile updated successfully' });
    } catch (error) {
        res.status(500).send('Server error');
    }
};