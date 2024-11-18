import React from "react";
import Link from "next/link";

const Register: React.FC = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Register</h5>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="formName" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="formName"
                                           placeholder="Enter your name"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmail" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="formEmail"
                                           placeholder="Enter your email"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formPhone" className="form-label">Phone</label>
                                    <input type="text" className="form-control" id="formPhone"
                                           placeholder="Enter your phone number"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formCity" className="form-label">City</label>
                                    <input type="text" className="form-control" id="formCity"
                                           placeholder="Enter your city"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formPassword" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="formPassword"
                                           placeholder="Enter your password"/>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Register</button>
                                <p className="text-center mt-3">
                                    Already registered with us? <Link href="/login">Login</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;