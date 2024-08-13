import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header() {
    const [count, setCount] = useState(0)

    return (
        <>
            <header class="header_wrapper">
                <h1 class="header_title">🔥 Fireplace Palace</h1>
            </header>
        </>
    )
}

export default Header
