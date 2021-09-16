import React from 'react';
import Header from '../Header/Header.jsx'
import './App.css';
import axios from 'axios';
import {useState} from 'react';


function App() {

    const [purchase, setPurchase] = useState(true);

    const handlePurchase = () => {
    console.log('updating item to purchased!!');
    const itemId = response.data.id;
    axios({
        method:'PUT',
        url: '/list/{itemId}',
    }).then((response) =>{
        //getList();
        setPurchase();
    }).catch((error) =>{
        console.log('error with updating item!', error );
        alert('Error with PUT!');
    });
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
