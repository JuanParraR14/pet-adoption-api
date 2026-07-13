export const validateAdoption = (data) => {
   const { petName, species, adopterName } = data;

   if (!petName || petName.trim() === "") {
      return "Pet name is required";
   }

   if (!species || species.trim() === "") {
      return "Species is required";
   }

   if (!adopterName || adopterName.trim() === "") {
      return "Adopter name is required";
   }

   return null;
};