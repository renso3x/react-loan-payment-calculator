import '../styles/Form.css'

import React, { ChangeEvent, useContext, useState } from 'react'

import { AppContext } from '../context';

export const Form = () => {
    const { state, dispatch } = useContext(AppContext)

    const [principal, setPrincipal] = useState<number>(5000)
    const [loanTermInYears, setloanTermInYears] = useState<number>(4)
    const [loanTermInMonths, setloanTermInMonths] = useState<number>(48)
    const [interestRate, setInterestRate] = useState<number>(6.5)


    const handleLoanTermsInYears = (e: ChangeEvent<HTMLInputElement>) => {
        const termInYears: number = Number(e.target.value)
        const termInMonths = termInYears * 12
        setLoanTerms(termInYears, termInMonths)
    }

    const handleLoanTermsInMonths = (e: ChangeEvent<HTMLInputElement>) => {
        const termInMonths: number = Number(e.target.value)
        const termInYears = termInMonths  / 12
        setLoanTerms(termInYears, termInMonths)
    }

    const setLoanTerms = (termInYears: number, termInMonts: number) => {
        setloanTermInYears(termInYears)
        setloanTermInMonths(termInMonts)
    }

    const calculateMonthlyPayment = () => {}

    return (
        <div className="form">
            <div className="form-item loan-amt">
                <label htmlFor="loanAmount">Loan amount</label>
                <input
                    type="number"
                    id="loanAmount"
                    placeholder="E.g 5000"
                    value={principal}
                    onChange={(e) => setPrincipal(Number(e.target.value))}
                />
                <select
                    value={state.currency}
                    onChange={(e) =>
                        dispatch(prevState => ({
                        ...prevState,
                        currency: e.target.value
                        })
                    )}
                >
                    <option value="GH₵">GH₵</option>
                    <option value="$">$</option>
                    <option value="£">£</option>
                    <option value="€">€</option>
                </select>
            </div>
            <div className="form-item">
                <label htmlFor="loanTermYears">Loan term in years</label>
                <input
                    type="number"
                    id="loanTermYears"
                    placeholder="E.g 4"
                    value={loanTermInYears}
                    onChange={(e) => handleLoanTermsInYears(e)}
                />
            </div>
            <div className="form-item">
                <label htmlFor="loanTermMonths">Loan term in months</label>
                <input
                    type="number"
                    id="loanTermMonths"
                    placeholder="E.g 48"
                    value={loanTermInMonths}
                    onChange={(e) => handleLoanTermsInMonths(e)}
                />
            </div>
            <div className="form-item interest-rate">
                <label htmlFor="interest">Interest rate per year</label>
                <input
                    type="number"
                    id="interest"
                    placeholder="E.g 6.5"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                />
            </div>
            <div className="calculate">
                <button className="calculateBtn" onClick={calculateMonthlyPayment}>
                    Calculate
                </button>
            </div>
        </div>
    );
}