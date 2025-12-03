const OrderRepository = require('../../../../domain/repositories/order.repository.interface');
const OrderModel = require('./models/order.model');
const Order = require('../../../../domain/entities/order.entity');

class OrderMongoRepository extends OrderRepository {
    async getAll() {
        const orders = await OrderModel.find();
        return orders.map(o => new Order(
            o._id.toString(),
            o.product,
            o.description,
            o.quantity,
            o.unitPrice,
            o.discount,
            o.totalPrice
        ));
    }

    async getById(id) {

        const order = await OrderModel.findById(id);
        console.log("order: " + order);
        if (!order) return null;
        return new Order(
            order._id.toString(),
            order.product,
            order.description,
            order.quantity,
            order.unitPrice,
            order.discount,
            order.totalPrice
        );
    }

    async create(orderEntity) {
        const newOrder = new OrderModel({
            product: orderEntity.product,
            description: orderEntity.description,
            quantity: orderEntity.quantity,
            unitPrice: orderEntity.unitPrice,
            discount: orderEntity.discount,
            totalPrice: orderEntity.totalPrice
        });
        const savedOrder = await newOrder.save();
        return new Order(
            savedOrder._id.toString(),
            savedOrder.product,
            savedOrder.description,
            savedOrder.quantity,
            savedOrder.unitPrice,
            savedOrder.discount,
            savedOrder.totalPrice
        );
    }

    async update(id, orderEntity) {
        const updatedOrder = await OrderModel.findByIdAndUpdate(id, {
            product: orderEntity.product,
            description: orderEntity.description,
            quantity: orderEntity.quantity,
            unitPrice: orderEntity.unitPrice,
            discount: orderEntity.discount,
            totalPrice: orderEntity.totalPrice,
        }, { new: true });

        if (!updatedOrder) return null;
        return new Order(updatedOrder._id.toString(),
            updatedOrder.product,
            updatedOrder.description,
            updatedOrder.quantity,
            updatedOrder.unitPrice,
            updatedOrder.discount,
            updatedOrder.totalPrice
        );
    }

    async delete(id) {
        await OrderModel.findByIdAndDelete(id);
    }
}

module.exports = OrderMongoRepository;