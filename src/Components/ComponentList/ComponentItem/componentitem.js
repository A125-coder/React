import React, { Component, Fragment } from 'react';
import './componentitem.css';
import { Link } from "react-router-dom";

class Item extends Component {

    state = {
        name: this.props.name,
        address: this.props.address,
        phone: this.props.phone,
        email: this.props.email,
        avatar: this.props.avatar,
        gender: this.props.gender,
        favorite: this.props.favorite
    };

    onRandomAvatar = () => {
        const avatar = Math.floor(Math.random() * Math.floor(99));
        this.setState({
            avatar: avatar
        });
    }

    onFavorite = () => {
        let favorite = this.state.favorite;
        this.setState({
            favorite: !favorite
        });
        // this.props.onStarChange();
    }

    render() {
        const { name, address, phone, email, avatar, gender } = this.state;
        const URL = `https://api.randomuser.me/portraits/${gender}/${avatar}.jpg`;
        if (this.props.favorite) {
            var favoriteStyle = "fas fa-star fa-2x";
        }
        else {
            favoriteStyle = "far fa-star fa-2x";
        }
        // console.log("Item props =>", this.props);
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
                            <span
                                className="fas fa-trash-alt fa-2x text-danger float-right pulse"
                                title="Delete"
                                onClick={this.props.onDeleteContact}
                            ></span>
                            <Link to="/edit"
                                className="fas fa-edit fa-2x text-success float-right pulse"
                                title="Edit"
                                onClick={this.props.onEditContact}
                            ></Link>
                            <span
                                className="float-right pulse"
                            >
                                <i className={favoriteStyle}
                                    aria-hidden="true"
                                    onClick={this.props.onStarChange}
                                    title="Favorite"
                                ></i>
                            </span>
                            <span className="name lead">{name}</span>
                            <br></br>
                            <span className="fa fa-map-marker fa-fw text-muted" data-toggle="tooltip" title="" data-original-title={address}></span>
                            <span className="text-muted">{address}</span>
                            <br></br>
                            <span className="fa fa-phone fa-fw text-muted" data-toggle="tooltip" title="" data-original-title={phone}></span>
                            <span className="text-muted small">{phone}</span>
                            <br></br>
                            <span className="fa fa-envelope fa-fw text-muted" data-toggle="tooltip" title="" data-original-title={email}></span>
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