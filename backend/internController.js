import e from "express";

import Internship from "./models/Internshi.js";

export async function getAllInternships (req, res) {
    try {
        const internships = await Internship.find();
        res.status(200).json(internships)

    } catch (error) {
        console.error("Error fetching internships:", error);
        res.status(500).json({message: "Server Error: Unable to fetch internships"})
    }
}


export async function createAInternship (req, res) {
    try {
        const { title, description, company, location, duration, role, applyBy, stipend } = req.body;
        const internship = new Internship({ title, description, company, location, duration, role, applyBy, stipend });
        await internship.save();
        res.status(201).json({message: "Internship created successfully"});
    } catch (error) {
        console.error("Error creating internship:", error);
        res.status(500).json({message: "Server Error: Unable to create internship"});
    }
}

export async function updateAInternship (req, res) {
    try {
        const { title, description, company, location, duration, role, applyBy, stipend } = req.body;
        const internship = await Internship.findByIdAndUpdate(req.params.id, { title, description, company, location, duration, role, applyBy, stipend }, { new: true });
        if (!internship) {
            return res.status(404).json({message: "Internship not found"});
        }
        res.status(200).json({message: "Internship successfully updated"});
    } catch (error) {
        console.error("Error updating internship:", error);
        res.status(500).json({message: "Server Error: Unable to update internship"});
    }
}

export async function deleteAInternship (req, res) {
    try {
        const internship = await Internship.findByIdAndDelete(req.params.id);
        if (!internship) {
            return res.status(404).json({message: "Internship not found"});
        }
        res.status(200).json({message: "Internship successfully deleted"});
    } catch (error) {
        console.error("Error deleting internship:", error);
        res.status(500).json({message: "Server Error: Unable to delete internship"});
    }
}