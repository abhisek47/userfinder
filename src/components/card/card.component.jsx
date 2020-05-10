import React from 'react'
import './card.style.css';

const Card = (props) => {
    return(
        <div className='card'>
            <img className="card-img-top" src={`https://randomuser.me/api/portraits/men/${props.user.id}.jpg`} alt="Card image">
            </img>
            <div className='card-body'>
                <strong className='m-0'>{props.user.name}</strong>
                <p className='text-secondary'>@{props.user.username}</p>
                <p>{props.user.email}</p>
                <a href={`https://github.com/${props.user.username}`} className="btn btn-primary">See Profile</a>
            </div>
        </div>
    )
}

export default Card;