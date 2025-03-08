const bcrypt = require('bcryptjs');
const { generateToken } = require('../config/jwt.js');
const User = require('../models/userModel.js');

const login = async (req, res) => {
  const { mobile_phone, password } = req.body;

  try {
    const user = await User.findOne({ mobile_phone });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

      const isMatch = await bcrypt.compare(password,user.password)
      if(!isMatch) return res.status(400).json({message:'password incorrect'})


    const token = generateToken(user);
    user.session_active = true;
    await user.save();

    res.status(200).json({ user, access_token: token, token_type: 'bearer' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { login };