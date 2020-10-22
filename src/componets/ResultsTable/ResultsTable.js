import React, { useState } from 'react'
import DetailedView from '../DetailedView/DetailedView'
import Table from 'react-bootstrap/Table'
import './style.css'

export const ResultsTable = ({ restaurants }) => {
    const [details, showDetails] = useState(false);
    const [restaurantIndex, setRestaurantIndex] = useState(0);

    return (
        <div>
            {details && 
                <DetailedView 
                  restaurant={restaurants[restaurantIndex]}
                  showDetails={showDetails}
                />
            }
            <Table striped bordered hover variant='dark'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Phone Number</th>
                        <th>Genre</th>
                    </tr>
                </thead>
                <tbody>
                    {restaurants.map((restaurant, i) => {
                        const spacedGenres = restaurant.genre.split(',').join(', ');
                        return (
                            <tr 
                              key={restaurant.id} 
                              onClick={(e) => {
                                  console.log(i)
                                  setRestaurantIndex(i);
                                  showDetails(true);
                              }}
                            >
                                <td>{restaurant.name}</td>
                                <td>{restaurant.city}</td>
                                <td>{restaurant.state}</td>
                                <td>{restaurant.telephone}</td>
                                <td>{spacedGenres}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table >
        </div>
    )
}

export default ResultsTable;