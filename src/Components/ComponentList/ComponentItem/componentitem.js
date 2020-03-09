import React, { Component, Fragment } from 'react';
import './componentitem.css';

class Item extends Component {

    state = {
        name: "Mike Tyson",
        address: "Harm, Stepana Banderu str.",
        phone: "(097)888-21-12",
        email: "tyson@ukr.net",
        avatar: 16,
        gender: "men"
    };

    onRandomAvatar = () => {
        const avatar = Math.floor(Math.random() * Math.floor(99));
        this.setState({
            avatar: avatar
        });
    }

    render() {
        const { name, address, phone, email, avatar, gender } = this.state;
        const URL = `https://api.randomuser.me/portraits/${gender}/${avatar}.jpg`;
        return (
            <Fragment>
                <li className="list-group-item">
                    <div className="row w-100">
                        <div className="col-12 col-sm-6 col-md-3 px-0">
                            <img src={URL}
                                alt={name}
                                className="img-fluid rounded-circle d-block mx-auto" />
                        </div>

                        <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">

                            <span className="name lead">{name}</span>
                            <br></br>
                            <span className="fa fa-map-marker fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="5267 Cackson St"></span>
                            <span className="text-muted">{address}</span>
                            <br></br>
                            <span className="fa fa-phone fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="(497) 160-9776"></span>
                            <span className="text-muted small">{phone}</span>
                            <br></br>
                            <span className="fa fa-envelope fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="rosemary.porter@example.com"></span>
                            <span className="text-muted small text-truncate">{email}</span>
                            <br></br>

                        </div>
                    </div>
                </li>
                <button className="btn btn-success" onClick={this.onRandomAvatar}>Random avatar</button>
            </Fragment>
        );
    }
}

export default Item;