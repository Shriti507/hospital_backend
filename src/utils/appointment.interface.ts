import { Document, Schema } from "mongoose";

export interface Appointment {
    patientId: Schema.Types.ObjectId;
    doctorName: string; 
    appointmentDate: Date; 
    reason: string;
    status: "scheduled" | "completed" | "cancelled";
}

export interface AppointmentDocument extends Document,Appointment {}