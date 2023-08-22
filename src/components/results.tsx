import '../styles/Results.css'

import React, { useContext } from 'react'

import { AppContext } from '../context'

export const Results = () => {
    const { state } = useContext(AppContext)

    const getFormattedNumber = (value: number) => {
        return value.toLocaleString(undefined, { maximumFractionDigits: 2 })
    }

    return (
        <div className="results">
            <div className="results-item">
                <div>Total principal amount to pay</div>
                <div>
                {state.currency}{getFormattedNumber(state.principalAmount)}
                </div>
            </div>

            <div className="results-item">
                <div>Total interest to pay</div>
                <div>
                    {state.currency}{getFormattedNumber(state.interestAmount)}
                </div>
            </div>
            <hr></hr>
            <div className="results-item total-amt">
                <div>Total Loan amount to pay</div>
                <div>
                {state.currency}{getFormattedNumber(state.totalAmount)}
                </div>
            </div>

            <div className="monthly-payment">
                <div>Monthly payment</div>
                <div className="amount">
                    <span className="currency">$</span>{" "}
                    <span className="value">
                    {state.currency}{getFormattedNumber(state.monthlyPayment)}
                    </span>
                </div>
            </div>
        </div>
    )
}