//main application , what the app is , all the work like creating objects,connecting class together etc
import express from "express";
import mongoose from "mongoose";
import PatientRoutes from "./routes/patient.routes";


interface App_interface{
    startServer():void;
    connectDatabase():void;
    initializeRoutes():void;
     
}

export default class App implements App_interface {
    public PORT: number;
    public app: express.Application;

    constructor() {
        this.PORT = 3000;
        this.app = express();
        this.app.use(express.json());
        this.startServer();
        this.connectDatabase();
        this.initializeRoutes();
    }

    public startServer(): void {
        this.app.listen(this.PORT, () => {
            console.log("server started.");
        });
    }

    private async connectDatabase(): Promise<void> {
        try {
            const uri: string = process.env.MONGODB_URI || (()=>{ throw new Error("MONGODB_URI is not defined"); })();
            await mongoose.connect(uri);
            console.log('server has been connected to the database.');
        } catch (err) {
            console.log(err);
        }
    }

    private initializeRoutes(): void {
        
        const patientRoutes = new PatientRoutes();
        
        // Register patient routes
        this.app.use("/", patientRoutes.router);
        console.log('routes has been initialized.');
            
      
        
    }
}