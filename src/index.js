import React from 'react';
import ReactDOM from 'react-dom';
import uuid from "uuid"
import './index.css';
import List from './Components/ComponentList/componentlist';
import AddContact from "./Components/ComponentList/Add Contact/AddContact";
import Header from "./Components/Header/header"
import EditContact from "./Components/Edit Contact/EditContact"
import Error from "./Components/Error/error"
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";

class App extends React.Component {

    URL = "https://contact-list-210a0.firebaseio.com/list.json";

    componentDidMount() {
        // fetch(URL, {
        //     method: "PUT",
        //     headers: {
        //         Accept: "application/json",
        //         ContentType: "application/json"
        //     },
        //     body: JSON.stringify(this.state.list)
        // }).then(response => {
        //     console.log(response);
        // }).catch(err => console.log(err));
        this.updateContactList();
    }

    updateContactList = () => {
        fetch(this.URL).then(response => {
            return response.json();
        })
            .then(list => {
                if(list===null){
                    this.setState({
                        list: []
                    });
                }
                else{
                this.setState({
                    list: list
                })
            }
            })
            .catch(err => console.log(err));
    }


    state = {
        list: [
            // {
            //     id: uuid(),
            //     name: "Rosemary Porter",
            //     address: "5267 Cackson St",
            //     phone: "(497) 160-9776",
            //     email: "rosemary.porter@example.com",
            //     avatar: 16,
            //     gender: "women",
            //     favorite: true
            // },
            // {
            //     id: uuid(),
            //     name: "Debbie Schmidt",
            //     address: "3903 W Alexander Rd",
            //     phone: "(867) 322-1852",
            //     email: " debbie.schmidt@example.com",
            //     avatar: 19,
            //     gender: "women",
            //     favorite: false
            // },
            // {
            //     id: uuid(),
            //     name: "Mike Anamendolla",
            //     address: "5842 Hillcrest Rd",
            //     phone: "(870) 288-4149",
            //     email: "mike.ana@example.com",
            //     avatar: 1,
            //     gender: "men",
            //     favorite: false
            // },
            // {
            //     id: uuid(),
            //     name: "Seth Frazie",
            //     address: "7396 E North St",
            //     phone: "(560) 180-4143",
            //     email: "seth.frazier@example.com",
            //     avatar: 10,
            //     gender: "men",
            //     favorite: false
            // },
            // {
            //     id: uuid(),
            //     name: "Mike Tyson",
            //     address: "Harm, Stepana Banderu str.",
            //     phone: "(097)888-21-12",
            //     email: "tyson@ukr.net",
            //     avatar: 16,
            //     gender: "men",
            //     favorite: false
            // }
        ],
        currentContact: "",
        findContact: ""
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

    async onSaveData(newList) {
        await fetch(this.URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newList)
        }).then(response => {
            console.log("Response =>", response);
        }).catch(err => console.log("Catch =>", err.Message));
        this.updateContactList();
    };


    onAddContact = (name, address, telNumber, email, avatar, gender) => {
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
            gender: gender,
            favorite: false,
        }
        const newList = [...this.state.list, newContact];
        // console.log(newList);
        // this.setState(state => {
        //     return { list: newList };
        // });
        this.onSaveData(newList);
    }

    onDeleteContact = id => {
        const index = this.state.list.findIndex(elem => elem.id === id);
        // console.log("Delete Contact", id);
        // console.log("Delete Contact Index = ", index);
        const partOne = this.state.list.slice(0, index);
        const partTwo = this.state.list.slice(index + 1);
        const newList = [...partOne, ...partTwo];
        // console.log(newList)
        // this.setState(state => {
        //     return {
        //         list: newList
        //     }
        // });
        this.onSaveData(newList);
    };

    onEditContact = id => {
        const index = this.state.list.findIndex(elem => elem.id === id);
        const currentContact = this.state.list[index];
        // console.log(currentContact);
        this.setState({
            currentContact: currentContact
        })
    };

    onEditCurrentContact = (id, name, address, telNumber, email, avatar, gender) => {
        const index = this.state.list.findIndex(elem => elem.id === id);
        let editedContact = {
            id: id,
            name: name,
            address: address,
            phone: telNumber,
            email: email,
            avatar: avatar,
            gender: gender,
            favorite: false,
        }
        const partOne = this.state.list.slice(0, index);
        const partTwo = this.state.list.slice(index + 1);
        const newList = [...partOne, editedContact, ...partTwo];
        this.setState({
            list: newList
        })
        this.onSaveData(newList);
    }

    onSearch = contactName => {
        // console.log("contactName => ", contactName);
        this.setState({
            findContact: contactName
        });
    };

    onShowContactList = (list, findContact) => {
        if (findContact.length === 0) {
            return list;
        }
        return list.filter(item => {
            return item.name.toLowerCase().indexOf(findContact.toLowerCase()) > -1;
        })
    }

    render() {
        const showContacts = this.onShowContactList(this.state.list, this.state.findContact)
        return (
            <div className="container">
                <div id="card_contacts">
                    <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">

                        <Router>
                            <Header onSearch={this.onSearch} />
                            <Switch>
                                <Route path="/" exact render={() => (<List list={showContacts}
                                    onStarChange={this.onStarChange} onDeleteContact={this.onDeleteContact} onEditContact={this.onEditContact} />)} />
                                <Route path="/contact" exact render={() => <AddContact
                                    onAddContact={this.onAddContact}
                                />} />
                                <Route path="/edit" exact render={() => <EditContact currentContact={this.state.currentContact} onEditCurrentContact={this.onEditCurrentContact}
                                />} />
                                <Route path="*" exact={true} component={withRouter(Error)} />
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