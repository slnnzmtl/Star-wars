import React, { useState } from "react";
import { Link, HashRouter as Router } from "react-router-dom";
import PeopleIcon from "../../PeopleIcon/PeopleIcon.jsx";
import "./ListItem.scss";

const ListItem = ({item}) => {

  const getId = ({url}) => url && parseInt(
    url.split("people/")[1]
  );
  const [id] = useState(getId(item));
  
  return (
    <Router>
      <Link to={`people/${id}`} style={{ textDecoration: 'none' }} >
        <div className="list-item">
          <PeopleIcon item={item} />
          <span className="list-item__name">{item.name}</span>
        </div>
      </Link>
    </Router>
  )
};

export default ListItem;