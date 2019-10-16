import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
        <Link style={{color: "white", fontWeight: 'bold'}} className="navbar-brand" to="/"> Zomato Restaurant </Link>
    </nav>
)

export default Navbar