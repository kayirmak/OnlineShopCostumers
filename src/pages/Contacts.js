import React, { Component } from 'react';

import AboutUs from '../components/AboutUs/AboutUs';

class Contacts extends Component {
    render() {
        return (
            <div className="contacts">
                <AboutUs/>
                <div className="contacts-card">
                    <h2>CONTACTS</h2>
                    
                    <div className="contacts-address">
                        <span>richman@costumers.com</span>
                        <span>Kyrgyzstan, Bishkek, Bishkek Park</span>
                        <span>996 775 234 876</span>
                    </div>
                    <iframe className="geo-card" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4641.5101441970155!2d74.58367408710055!3d42.873515610244056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dec2f84b71%3A0x29c1629c788878ab!2z0JHQuNGI0LrQtdC6INCf0LDRgNC6!5e0!3m2!1sru!2skg!4v1591356184829!5m2!1sru!2skg" ></iframe>

                </div>
            </div>
        );
    }
}

export default Contacts;
