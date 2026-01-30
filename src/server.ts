import dotenv from "dotenv";
import path from "path";
dotenv.config({
    path: path.resolve(process.cwd(), "../.env")
  });
  
// console.log("CWD:", process.cwd());


import App from "./app";

const app=new App()