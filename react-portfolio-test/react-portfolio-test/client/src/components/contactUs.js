import React, { useState, useContext } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Recaptcha from 'react-recaptcha';

import { ContactContext } from '../context/Contactcontext';

const ContactUs = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const { postContact, statusMessage } = useContext(ContactContext);

  const callback = (response) => {
    console.log(response);
  }

  const verify = (data) => {
    console.log(data);
  }

  const submit = e => {
      console.log('fired, submit');
    e.preventDefault();
    postContact({ name, email, subject, message });
  };

  return (
    <div className="contactUsBody">
      <h1 className="contactUsHeader">Contact Us</h1>
      <div className="contactUsForm">
        {statusMessage === '' ? (
          <FormText></FormText>
        ) : (
          <p className="statusContactUs">{statusMessage}</p>
        )}
        <Form className="contactUsFormBody">
          <FormGroup>
            <Label>Name</Label>
            <Input type="Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label>E-mail</Label>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Subject</Label>
            <Input
              type="subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Message</Label>
            <Input
              type="textarea"
              name="text"
              className="messageContactUs"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="contactUsReCaptcha">
             <Recaptcha  sitekey="6LdsiNwUAAAAAJoDT2vGuLINJjE_4CkNnkEEp13m" render="explicit" onloadCallback={callback} verifyCallback={verify}/>
          </FormGroup>
          <div className="contactUsButton">
            <Button onClick={submit}>Submit</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ContactUs;
