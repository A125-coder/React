import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import List from './Components/ComponentList/componentlist';

class App extends React.Component {

    state = {
        list: [
            {
                id: 0,
                name: "Rosemary Porter",
                address: "5267 Cackson St",
                phone: "(497) 160-9776",
                email: "rosemary.porter@example.com",
                avatar: 16,
                gender: "women",
                favorite: true
            },
            {
                id: 1,
                name: "Debbie Schmidt",
                address: "3903 W Alexander Rd",
                phone: "(867) 322-1852",
                email: " debbie.schmidt@example.com",
                avatar: 19,
                gender: "women",
                favorite: false
            },
            {
                id: 2,
                name: "Mike Anamendolla",
                address: "5842 Hillcrest Rd",
                phone: "(870) 288-4149",
                email: "mike.ana@example.com",
                avatar: 1,
                gender: "men",
                favorite: false
            },
            {
                id: 3,
                name: "Seth Frazie",
                address: "7396 E North St",
                phone: "(560) 180-4143",
                email: "seth.frazier@example.com",
                avatar: 10,
                gender: "men",
                favorite: false
            },
            {
                id: 4,
                name: "Mike Tyson",
                address: "Harm, Stepana Banderu str.",
                phone: "(097)888-21-12",
                email: "tyson@ukr.net",
                avatar: 16,
                gender: "men",
                favorite: false
            }]
    }
    onStarChange = (id) => {
        console.log("onStarChange", id);
    }


    render() {
        console.log(this.state.list);
        return (
            <div className="container">
                <div id="card_contacts">
                    <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                        <h1>Contact List App</h1>
                        <List list={this.state.list} onStarChange={this.onStarChange} />
                    </div>
                </div>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));