import React from 'react'
import { IData } from '../../models/index'
import './Card.css'

export const Card = ({
    name,
    description,
    heroImageUrl,
    termsAndConditionsButtonText,
    joinNowButtonText,
}: IData) => {
    return (
        <div className="card">
            <div className="container">
                <img src={heroImageUrl} alt="promo_img" />
            </div>
            <div className="details">
                <h3 className="card-title">{name}</h3>
                <p>{description}</p>
                <div className="card-btns">
                    <button className="card-btn btn">
                        {termsAndConditionsButtonText}
                    </button>
                    <button className="card-btn btn">
                        {joinNowButtonText}
                    </button>
                </div>
            </div>
        </div>
    )
}
