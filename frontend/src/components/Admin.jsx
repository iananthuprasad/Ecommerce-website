import React from 'react'
import{Link} from 'react-router-dom'
import Adminnav from './Adminnav';
import '../styles/admin.css'

const Admin = () => {
  return (
    <div className="bodyy">
      <Adminnav />

      <div>
        <div className="admincontainer">
          <h3>ADMIN PANEL</h3>
          <div>
            <img
              src="https://themefisher.com/blog/admin-panel-templates.png"
              className="adminimg"
            ></img>
          </div>
        </div>
      </div>

      <Link to="/">shop</Link>
    </div>
  );
}

export default Admin
