const Cart = require("../model/cartModel");

exports.getCart = async (req, res) => {
  try {
    const data = await Cart.find();
    res.json({ errors: false, data: data });
  } catch (error) {
    res.status(500).json({ errors: true, message: error.message });
  }
};

exports.postCart = async (req, res) => {
  try {
    const data = await Cart.create(req, res);
    res.json({ errors: false, data: data });
  } catch (error) {
    res.status(500).json({ errors: true, message: error.message });
  }
};

exports.putCart = async (req, res) => {
  try {
    const data = await Cart.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({ errors: false, data: data });
  } catch (error) {
    res.status(500).json({ errors: true, message: error.message });
  }
};

exports.deleteCart = async (req, res) => {
  try {
    const data = await Cart.findByIdAndUpdate(req.params.id);
    res.json({ errors: false, data: data });
  } catch (error) {
    res.status(500).json({ errors: true, message: error.message });
  }
};
