import mongoose,{Schema,model} from "mongoose";
import { Patient,PatientDocument } from "../utils/patient.interface";


const patientSchema=new Schema<PatientDocument>({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,

    },
    gender:{
        type:String,
        required:true,
    },
    dob: {
        type: Date,
        default: Date.now
    },
    bloodGroup:{
        type:String,
        
    },
    phoneNumber:{
        type:String,
        required:true,
    }
})

export  const patientModel=model<PatientDocument>('Patient',patientSchema)
