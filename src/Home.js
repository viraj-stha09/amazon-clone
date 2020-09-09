import React from 'react';
import './Home.css';
import Product from "./Product";


function Home(){
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_,jpg" alt=""/>
                <div className="home__row">
                    <Product
                        id={1992}
                        title="The E-Myth Revisited: Why Most Small Businesses Don't Work and What to Do About It"
                        price={8.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51MPu8oSjcL._SX330_BO1,204,203,200_.jpg"
                        rating={4}
                    />
                    <Product
                        id={1997}
                        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                        price={8.79}
                        image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                        rating={3}
                    />
                    <Product
                        id={1996}
                        title="Beckham Hotel Collection Gel Pillow (2-Pack) - Luxury Plush Gel Pillow - Dust Mite Resistant & Hypoallergenic - King"
                        price={39.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51hHZHQRhNL._AC_SL1435_.jpg"
                        rating={2}
                    />

                </div>
                <div className="home__row">
                    <Product
                        id={1999}
                        title="FLYBIRD Weight Bench, Adjustable Strength Training Bench for Full Body Workout with Fast Folding- 2020 Version"
                        price={161.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61mHRNtUdAL._AC_SL1500_.jpg"
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id={1994}
                        title="LBell Night Light Projector 3 in 1 Galaxy Projector Star Projector w/LED Nebula Cloud for Baby Kids Bedroom/Game Rooms/Home Theatre/Night Light Ambiance with Bluetooth Music Speaker"
                        price={38.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81IjzxIcTXL._AC_SL1500_.jpg"
                        rating={1}
                    />
                    <Product
                        id={1993}
                        title="Twelve South Backpack for iMac and Apple Displays | Hidden Storage Shelf for Hard Drives and Accessories (Silver)"
                        price={33.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/71HEULqzadL._AC_SL1500_.jpg"
                        rating={5}
                    />
                </div>

            </div>
        </div>
    )
}

export default Home;