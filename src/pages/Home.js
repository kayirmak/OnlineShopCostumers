import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.data.map((item) =>(
                        <li>
                            <Link to={'/product/'+ item.id}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Home;
