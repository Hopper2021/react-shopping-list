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
    let [shoppingList, setShoppingList] = useState([]);

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

const handleDelete = (itemId) => {
    console.log('User clicked delete item number', itemId);
    deleteItem(itemId);
}

const deleteItem = (itemId) => {
    console.log('Delete item');
    axios({
        method: 'DELETE',
        url: `/list/${itemId}`,
    }).then(getList).catch((error) => {
        console.log('Error in DELETE', error);
    })
}

    return (
        <div className="App">
            <Header />
            <main>
                <h3>Add an item</h3>
                <div>
                    <p>Item: <input onChange={(event) => setListName(event.target.value)} placeholder="Add item"/></p>
                    <p>Quantity: <input onChange={(event) => setListQuantity(event.target.value)} type="number" placeholder="Quantity"/></p>
                    <p>Unit: <input onChange={(event) => setListUnit(event.target.value)} placeholder="An Absolute Unit" /></p>
                    <button onClick={handleSubmit}>Save</button>

                </div>
                <h3>Shopping List</h3>
                <div>
                    <button>Reset</button>
                    <button>Clear</button>
                    <div className="content-container">
                        Map should go here:
                        {shoppingList.map(shoppingItem => (<div><p> {shoppingItem.name} {shoppingItem.quantity} {shoppingItem.unit}</p><button onClick={() => handleDelete(shoppingItem.id)}>Remove Item</button></div>))}        
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;

// {famousPeopleArray.map(people =>
//(<li key={people.id}>{people.name} does {people.role}</li>))}
