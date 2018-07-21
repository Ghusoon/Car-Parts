

import React from "react";
import "./form.css"


const Media = props => (

<div className="media" >
<img alt={props.name} src={props.image} className="align-self-start mr-3 rounded" style={{width:200}}/>
<div className="media-body">
<p className="price">{props.price}</p>
<h4><a className="alink" href="https://www.amazon.com/Premier-Gear-PG-13826-Professional-Alternator/dp/B00KY0B4FQ/ref=sr_1_2?s=automotive&ie=UTF8&qid=1532125863&sr=1-2&keywords=premier+gear+alternator&refinements=p_89%3APremier+Gear">{props.name}</a></h4>
<p className="grade"> Grade: {props.Grade}</p>
  <p>{props.description}</p>
</div>
</div>
);

export default Media;