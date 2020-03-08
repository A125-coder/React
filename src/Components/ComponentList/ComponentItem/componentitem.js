import React from 'react';
import './componentitem.css';

function Item() {
    return (
        <li className="list-group-item">
            <div className="row w-100">
                <div className="col-12 col-sm-6 col-md-3 px-0">
                    <img src="http://demos.themes.guide/bodeo/assets/images/users/w102.jpg" alt="Rosemary Porter" className="img-fluid rounded-circle d-block mx-auto" />
                </div>

                <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                    <span className="fa fa-envelope fa-lg text-danger float-right" title="left you a message"></span>
                    <span className="name lead">Rosemary Porter</span>
                    <br></br>
                    <span className="fa fa-map-marker fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="5267 Cackson St"></span>
                    <span className="text-muted">5267 Cackson St</span>
                    <br></br>
                    <span className="fa fa-phone fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="(497) 160-9776"></span>
                    <span className="text-muted small">(497) 160-9776</span>
                    <br></br>
                    <span className="fa fa-envelope fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="rosemary.porter@example.com"></span>
                    <span className="text-muted small text-truncate">rosemary.porter@example.com</span>
                    <br></br>

                </div>
            </div>
        </li>
    );
}

export default Item;