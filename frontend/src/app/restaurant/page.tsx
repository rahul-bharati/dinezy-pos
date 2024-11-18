import React from "react";
import Link from "next/link";

const RestaurantListPage: React.FC = () => {
    const restaurants = [
        {
            name: "The Food Place",
            owner: "John Doe",
            contact: "123-456-7890",
            address: "123 Main St",
            city: "Metropolis",
            landmark: "Near Central Park",
            pincode: "123456"
        },
        {
            name: "Yummy Bites",
            owner: "Jane Smith",
            contact: "987-654-3210",
            address: "456 Elm St",
            city: "Gotham",
            landmark: "Next to City Hall",
            pincode: "654321"
        }
    ]

    return (
        <div className="container mt-5">
            <div className="row mb-4">
                <div className="col text-end">
                    <Link href="/restaurant/add" className="btn btn-primary">Create New Restaurant</Link>
                </div>
            </div>
            <div className="row">
                {restaurants.map((restaurant, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card">
                            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Restaurant"/>
                            <div className="card-body">
                                <h5 className="card-title">{restaurant.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{restaurant.owner}</h6>
                                <p className="card-text">{restaurant.address}, {restaurant.city}, {restaurant.landmark}, {restaurant.pincode}</p>
                                <p className="card-text"><small
                                    className="text-muted">Contact: {restaurant.contact}</small></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RestaurantListPage;