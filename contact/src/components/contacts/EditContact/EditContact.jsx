import React from "react";
import { Link } from "react-router-dom";

let EditContact = () => {
    return(
        <React.Fragment>
                        <section className="add-contact p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-primary fw-bold">Edit Contact</p>
                            <p className="fst-italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure reprehenderit praesentium tempora maxime porro, animi aut.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <form>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Name"/>
                                </div>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Photo URL"/>
                                </div>
                                <div className="mb-2">
                                    <input type="number" className="form-control" placeholder="Mobile"/>
                                </div>
                                <div className="mb-2">
                                    <input type="email" className="form-control" placeholder="Email"/>
                                </div>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Company"/>
                                </div>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Title"/>
                                </div>
                                <div className="mb-2">
                                    <select className="form-control">
                                        <option value="">Select a group</option>
                                    </select>
                                </div>  
                                <div className="mb-2">
                                    <input type="submit" className="btn btn-primary" value="Update"></input>
                                    <Link to={'/contacts/ContactList'} className="btn btn-dark ms-2">Cancel</Link>
                                </div>  
                            </form>
                        </div>
                        <div className="col-md-6">
                            <img src="data:image/png;base64,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" alt="edited" className="contact-img"/>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
};

export default EditContact;