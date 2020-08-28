import express from "express";
import routes from './routes';
import mongoose from 'mongoose';

class App {
  constructor(){
    this.server = express();

    this.database();
    this.server.use(express.json());
    this.routes();
  }

  database() {
    mongoose.connect('mongodb+srv://rocket:ads1234@cluster0-to2nf.mongodb.net/MeuAtaca?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

  }

  routes() {
    this.server.use(routes);
  }

}

export default new App().server;