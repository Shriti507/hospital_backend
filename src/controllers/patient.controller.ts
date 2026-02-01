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

    //create patient 
    createPatient=async(req: Request, res: Response)=>{
        try {
            const newPatient = await this.patientService.createPatient(req.body);
            res.status(201).json(newPatient);
        } 
        catch(err) {
            res.status(400).json({ message: "Error creating patient" });
        }
    }

    //update details of the patient
    updatePatient=async(req: Request, res: Response)=>{
        try {
            const id = req.params.id as string;
            const updated = await this.patientService.updateDetails(id, req.body);
            res.status(200).json(updated);
        } 
        catch(err){
            res.status(400).json({ message: "Error updating patient" });
        }
    }

    //delete the detail of a patient
    deletePatient=async(req: Request, res: Response)=>{
        try {
            const id = req.params.id as string;
            const deleted = await this.patientService.deletePatient(id);
            res.status(200).json({ message: "Patient deleted successfully", deleted });
        } 
        catch(err){
            res.status(404).json({ message: "Patient not found" });
        }
    }
}