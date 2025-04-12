import React from 'react'
import Header from './components/Header'
import Herosection from './components/Herosection'
import Categories from './components/Categories'
import Arrivels from './components/Arrivels'
import Banner from './components/Banner'
import Tab from './components/Tab'
import Loading from './components/Loading'
import Driver from './components/Driver'
import Footer from './components/Footer'
const Ecommerce = () => {
    return (
        <div>
            <Header />
            <Herosection />
            <Categories />
            <Arrivels />
            <Banner />
            <Tab />
            <Driver />
            <Footer/>

        </div>
    )
}

export default Ecommerce