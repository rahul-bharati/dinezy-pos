import React from "react";
import Link from "next/link";

const Login: React.FC = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Login</h5>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="formEmail" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="formEmail"
                                           placeholder="Enter your email"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formPassword" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="formPassword"
                                           placeholder="Enter your password"/>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Login</button>
                                <p className="text-center mt-3">
                                    Not registered with us? <Link href="/register">Sign up now</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;