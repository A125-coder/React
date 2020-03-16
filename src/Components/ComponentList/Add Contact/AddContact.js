import React from "react";
import "./AddContact.css";

class AddContact extends React.Component {
    state = {
        name: null,
        address: null,
        gender: "men",
        telNumber: null,
        email: null
    };


    getName = event => {
        this.setState({
            name: event.target.value
        })
    }
    getAddress = event => {
        this.setState({
            address: event.target.value
        })
    }
    getTelNumber = event => {
        this.setState({
            telNumber: event.target.value
        })
    }
    getEmail = event => {
        this.setState({
            email: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        // console.log("onSubmit ", this.state.name);
        // console.log("onSubmit ", this.state.address);
        this.props.onAddContact(
            this.state.name,
            this.state.address,
            this.state.telNumber,
            this.state.email
        );
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Name" className="form-control" onChange={this.getName} />
                    <input type="text" placeholder="Address" className="form-control" onChange={this.getAddress} />
                    <input type="text" placeholder="Tel Number" className="form-control" onChange={this.getTelNumber} />
                    <input type="text" placeholder="Email" className="form-control" onChange={this.getEmail} />
                    <input type="radio" name="gender" className="form-check-input" value="men" id="gender_men" />
                    <label htmlFor="gender_men" className="form-check-lable">Men</label><br />
                    <button className="btn btn-success" type="submit">Add new contact</button>
                </form>
            </div>
        )
    }
}


export default AddContact;