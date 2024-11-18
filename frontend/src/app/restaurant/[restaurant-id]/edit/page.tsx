import React from "react";

const AddRestaurant: React.FC = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">Edit Restaurant</h5>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="restaurantName" className="form-label">Restaurant Name</label>
                                    <input type="text" className="form-control" id="restaurantName"
                                           placeholder="Enter restaurant name"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="ownerName" className="form-label">Owner Name</label>
                                    <input type="text" className="form-control" id="ownerName"
                                           placeholder="Enter owner name"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="contact" className="form-label">Contact</label>
                                    <input type="text" className="form-control" id="contact"
                                           placeholder="Enter contact number"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="address"
                                           placeholder="Enter address"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="city" className="form-label">City</label>
                                    <input type="text" className="form-control" id="city" placeholder="Enter city"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="landmark" className="form-label">Landmark</label>
                                    <input type="text" className="form-control" id="landmark"
                                           placeholder="Enter landmark"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="pincode" className="form-label">Pincode</label>
                                    <input type="text" className="form-control" id="pincode"
                                           placeholder="Enter pincode"/>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Update Restaurant</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddRestaurant;