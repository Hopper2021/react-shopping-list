import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';


function App() {
const [shoppingList, setShoppingList] = useState([]);
const getList = () => {
    axios({
        method: 'GET',
        url: '/list',
    }).then((response) => {
        console.log(response.data);
        setShoppingList(response.data);
    }).catch((error) => {
        console.log(error);
        alert('Error making GET request');
    })
}

useEffect(() => {
    getList();
},[]);
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
