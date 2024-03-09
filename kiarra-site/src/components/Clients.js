import React from 'react';
import '../App.css';
import clientsData from './clientsData'; // Update the import to your clients data

const Clients = () => {
    return (
        <div className="clients-container">
            <br />
            <h1 className="page-title">Clients</h1>
            <br />
            {clientsData.map((category, index) => (
                <div key={index} className="category">
                    <h2>{category.category}</h2>
                    <p>{category.description}</p>
                    <ul>
                        {category.clients.map((client, clientIndex) => (
                            <li key={clientIndex}>{client}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Clients;
