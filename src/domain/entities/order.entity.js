class Order {
    constructor(id, product, description, quantity, unitPrice, discount, totalPrice) {
        this.id = id;
        this.product = product;
        this.description = description;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
        this.discount = discount;
        this.totalPrice = totalPrice;
    }
}

module.exports = Order;