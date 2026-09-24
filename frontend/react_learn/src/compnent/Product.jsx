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

    add = (product) => {
        this.setcart({
            Carts: [...this.cart.Carts, product.name],
            Total: this.cart.Total + product.price
        });
    };

    remove = (product) => {
        const index = this.cart.Carts.lastIndexOf(product.name);
        if (index === -1) return; // Product is not in cart
        const updatedCarts = [...this.cart.Carts];
        updatedCarts.splice(index, 1);
        this.setcart({
            Carts: updatedCarts,
            Total: Math.max(0, this.cart.Total - product.price)
        });
    };

    render() {
        return (
            <div>
                <h2>Shopping Cart: {this.cart.Carts.length} total items</h2>
                <h4>Total: {this.getTotal()}</h4>
                <div className="Product">
                    {products.map(product => (
                        <div className="details" key={product.name}>
                            <h2>Product Name: {product.name}</h2>
                            <div className="img">
                                <span role="img" aria-label={product.name}>{product.emoji}</span>
                            </div>
                            <h3>Product Price: ${product.price}</h3>
                            <div className="buttons">
                                <button onClick={() => this.add(product)}>Add</button>
                                <button onClick={() => this.remove(product)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Product;
