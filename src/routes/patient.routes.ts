import {Router} from "express";
import PatientController from "../controllers/patient.controller";

export default class PatientRoutes {
    path? : string="/patient";//path may or may not exist and if exist all the routes in this class will start from /patient
    router:Router=Router();
    patientController=new PatientController();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes() {
        
        this.router.get(`${this.path}/:id`, this.patientController.getPatientDetails);
        this.router.post(`${this.path}`, this.patientController.createPatient);
        this.router.put(`${this.path}/:id`, this.patientController.updatePatient);
        this.router.delete(`${this.path}/:id`, this.patientController.deletePatient);
      }



}