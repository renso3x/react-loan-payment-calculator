import '../styles/Results.css'

import React from 'react'

export const Results = () => {
    return (
        <div className="results">
            <div className="results-item">
                <div>Total principal amount to pay</div>
                <div>
                ...
                </div>
            </div>

            <div className="results-item">
                <div>Total interest to pay</div>
                <div>
                    ...
                </div>
            </div>
            <hr></hr>
            <div className="results-item total-amt">
                <div>Total Loan amount to pay</div>
                <div>
                ...
                </div>
            </div>

            <div className="monthly-payment">
                <div>Monthly payment</div>
                <div className="amount">
                    <span className="currency">...</span>{" "}
                    <span className="value">
                        ....
                    </span>
                </div>
            </div>
        </div>
    )
}