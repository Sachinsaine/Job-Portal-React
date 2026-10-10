import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const jobSchema = z
  .object({
    company: z.string().trim().min(1, "Company is required"),
    jobTitle: z.string().trim().min(1, "Job title is required"),

    experienceMin: z.coerce
      .number()
      .min(0, "Minimum experience cannot be negative"),

    experienceMax: z.coerce
      .number()
      .min(0, "Maximum experience cannot be negative"),

    salaryMin: z.coerce.number().min(0, "Minimum salary cannot be negative"),
    salaryMax: z.coerce.number().min(0, "Maximum salary cannot be negative"),

    place: z.string().trim().min(1, "Location is required"),
    jobType: z.string().trim().min(1, "Jobtype is required"),
  })
  .refine((data) => data.experienceMax >= data.experienceMin, {
    message:
      "Maximum experience must be greater than or equal to minimum experience",
    path: ["experienceMax"],
  })
  .refine((data) => data.salaryMax >= data.salaryMin, {
    message:
      "Maximum Salary must be greater than or equal to minimum experience",
    path: ["salaryMax"],
  });

export const Addjobs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      company: "",
      jobTitle: "",
      experienceMin: 0,
      experienceMax: 0,
      salaryMin: 0,
      salaryMax: 0,
      place: "",
      jobType: "",
    },
  });

  const onSubmit = (formData) => {
    console.log(formData);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("company")} placeholder="company" />
        {errors.company && <span>{errors.company.message}</span>}
        <input type="text" {...register("jobTitle")} placeholder="jobTitle" />
        {errors.jobTitle && <span>{errors.jobTitle.message}</span>}

        <input
          type="text"
          {...register("experienceMin")}
          placeholder="experience-Min"
        />
        {errors.experienceMin && <span>{errors.experienceMin.message}</span>}

        <input
          type="text"
          {...register("experienceMax")}
          placeholder="experience-Max"
        />
        {errors.experienceMax && <span>{errors.experienceMax.message}</span>}

        <input
          type="text"
          {...register("salaryMin")}
          placeholder="salary-min"
        />
        {errors.salaryMin && <span>{errors.salaryMin.message}</span>}

        <input
          type="text"
          {...register("salaryMax")}
          placeholder="salary-max"
        />
        {errors.salaryMax && <span>{errors.salaryMax.message}</span>}

        <input type="text" {...register("place")} placeholder="place" />
        {errors.place && <span>{errors.place.message}</span>}

        <select name="Select job type" id="" {...register("jobType")}>
          <option value="Select job type">Select job type</option>
          <option value="fulltime">Full-time</option>
          <option value="parttime">Part-time</option>
        </select>
        {errors.jobType && <span>{errors.jobType.message}</span>}

        <button type="submit">add job</button>
      </form>
    </div>
  );
};
