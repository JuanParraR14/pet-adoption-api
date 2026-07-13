export const validateAdoption = (data) => {
   const { petName, species, adopterName, email } = data;

   if (!petName || petName.trim() === "") {
      return "Pet name is required";
   }

   if (!species || species.trim() === "") {
      return "Species is required";
   }

   if (!adopterName || adopterName.trim() === "") {
      return "Adopter name is required";
   }

   if (!email.includes("@")) {
      return "invalid email"
   }

   return null;
};