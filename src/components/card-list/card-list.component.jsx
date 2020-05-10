import React , { Component } from 'react';
import './card-list.style.css';
import Card from '../card/card.component';

const CardList = (props) => {
    return(
        <div className='container'>
            <div className='card-list mt-4'>
            {
                props.users.map(user => (
                    <Card key={user.id} user={user} />
                ))
            }   
            </div>
        </div>
    )
}

export default CardList;