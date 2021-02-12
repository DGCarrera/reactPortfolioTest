import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrderDto, UpdateOrderDto, Order } from './order.schema';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel('Orders') private readonly orderModel: Model<Order>,
  ) {}

  async createOrder(order: CreateOrderDto): Promise<Order> {
    try {
      const newOrder = await new this.orderModel(order);
      if (!newOrder) throw new Error('unable to save order');
      return await newOrder.save();
    } catch (e) {
      throw e;
    }
  }

  async updateOrder(id: string, updatedOrder: UpdateOrderDto): Promise<Order> {
    try {
      const order = await this.orderModel.findById(id);
      if (!order) throw new Error('unable to retrieve order.');
      if (updatedOrder.items) {
        order.items = updatedOrder.items;
      }
      const saved = await order.save();
      if (!saved) throw new Error('unable to save order.');
      return saved;
    } catch (e) {
      throw e;
    }
  }

  async getAllOrders(): Promise<Order[]> {
    try {
      return await this.orderModel.find().exec();
    } catch (e) {
      throw e;
    }
  }
}
