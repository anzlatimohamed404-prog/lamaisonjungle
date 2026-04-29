import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// j'importe le composant Banner.jsx
import Banner from './components/Banner'
import Cart from './components/Cart'

function App() {
    return (
        <>
            <Banner />
            <Cart />
        </>
    )
}

export default App