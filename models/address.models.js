const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
  city: { type: String },
  zipCode: { type: Number },
  street: { type: String },
  note: { type: String },
});
module.exports = mongoose.model("Address", AddressSchema);
