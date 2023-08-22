import './styles/App.css'

import { AppContext } from './context';
import { Form } from './components/form';
import { Header } from './components/header';
import { IState } from './model';
import { Results } from './components/results';
import { useState } from 'react';

const initalState: IState = {
  principalAmount: 0,
  interestAmount: 0,
  totalAmount: 0,
  monthlyPayment: 0,
  currency: '$'
}

function App() {
  const [state, dispatch] = useState(initalState)
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

          <AppContext.Provider value={{ state, dispatch }}>
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
          </AppContext.Provider>

        </main>
    </div>
  );
}

export default App;
