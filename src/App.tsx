import './styles/App.css'

import { Form } from './components/form';
import { Header } from './components/header';
import React from 'react';
import { Results } from './components/results';

function App() {
  return (
    <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <section>
            <div className="info">
              This is a <span className="highlight"> Simple Intereset Loan Payment Calculator</span>. This calculator will help you determine the monthly payment on a loan. Simply enter the loan amount, term and interest rate in the fields below and click calculate
            </div>
          </section>

          <section>
            <div className='row'>
              <div className="col col-1">
                <Form />
              </div>
              <div className='col col-2'>
                <Results />
              </div>
            </div>
          </section>
        </main>
    </div>
  );
}

export default App;
