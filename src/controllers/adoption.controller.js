import mongoose from "mongoose";
import * as adoptionService from "../services/adoption.service.js";
import { validateAdoption } from "../utils/validateAdoption.js";

export const getAll = async (req, res) => {
   try {
      const adoptions = await adoptionService.getAllAdoptions();

      res.status(200).json({
         status: "success",
         payload: adoptions
      });

   } catch (error) {

      res.status(500).json({
         status: "error",
         message: error.message
      });

   }
};

export const getById = async (req, res) => {

   if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
         status: "error",
         message: "Invalid adoption id"
      });
   }

   try {

      const adoption = await adoptionService.getAdoptionById(req.params.id);

      if (!adoption) {

         return res.status(404).json({
            status: "error",
            message: "Adoption not found"
         });

      }

      res.status(200).json({
         status: "success",
         payload: adoption
      });

   } catch (error) {

      res.status(500).json({
         status: "error",
         message: error.message
      });

   }

};

export const create = async (req, res) => {

   const validationError = validateAdoption(req.body);

   if(validationError) {
      return res.status(400).json({
         status: "error",
         message: validationError
      });
   }

   try {

      const adoption = await adoptionService.createAdoption(req.body);

      res.status(201).json({
         status: "success",
         payload: adoption
      });

   } catch (error) {

      res.status(500).json({
         status: "error",
         message: error.message
      });

   }

};

export const update = async (req, res) => {

   const validationError = validateAdoption(req.body);

   if (validationError) {
      return res.status(400).json({
         status: "error",
         message: validationError
      });
   }

   if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
         status: "error",
         message: "Invalid adoption id"
      });
   }

   try {

      const adoption = await adoptionService.updateAdoption(
         req.params.id,
         req.body
      );

      if (!adoption) {

         return res.status(404).json({
            status: "error",
            message: "Adoption not found"
         });

      }

      res.status(200).json({
         status: "success",
         payload: adoption
      });

   } catch (error) {

      res.status(400).json({
         status: "error",
         message: error.message
      });

   }

};

export const remove = async (req, res) => {

   if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
         status: "error",
         message: "Invalid adoption id"
      });
   }

   try {

      const adoption = await adoptionService.deleteAdoption(req.params.id);

      if (!adoption) {

         return res.status(404).json({
            status: "error",
            message: "Adoption not found"
         });

      }

      res.status(200).json({
         status: "success",
         message: "Adoption deleted successfully"
      });

   } catch (error) {

      res.status(500).json({
         status: "error",
         message: error.message
      });

   }

};