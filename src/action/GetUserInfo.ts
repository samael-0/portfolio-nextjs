"use server";

import dbConnect from "@/utils/mongodb";
import Info from "@/model/InfoModel";

export async function GetUserName() {
  await dbConnect();
  const userdata = await Info.find().lean();

  return userdata[0];
}
