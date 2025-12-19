// import { error } from "console";
import mongoose, { mongo } from "mongoose";

// type mongoCache = {
//   conn: mongoose.Connection | null;
//   promise: Promise<mongoose.Connection> | null;
// };

const MONGODB_URI = process.env.URI;
if (!MONGODB_URI) throw new Error("Missing MongoDB URI");

// if (!MONGODB_URI) {
//   throw new Error("please define the mongodburi");
// }

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// async function dbConnect() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
//       return mongoose;
//     });
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }

async function dbConnect() {
  const conn = await mongoose.connect(MONGODB_URI).then((mongoose) => {
    return mongoose;
  });
  console.log(conn.connection.id, "hjjhjjj");
  return conn;
}

export default dbConnect;
