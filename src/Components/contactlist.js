import React from 'react';
import './contactlist.css';
import List from "./ComponentList/componentlist"

function Contact() {
    return (
        <div className="container">
            <div className="card card-default" id="card_contacts">
                <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                    <List />
                </div>
            </div>
        </div>
    );
}

export default Contact;