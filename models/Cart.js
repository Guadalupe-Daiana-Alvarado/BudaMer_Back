import { Schema, model, Types, mongoose } from "mongoose";

let cartCollection = "cart";

let cartSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      amount: { type: Number }
    }
  ]
});

let Cart = mongoose.model(cartCollection, cartSchema);
export default Cart;
