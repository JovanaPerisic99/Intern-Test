import React from 'react'
import { IViewProps } from '../../models/index'
import './View.css'

export const View = ({ view, setIsNewCustomerView }: IViewProps) => {
    return (
        <div className="view-btns">
            <button
                className={'view-btn btn ' + (view ? 'not_active' : 'active')}
                onClick={(): void => setIsNewCustomerView(false)}
            >
                All Promotions
            </button>
            <button
                className={'view-btn btn ' + (view ? 'active' : 'not_active')}
                onClick={(): void => setIsNewCustomerView(true)}
            >
                New Customers
            </button>
        </div>
    )
}
