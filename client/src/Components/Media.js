

import React from "react";
import "./form.css"


const Media = props => (

<div className="media" >
<img alt={props.name} src={props.image} className="align-self-start mr-3 rounded" style={{width:200}}/>
<div className="media-body">
<p className="price">{props.price} $</p>
<h4>{props.name}</h4>
  <p>{props.description}</p>
</div>
</div>


);

export default Media;