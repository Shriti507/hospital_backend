import {Document,Model} from "mongoose";
export interface Patient {
    firstName: string;
    lastName: string;
    gender: string;
    dob: Date;
    bloodGroup: string;
    phoneNumber: string;
}

export interface PatientDocument extends Document,Patient{}
  