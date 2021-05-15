const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");
const InvoiceSchema = new Schema(
  {
    buyer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    seller: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    reference: { type: String, required: true, unique: true, index: true },
    items: [
      {
        name: { type: String, maxlength: 256, required: true },
        description: { type: String, maxlength: 1024 },
        quantity: { type: Number, min: 1, required: true },
        unitPrice: { type: Number, min: 0, required: true },
        subTotal: { type: Number, min: 0, required: true },
      },
    ],
    total: { type: Number, min: 0, required: true },
    isPayed: { type: Boolean, default: false },
    status: { type: String, default: "waiting_confirmation" }, // waiting_confirmation, canceled, confirmed
    buyerConfirmation: {
      signature: { type: String },
      status: { type: String, default: "waiting_confirmation" },
      confirmationDate: { type: Date },
    },
    sellerConfirmation: {
      signature: { type: String, required: true },
      status: { type: String, default: "confirmed" },
      confirmationDate: { type: Date, default: Date.now() },
    },
  },
  { timestamps: true }
);
InvoiceSchema.plugin(uniqueValidator, { message: "data is not unique" });

InvoiceSchema.pre("validate", function (next) {
  if (!this.reference) {
    this.generateReference();
  }
  next();
});

InvoiceSchema.methods.generateReference = function () {
  this.reference = ((Math.random() * Math.pow(36, 6)) | 0).toString(36);
};
module.exports = mongoose.model("Invoice", InvoiceSchema);
