import { Request, Response } from "express";
import { AppointmentService } from "../services/appointment.services";


export default class AppointmentController {
    appointmentService = new AppointmentService();
 
    // create a new appointment
    createAppointment = async (req: Request, res: Response) => {
        try {
            const appointment = await this.appointmentService.createAppointment(req.body);
            res.status(201).json(appointment);
        } catch (err: any) {
            res.status(400).json({ message: err.message || "Error booking appointment" });
        }
    }

    // get all appointments for a specific patient
    getPatientAppointments = async (req: Request, res: Response) => {
        try {
            const patientId = req.params.patientId as string;
            const appointments = await this.appointmentService.getPatientAppointments(patientId);
            res.status(200).json(appointments);
        } catch (err) {
            res.status(500).json({ message: "Error fetching appointments" });
        }
    }

    // cancel an appointment
    cancelAppointment = async (req: Request, res: Response) => {
        try {
            const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
            await this.appointmentService.cancelAppointment(id);
            res.status(200).json({ message: "Appointment cancelled" });
        } catch (err) {
            res.status(404).json({ message: "Appointment not found" });
        }
    }
}