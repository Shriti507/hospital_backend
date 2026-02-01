import { Router } from "express";
import AppointmentController from "../controllers/appointment.controller";

export default class AppointmentRoutes {
    path = "/appointment";
    router:Router=Router();
    appointmentController=new AppointmentController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        // Book a new appointment
        this.router.post(`${this.path}`, this.appointmentController.createAppointment);
        
        // Get appointments for a specific patient
        this.router.get(`${this.path}/patient/:patientId`, this.appointmentController.getPatientAppointments);
        
        // Cancel an appointment
        this.router.delete(`${this.path}/:id`, this.appointmentController.cancelAppointment);
    }
}