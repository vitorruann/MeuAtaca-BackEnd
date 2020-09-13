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

  password_hash : {
    type: String,
    required: true
  }

});

export default model("UserMarket", UserMarketSchema);