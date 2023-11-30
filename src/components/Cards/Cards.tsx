import React from 'react'
import { Card, ErrorView } from '../index'
import { ICardsProps } from '../../models/index'
import './Cards.css'

export const Cards = ({ data }: ICardsProps) => {
    return data && data.length > 0 ? (
        <div className="cards">
            {data.map((promo) => (
                <Card key={promo.id} {...promo} />
            ))}
        </div>
    ) : (
        <ErrorView />
    )
}
