import { Schema, model } from 'mongoose';

const UserMarketSchema = new Schema({

  name : {
    type: String,
    required: true
  },

  email : {
    type: String,
    required: true
  },

  cnpj : {
    type: String,
    required: true
  },

  urlImageMarket: {
    type: String,
    default: 'ttps://i.pinimg.com/originals/02/30/42/023042e35efb9dbd3fd68ae1bfcfa202.png'
  },

  password_hash : {
    type: String,
    required: true
  }

});

export default model("UserMarket", UserMarketSchema);