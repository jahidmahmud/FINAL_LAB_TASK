import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div>
            <Link to="/home">Home</Link>|
            <Link to="/add">Add Event</Link>|
            <Link to="/list">Event List</Link>
        </div>
    )
}
