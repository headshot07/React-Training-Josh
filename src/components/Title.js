import React from 'react'
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import './Title.css'
//import 'font-awesome/css/font-awesome.min.css';

const Title = () => {
  return (
    <center>
      <div className="title-name">
        Discover Projects
        <h6 className="message">91908 Public Projects To Discover.</h6>
        <input className="search form-control form-control-md ml-6 w-50" type="text" placeholder="Type Something..." aria-label="Search" />
      </div>
    </center>
  )
}

export default Title