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
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
