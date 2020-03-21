import React from 'react';
import ReactDOM from 'react-dom';
import uuid from "uuid"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';
import List from './Components/ComponentList/componentlist';
import AddContact from "./Components/ComponentList/Add Contact/AddContact";
import Header from "./Components/Header/header"


class App extends React.Component {
    state = {
        list: [
            {
                id: uuid(),
                name: "Rosemary Porter",
                address: "5267 Cackson St",
                phone: "(497) 160-9776",
                email: "rosemary.porter@example.com",
                avatar: 16,
                gender: "women",
                favorite: true
            },
            {
                id: uuid(),
                name: "Debbie Schmidt",
                address: "3903 W Alexander Rd",
                phone: "(867) 322-1852",
                email: " debbie.schmidt@example.com",
                avatar: 19,
                gender: "women",
                favorite: false
            },
            {
                id: uuid(),
                name: "Mike Anamendolla",
                address: "5842 Hillcrest Rd",
                phone: "(870) 288-4149",
                email: "mike.ana@example.com",
                avatar: 1,
                gender: "men",
                favorite: false
            },
            {
                id: uuid(),
                name: "Seth Frazie",
                address: "7396 E North St",
                phone: "(560) 180-4143",
                email: "seth.frazier@example.com",
                avatar: 10,
                gender: "men",
                favorite: false
            },
            {
                id: uuid(),
                name: "Mike Tyson",
                address: "Harm, Stepana Banderu str.",
                phone: "(097)888-21-12",
                email: "tyson@ukr.net",
                avatar: 16,
                gender: "men",
                favorite: false
            }
        ]
    }

    onStarChange = (id) => {
        // console.log("onStarChange", id);
        this.setState(state => {
            const index = this.state.list.findIndex(elem => elem.id === id);
            // console.log('Index = ', index);
            const newStar = this.state.list.slice();
            newStar[index].favorite = !newStar[index].favorite;
            return {
                favorite: !this.newStar
            }
        });
    };

    onAddContact = (name, address, telNumber, email, avatar) => {
        // console.log("NewName = ", name);
        // console.log("NewAddress = ", address);
        // console.log("NewTelNumber = ", telNumber);
        // console.log("NewEmail = ", email);
        let newContact = {
            id: uuid(),
            name: name,
            address: address,
            phone: telNumber,
            email: email,
            avatar: avatar,
            gender: "women",
            favorite: false,
        }
        const newList = [...this.state.list, newContact];
        // console.log(newList);
        this.setState(state => {
            return { list: newList }
        });
    }

    onDeleteContact = id => {
        const index = this.state.list.findIndex(elem => elem.id === id);
        // console.log("Delete Contact", id);
        // console.log("Delete Contact Index = ", index);
        const partOne = this.state.list.slice(0, index);
        const partTwo = this.state.list.slice(index + 1);
        const newList = [...partOne, ...partTwo];
        // console.log(newList)
        this.setState(state => {
            return {
                list: newList
            }
        })
    };

    render() {
        return (
            <div className="container">
                <div id="card_contacts">
                    <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                        <Header />
                        <Router>
                            <Switch>
                                <Route path="/" exact render={() => (<List list={this.state.list} onStarChange={this.onStarChange} onDeleteContact={this.onDeleteContact} />)} />
                                <Route path="/contact" exact render={() => <AddContact
                                    onAddContact={this.onAddContact}
                                />} />
                            </Switch>
                        </Router>
                        {/* <h1>Contact List App</h1>
                        <List
                            list={this.state.list}
                            onStarChange={this.onStarChange}
                            onDeleteContact={this.onDeleteContact}
                        />
                        <AddContact
                            onAddContact={this.onAddContact}
                        /> */}
                    </div>
                </div>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));