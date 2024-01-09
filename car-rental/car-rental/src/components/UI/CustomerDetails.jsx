import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
const UserDetails = (props) => {
  const { cid, cname, contact, address, email, accountNo } = prop.item;
  return(
     <div>
        <div className="user_name">Shazim</div>
        <div className="user_contact">123123</div>
        <div className="user_address">asdoauhdo</div>
        <div className="user_email">ahsdoashdoa</div>
        <div className="user_accountno">1312312312</div>
     </div>
    
      )
    
};

export deafult UserDetails;