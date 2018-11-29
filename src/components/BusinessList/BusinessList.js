import React from "react";
import "./BusinessList.css";
import Business from "../Business/Business.js";
class BusinessList extends React.Component{
  render(){
    return (
      <div id="businessList" className="BusinessList">
        {
          this.props.businesses.map(e => <Business key={e.id} business={e}/>)
        }
      </div>
    );
  };
};
export default BusinessList;
