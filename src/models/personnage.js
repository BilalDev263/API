import mongoose from "mongoose";
const { Schema, model } = mongoose;

const personnageschema = new Schema({
  name: String,
  race: String,
  powerLevel: Number,
  transformations: [String],
  friends: [String],
  enemies: [String]
});


export default model("Personnage", personnageschema);
