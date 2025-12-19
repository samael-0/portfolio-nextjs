"use server";

import dbConnect from "@/utils/mongodb";
import shrawan from "@/model/InfoModel";

export async function GetUserName() {
  await dbConnect();
  const userdata = await shrawan.find().lean(); // plain JS objects
  const data = userdata.map((u) => ({
    ...u,
    _id: u._id.toString(), // convert ObjectId to string
  }));

  console.log(data, "Asdasd");
  return data[0];
}
