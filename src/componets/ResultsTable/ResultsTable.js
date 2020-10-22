import React from 'react'
import Table from 'react-bootstrap/Table'
import './style.css'

export const ResultsTable = ({ restaurants }) => {
    return (
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
                        <tr key={restaurant.id}>
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
    )
}

export default ResultsTable;