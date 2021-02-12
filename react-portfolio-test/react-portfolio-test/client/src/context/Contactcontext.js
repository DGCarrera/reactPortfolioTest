import React, {createContext, useState} from 'react';

import axios from 'axios';

export const ContactContext = createContext();

export const ContactProvider = (props) => {
    const [statusMessage, setStatusMessage] = useState('');
    const postContact = (data) => {
        axios.post('/contacts', data, {headers: {'Content-Type':'application/json'}})
        .then(res => {
            console.log(res);
            return res.data;
        }).then(data => {
            setStatusMessage('Message Has been Sent');
            setTimeout(() => setStatusMessage(''), 3000);
        }).catch(err => {
            setStatusMessage('Message Failed. Please try again.');
            setTimeout(() => setStatusMessage(''),3000)
        });
    }
    return(
        <ContactContext.Provider value={{postContact, statusMessage}}>
            {props.children}
        </ContactContext.Provider>
    )
}