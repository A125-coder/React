import React, { Fragment } from 'react';
import './header.css';
import { Link } from "react-router-dom"

class Header extends React.Component {
    state = {
        search: ""
    };

    onSearch = (event) => {
        const value = event.target.value;
        this.setState({
            search: value
        });
        this.props.onSearch(value);
    };

    render() {
        return (
            <Fragment>
                <header className="navbar navbar-expand-lg navbar-light">
                    <ul className="navbar-nav mr-auto">
                        <li className="btn-outline-success my-2 my-sm-0" id="head">
                            <Link className="nav-link" to="/">Contact List</Link>
                        </li>
                        <li className="btn-outline-success my-2 my-sm-0" id="head">
                            <Link className="nav-link" to="/contact">Add contact</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
                            onChange={this.onSearch}
                        />
                        {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                    </form>
                </header>
            </Fragment>
        );
    }
}

export default Header;