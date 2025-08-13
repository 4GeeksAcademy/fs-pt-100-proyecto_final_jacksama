import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../CSS/UserA.css';
import { Card } from '../components/Card';

export const UserA = () => {
    return (
        <div className="userA-container">
            <div className="userA-container1">
                <h1 className="userA-title">MIS FRASES</h1>
            </div>
            <div className="userA-container2">
                <h1 className="userA-subtitle">MIS AUTORES</h1>
            </div>
            <div className="container userA-container3">
                <div className="row g-4">
                    <div className="col-md-4">
                        <Card />
                    </div>
                    <div className="col-md-4">
                        <Card />
                    </div>
                    <div className="col-md-4">
                        <Card />
                    </div>
                    <div className="col-md-4">
                        <Card />
                    </div>
                    <div className="col-md-4">
                        <Card />
                    </div>
                    <div className="col-md-4">
                        <Card />
                    </div>
                </div>
            </div>
        </div>
    );
};
