import * as Yup from "yup";

export const taskValidationSchema = Yup.object({
  project: Yup.string()
    .required("Project is required"),
  work: Yup.string()
    .required("Type of work is required"),
  description: Yup.string()
    .min(10, "Description must be at least 10 characters")
    .required("Task description is required"),
  hours: Yup.number()
    .min(1, "Hours must be at least 1")
    .max(24, "Hours cannot exceed 24")
    .required("Hours is required"),
});