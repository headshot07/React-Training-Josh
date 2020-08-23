import React from 'react'
import './Title.css'
//import 'font-awesome/css/font-awesome.min.css';

const Title = ({userDetails}) => {
  return (
    <>
      <div className="title-name">
        <h3>Hello, {userDetails.username}</h3>
        <center>
          
            Discover Projects
            <h6 className="message">91908 Public Projects To Discover.</h6>
            <input className="search form-control form-control-md ml-6 w-50" type="text" placeholder="Type Something..." aria-label="Search" />
          
        </center>
      </div>
    </>
  )
}

export default Title