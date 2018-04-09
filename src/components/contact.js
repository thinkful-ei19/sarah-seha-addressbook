import React from 'react';

import './contact.css';

export default function Contact(props) {
     return (
         <div className="contact" id={`${props.index}`}>
            <img className="contact-photo" src={props.photo} alt={`${props.name} photo`} />
            <h2 className="contact-name">
             {props.name} 
            </h2>
            <address className="contact-address">
             {props.address}
            </address>
        </div>
     )
}
