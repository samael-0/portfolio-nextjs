"use server";

interface descType {
  _id: ObjectId;
  description: String;
}

interface expType {
  _id: ObjectId;
  experience: String;
  position: String;
  description: descType[];
}

import dbConnect from "@/utils/mongodb";
import { Experience, Description } from "@/model/ExperienceModel";
import { ObjectId } from "mongoose";

export async function GetExperience() {
  await dbConnect();
  const userdata: expType[] = await Experience.find()
    .lean()
    .populate("description");

  const data = userdata.map(({ description, ...u }) => {
    const modifiedDescription = description.map((item) => item.description);
    return { ...u, _id: u._id.toString(), description: modifiedDescription };
  });

  console.log(data, "Asexasdasdpdasd");
  return data;
}
