import { patientModel } from "../models/patient.schema";
import { Patient, PatientDocument } from "../utils/patient.interface";
export class PatientService{
    async getDetails(id:string){
        return await patientModel.findById(id)

    }
    async createPatient(patientData:Patient):Promise<PatientDocument>{
        const newPatient=await patientModel.create(patientData)
        console.log("patient created.")
        return newPatient
        
 

    }
    async updateDetails(id:string,updateData:Partial<Patient>){
        const updatedDetails=await patientModel.findByIdAndUpdate(id,updateData,{new:true})
        console.log("details has been updated")
        return updatedDetails

    }
    async deletePatient(id:string):Promise<PatientDocument>{
        const deletedPatient=await patientModel.findByIdAndDelete(id);
        if (!deletedPatient){
            throw new Error("patient not found")
        }
        else{
            console.log("patient deleted")
            return deletedPatient
        }
        

    }

}