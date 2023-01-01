import React from 'react'
import "./../app.css"

export default function Navigation() {
  return (
    <nav>
      <h1>Pricingly</h1>

      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/calculate">Calculate</a></li>
      </ul>
    </nav>

  )
}
