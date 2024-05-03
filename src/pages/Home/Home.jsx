import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Main from './Main/Main'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header linkToBanner={true} />
            <Main />
            <Footer />
        </>
    )
}

export default Home