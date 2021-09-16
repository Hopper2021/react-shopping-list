import axios from 'axios';
import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';


function App() {

    //POST
    const addList = (event) => {
        event.preventDefault();
        axios({
            method: 'POST',
            url: '/list',
            data: {
              name:
              quantity:
              unit:  
            }.then((response) => {
                console.log(response);
                //clearUseStateInputs
                //fetchList()/GET function;
            })
        })
    }
    return (
        <div className="App">
            <Header />
            <main>
                <h3>Add an item</h3>
                <div>
                    <p>Item: <input /></p>
                    <p>Quantity: <input /></p>
                    <p>Unit: <input /></p>
                    <button>Save</button>
                </div>
                <h3>Shopping List</h3>
                <div>
                    <button>Reset</button>
                    <button>Clear</button>
                    <div className="content-container">
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
