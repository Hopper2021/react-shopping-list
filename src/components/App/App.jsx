import React from 'react';
import Header from '../Header/Header.jsx'
import './App.css';
import axios from 'axios';
import {useState} from 'react';


function App() {

    const [shoppingList, setShoppingList] = useState([]);

    const updateList = () => {

    }//end updateList


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
