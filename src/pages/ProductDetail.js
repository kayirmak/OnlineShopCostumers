import React, { Component } from 'react';

import Kio from '../components/radio/Kio';


class ProductDetail extends Component {
    state = {
        data:{
            id: null,
            name: null,
            img: null,
            size: null,
            description: null,
            price: null,
      
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        const data = this.props.data.filter(a => a.id === +id)[0];
        this.setState({
            data: data ? data : null
        })
    }

    render() {
        return (
            <>
            {!this.state.data ? <h1>ERROR 404</h1> : (
                <div className="product-detail">
                    <img className="product-img" src={this.state.data.img}/>
                    <div className="product-desc">
                        <h2>{this.state.data.name}</h2>
                        <p className="product-description">{this.state.data.description}</p>
                        <p className="product-price">{this.state.data.price} KGS</p>
                        <Kio size={this.state.data.size}/>
                        <button className="product-button">Buy</button>

                    </div>
                </div>
            )}
            </>
        );
    }
}

export default ProductDetail;
