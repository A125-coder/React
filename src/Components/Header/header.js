import React, { Fragment } from 'react';
import './header.css';

const Header = () => {
    return (
        <Fragment>
            <header className="navbar navbar-expand-lg navbar-light">
                <ul className="navbar-nav mr-auto">
                    <li className="btn-outline-success my-2 my-sm-0" id="head">
                        <a className="nav-link" href="/">Contact List</a>
                    </li>
                    <li className="btn-outline-success my-2 my-sm-0" id="head">
                        <a className="nav-link" href="/contact">Add contact</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </header>
        </Fragment>
    );
}

export default Header;