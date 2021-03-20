import { observer } from "mobx-react-lite";
import React from "react";

const DetailsAdditionalListItem = observer(({item}) => 
    <div className="details-additional__list-item">
      {item.title ? item.title : item.name}
    </div>
);

export default DetailsAdditionalListItem;