import mongoose, { Schema, model } from 'mongoose';

const PromotionSchema = new Schema({
  
  product: {
    type: String,
    required: true
  },

  value: {
    type: Number,
    required: true
  },

  quantity: {
    type: Number,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  urlImage: {
    type: String,
    required: true
  },

  marketID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserMarket'
  },

  marketName: {
    type: mongoose.Schema.Types.String,
    ref: 'UserMarket'
  }

});

export default model('Promotion', PromotionSchema)