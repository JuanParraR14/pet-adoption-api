import Adoption from "../models/Adoption.js";

export const getAllAdoptions = () => Adoption.find();

export const getAdoptionById = (id) =>
    Adoption.findById(id);

export const createAdoption = (data) =>
    Adoption.create(data);

export const updateAdoption = (id, data) =>
    Adoption.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true
    });

export const deleteAdoption = (id) =>
    Adoption.findByIdAndDelete(id);