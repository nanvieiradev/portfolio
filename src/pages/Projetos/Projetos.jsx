import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Main from './Main/Main'

const Projetos = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header linkToBanner={false} />
            <Main />
        </>
    )
}

export default Projetos