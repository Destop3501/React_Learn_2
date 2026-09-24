import React, { Component } from "react";
import './Product.css';

const products = [
    {
        emoji: '🍦',
        name: 'ice cream',
        price: 5
    },
    {
        emoji: '🍩',
        name: 'donuts',
        price: 2.5,
    },
    {
        emoji: '🍉',
        name: 'watermelon',
        price: 4
    }
];


class Product extends Component {
    cart = {
        Carts: [],
        Total: 0
    };

    currencyOptions = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    };

    getTotal = () => {
        return this.cart.Total.toLocaleString(undefined, this.currencyOptions);
    };

    setcart = (updatedCart) => {
        this.cart = updatedCart;
        this.forceUpdate(); // Re-renders the component without state/setState
    };

    add = () => {
        this.setcart({
            Carts: [...this.cart.Carts, "Ice Cream"],
            Total: this.cart.Total + 1
        });
    };

    remove = () => {
        if (this.cart.Carts.length === 0) return;
        this.setcart({
            Carts: this.cart.Carts.slice(0, -1),
            Total: Math.max(0, this.cart.Total - 1)
        });
    };

    render() {
        return (
            <div>
                <h2>Shopping Cart: {this.cart.Carts.length} total items</h2>
                <h4>Total: {this.getTotal()}</h4>
                {products.map(product =>
                    <div className="Product">
                        <h1>Product Name: {product.name}</h1>
                        <img src={product.emoji} alt={product.emoji} />
                        <p>{product.price}</p>
                        <button onClick={this.add}>Add</button>
                        <button onClick={this.remove}>Remove</button>
                    </div>
                )}
            </div>
        );
    }
}

export default Product;
