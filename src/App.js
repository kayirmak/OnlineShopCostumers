import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Axios from 'axios';


import Home from './pages/Home';
import Man from './pages/Man';
import ProductDetail from './pages/ProductDetail';
import NavBar from './components/NavBar/NavBar';
import Contacts from './pages/Contacts';

class App extends Component {
    state = {
        data: []
    }

    componentDidMount(){
        this.fetch();
    }
    
    fetch = async () => {
        const {data} = await Axios.get(`http://localhost:8000/products/`);
        this.setState({data});
    }

    handleOrder = async (id) => {
        await Axios.get(`http://localhost:8000/products/${id}`);
        this.fetch();
    }



    render() {
        return (
            <BrowserRouter>
                {/* <Link to="/">Home</Link><br/>
                <Link to="/cart">Cart</Link> */}

                
                <NavBar/>
                <Switch>
                    {/* <Route path="/home" exact component={() => <Home hello="world" />} /> */}


                    <Route path="/" exact>
                        <Home data={this.state.data}/>
                    </Route>
                    <Route path="/man" component={Man} />
                    <Route path="/contacts" component={Contacts}/>
                    <Route path="/product/:id" component={(props) => <ProductDetail {...props} data={this.state.data}/>}/>
               
                    <Route>
                        <h1> error 404 Not defind</h1>
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
