import React from 'react'
import './style.css'

export const DetailedView = ({ restaurant, showDetails }) => {
    return (
        <div>
            <div className='modal-cover'>
            </div>
            <div className='modal-card'>
                <button className='close-btn' onClick={() => showDetails(false)}>
                    x
                </button>
                
                <div className='restaurant-details'>
                    <h2>{restaurant.name}</h2>
                    <p>Address: {restaurant.address1}</p>
                    <p>{restaurant.city}, {restaurant.state} {restaurant.zip}</p>
                    <p>Hours: {restaurant.hours}</p>
                    <p>Phone Number: {restaurant.telephone}</p>
                    <p>Attire: {restaurant.attire}</p>
                    <p>Website: 
                        <a className='website' href={restaurant.website} target='_blank' rel='noopener noreferrer'>
                            {restaurant.website}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DetailedView;
