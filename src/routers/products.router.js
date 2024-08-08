import express from 'express';
import { Product } from '../schemas/product.schema.js';

const productsRouter = express.Router();

// 상품 생성 (CREATE)
productsRouter.post('/products', async (req, res) => {
      // 상품 정보 파싱하기
      const { name, description, manager, password } = req.body;

      // DB에 저장하기
      const product = new Product({ name, description, manager, password });
      let data = await product.save();

      // 완료 메세지 반환하기
      return res.status(201).json({ status: 201, message: '상품 생성에 성공했습니다.', data });
});


export { productsRouter };