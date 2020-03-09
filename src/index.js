import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import List from './Components/ComponentList/componentlist';

const App = () => {
    return (
        <div className="container">
            <div id="card_contacts">
                <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                    <h1>Contact List App</h1>
                    <List />
                </div>
            </div>
        </div>
    );
}


ReactDOM.render(<App />, document.getElementById('root'));