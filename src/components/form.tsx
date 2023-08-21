import '../styles/Form.css'

import React from 'react'

export const Form = () => {
    return (
    <div className="form">
      <div className="form-item loan-amt">
        <label htmlFor="loanAmount">Loan amount</label>
        <input
          type="number"
          id="loanAmount"
          placeholder="E.g 5000"
          value={''}
          onChange={(e) => null}
        />
        <select
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
          value={''}
          onChange={() => null}
        />
      </div>
      <div className="form-item">
        <label htmlFor="loanTermMonths">Loan term in months</label>
        <input
          type="number"
          id="loanTermMonths"
          placeholder="E.g 48"
          value={''}
          onChange={() => null}
        />
      </div>
      <div className="form-item interest-rate">
        <label htmlFor="interest">Interest rate per year</label>
        <input
          type="number"
          id="interest"
          placeholder="E.g 6.5"
          value={''}
          onChange={(e) => null}
        />
      </div>
      <div className="calculate">
        <button className="calculateBtn" onClick={() => null}>
          Calculate
        </button>
      </div>
    </div>
  );
}