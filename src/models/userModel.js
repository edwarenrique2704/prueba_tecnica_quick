const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  date_birth: { type: Date, required: true },
  address: { type: String, required: true },
  password: { type: String, required: true  },        //  minlength: 6 <= <= parametro para añadir validacion
  mobile_phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  session_active: { type: Boolean, default: false },
});

module.exports = mongoose.model('User', userSchema);