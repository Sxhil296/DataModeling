import mongoose from "mongoose";

const hospitalHoursSchema = new mongoose.Schema({
    hospitalName:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital",
        required:true
    },
    workingHours: {
        type:Number,
        required:true
    }
})

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: Number,
      required: true,
      default: 0,
    },
    worksInHospitals: [
        {
            hospital: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Hospital",
                required: true
            },
            hours: [hospitalHoursSchema]
        }
    ]
  },
  { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
