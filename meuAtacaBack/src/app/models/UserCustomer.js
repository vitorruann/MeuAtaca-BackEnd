import { Schema, model } from 'mongoose';

const UserCustomerSchema = new Schema({

  name : {
    type: String,
    required: true
  },

  cpf : {
    type: String,
    required: true
  },

  password : {
    type: String,
    required: true
  },

  email : {
    type : String,
    required: true
  }

});

export default model("UserCustomer", UserCustomerSchema);