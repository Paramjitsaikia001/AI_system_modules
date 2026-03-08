import mongoose from "mongoose";
import { string } from "zod";

const ImpactReportSchema = new mongoose.Schema({
product:{
    type:String,
    required:true
},
quantity:{
    type:Number,
    required:true
},
 plastic_saved_grams: Number,

  carbon_avoided_kg: Number,

  local_sourcing_impact: String,

  impact_statement: String,

  createdAt: {
    type: Date,
    default: Date.now
  }
})

export const ImpactReport = mongoose.model("ImpactReport", ImpactReportSchema);