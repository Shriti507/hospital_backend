import { Schema, model } from "mongoose";
import { AppointmentDocument } from "../utils/appointment.interface";

const appointmentSchema = new Schema<AppointmentDocument>({
    patientId: {
        type: Schema.Types.ObjectId,
        ref: 'Patient', 
        required: true
    },
    doctorName: {
        type: String,
        required: true
    },
    appointmentDate: {
        type: Date,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['scheduled', 'completed', 'cancelled'],
        default: 'scheduled'
    }
}, {
    timestamps: true 
});

export const appointmentModel = model<AppointmentDocument>('Appointment', appointmentSchema);