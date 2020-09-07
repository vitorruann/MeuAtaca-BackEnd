import express from "express";
import "dotenv/config";
import "./database";
import cors from "cors";
import routes from './routes';
class App {
  constructor(){
    this.server = express();

    this.server.use(cors());
    this.server.use(express.json());
    this.routes();
  }

  routes() {
    this.server.use(routes);
  }

}

export default new App().server;