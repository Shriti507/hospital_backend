import { appointmentModel } from "../models/appointment.schema";
import { Appointment,AppointmentDocument } from "../utils/appointment.interface";


export class AppointmentService {
    
    async createAppointment(data:Appointment):Promise<AppointmentDocument> {
        
        const existing=await appointmentModel.findOne({ appointmentDate: data.appointmentDate });
        
        if (existing) {
            throw new Error("Time slot already booked");
        }
        return await appointmentModel.create(data);
    }

    async getPatientAppointments(patientId: string) {
        
        return await appointmentModel.findById({ 
            patientId
        }).populate('patientId'); 
    }

    async cancelAppointment(id: string) {
        return await appointmentModel.findByIdAndDelete(id);
    }
}