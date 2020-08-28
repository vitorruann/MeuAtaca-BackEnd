import { Schema, model } from 'mongoose';

const UserSchema = new Schema({

  name : {
    type: String,
    required: true
  },

  cpf : {
    type: String,
    required: true
  }

});

export default model("User", UserSchema);