import express  from "express";
import { Request,Response } from "express";
import { PatientService } from "../services/patient.service";


export default class PatientController{
    patientService=new PatientService();
    app=express();

    getPatientDetails=async(req:Request,res:Response)=>{
        try{
            const id = req.params.id as string; // Type assertion to ensure id is a string
            const detail = await this.patientService.getDetails(id);
            res.status(200).json(detail);
        }
        catch(err){
            res.status(500).json({ message: "Error fetching patient" });
        }

    }
}