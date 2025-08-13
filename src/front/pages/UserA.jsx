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
                <div id="authorsCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#authorsCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#authorsCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row g-4 justify-content-center">
                                <div className="col-lg-4 col-md-6">
                                    <Card />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <Card />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <Card />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <Card />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <Card />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <Card />
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="row g-4 justify-content-center">
                                <div className="col-lg-4 col-md-6">
                                    <Card />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <Card />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <Card />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <Card />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <Card />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <Card />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#authorsCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#authorsCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};