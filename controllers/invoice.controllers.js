const Invoice = require("../models/invoice.models");

const getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    return res.status(200).json({ invoices: invoices });
  } catch (err) {
    return res.status(500).json({ err_message: err });
  }
};
const createInvoice = async (req, res) => {
  try {
    const newInvoice = new Invoice({
      seller: req.verifiedUser._id,
      items: req.body.items,
      total: req.body.total,
      sellerConfirmation: {
        signature: req.verifiedUser.signature,
      },
    });
    const savedInvoice = await newInvoice.save();
    return res.status(201).json({ invoice: savedInvoice });
  } catch (err) {
    return res.status(500).json({ err_message: err });
  }
};

module.exports.getInvoices = getInvoices;
module.exports.createInvoice = createInvoice;
