import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../Header/Header.jsx'
import './App.css';


function App() {
    //create useStates
    let [listName, setListName] = useState('');
    let [listQuantity, setListQuantity] = useState(0);
    let [listUnit, setListUnit] = useState('');
    let [listArray, setListArray] = useState([]);

    const handleSubmit = (event) => {
       addList(); 
    }

    //POST
    const addList = () => {
        //event.preventDefault();
        axios({
            method: 'POST',
            url: '/list',
            data: {
                name: listName,
                quantity: listQuantity,
                unit: listUnit,
            }
        }).then((response) => {
            console.log(response);
            getList();
            setListName('');
            setListQuantity('');
            setListUnit('');
        }).catch(function (error) {
            console.log(error);
        });
    }

// renders list on page load
// linked to getList.then setShoppingList
useEffect(() => {
    getList()
}, [])

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
                    <button onClick={handleSubmit}>Save</button>
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
