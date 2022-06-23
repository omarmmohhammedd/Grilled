import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <div className='container-fluid'>
        <div id='text'>
        <h1 id="container_head">Grilled</h1>
          <p id="container_des">Food To Fit Any Test</p>
          <Link id="order_btn" to="/menu">Order Now</Link>
          </div>
      </div>
    </div>
  )
}

export default Home