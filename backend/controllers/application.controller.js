import { Application } from "../models/application.model.js";

export async function createApplication(req, res) {
    try {
        const { company, role, status, link, notes } = req.body || {};
        const ownerId = req.userId;

        if (!company || !role || !status || !link || !notes) {
            return res.status(400).json({ message: 'Please fill out all fields' });
        };

        const newApplication = await Application.create({
            user: ownerId,
            company,
            role,
            status,
            link,
            notes
        });

        return res.status(201).json({
            message: 'Application saved successfully!',
            user: newApplication.user,
            company: newApplication.company,
            role: newApplication.role,
            status: newApplication.status,
        });

    } catch (error) {
        console.error(error);

        if (error.name === 'ValidationError') {
            const errorMessage = Object.values(error.errors).map((err) => { return err.message })
            return res.status(400).json({ errors: errorMessage })
        }

        return res.status(500).json({ message: 'Internal Server Error' });
    }


}

export async function getApplications(req, res) {
    try {
        const user = req.userId;

        const applications = await Application.find({ user }).sort({ createdAt: -1 })

        return res.status(200).json({ applications })
    } catch (error) {
        console.error(error)
        return res.status(500).json({message: "Failed to fetch applications"});
    }

}