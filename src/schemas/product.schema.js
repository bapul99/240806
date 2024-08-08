import mongoose from 'mongoose';
import { PRODUCT_STATUS } from '../constants/product.constant.js';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    manager: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false, // password는 조회 시 제외
    },
    status: {
      type: String,
      required: true,
      // enum: ['FOR_SALE', 'SOLD_OUT'],
      enum: Object.values(PRODUCT_STATUS), 
      default: PRODUCT_STATUS.FOR_SALE,
    },
  },
  { timestamps: true, toJSON: { virtuals: true } },
);

export const Product = mongoose.model('Product', productSchema);