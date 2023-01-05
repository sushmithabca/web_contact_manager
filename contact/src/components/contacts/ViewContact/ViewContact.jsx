import React from "react";
import { Link } from "react-router-dom";


let ViewContact = () => {
    return(
        <React.Fragment>
            <section className="view-contact-intro p-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col">
                            <p className="h3 text-warning fw-bold">View Contact</p>
                            <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magnam ab itaque expedita odit? Aut, nulla.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="view-contact mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="data:image/png;base64,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" alt="girl" className="contact-img"/>
                        </div>
                        <div className="col-md-8">
                        <ul className="list-group">
                                            <li className="list-group-item list-group-item-action">
                                                Name : <span className="fw-bold">Vishagan</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                Mobile : <span className="fw-bold">914141414</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                Email : <span className="fw-bold">Vishagan16@gmail.com</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                Company : <span className="fw-bold">Vishagan16@gmail.com</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                Title : <span className="fw-bold">Vishagan16@gmail.com</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                Group : <span className="fw-bold">Vishagan16@gmail.com</span>
                                            </li>
                                        </ul>
                        </div>
                    </div>
                        <div className="row">
                            <div className="col">
                                <Link to={'/contacts/ContactList'} className="btn btn-warning">Back</Link>
                            </div>
                        </div>
                </div>

            </section>


        </React.Fragment>
    )
};

export default ViewContact;