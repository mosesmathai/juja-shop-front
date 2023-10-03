import mongoose from "mongoose";

export function mongooseConnect() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise()
  } else {
    const uri = 'mongodb+srv://mosesmathai3:30180344@cluster0.m3klb0i.mongodb.net/'
    return mongoose.connect(uri)
  }
}