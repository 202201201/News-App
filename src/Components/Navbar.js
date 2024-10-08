import React from 'react'
import toast from 'react-hot-toast'
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
const Navbar=(props)=>{
  
    return (
      <>
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">News App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span classNameName="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
                  <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>   
                  
        <li className="nav-item"><Link className="nav-link" to="/business">business</Link></li>   
        <li className="nav-item"><Link className="nav-link" to="/entertainment">entertainment</Link></li>   
        <li className="nav-item"><Link className="nav-link" to="/general">general</Link></li>   
        <li className="nav-item"><Link className="nav-link" to="/health">health</Link></li>   
        <li className="nav-item"><Link className="nav-link" to="/science">science</Link></li>   
        <li className="nav-item"><Link className="nav-link" to="/sports">sports</Link></li>   
        <li className="nav-item"><Link className="nav-link" to="/technology" onClick={()=>{toast.success("Success")}}>technology</Link></li>   
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
      </>   
    )
  
}

export default Navbar
