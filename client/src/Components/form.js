import React from "react";
import "./form.css"


const Form = props => (
  <div class="container">

  <form className="book">

    <div className="form-group">
      <label htmlFor="topic">
        <strong>Topic</strong>
      </label>
      <select class="form-control" id="sel1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
    </select>

    <label htmlFor="topic">
    <strong>Topic</strong>
  </label>
  <select class="form-control" id="sel1">
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
</select>

<label htmlFor="topic">
<strong>Topic</strong>
</label>
<select class="form-control" id="sel1">
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
</select>

<label htmlFor="topic">
<strong>Topic</strong>
</label>
<select class="form-control" id="sel1">
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
</select>

<label htmlFor="topic">
<strong>Topic</strong>
</label>
<select class="form-control" id="sel1">
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
</select>
     
      </div>
    <div className="pull-left">
      <button
        onClick={props.handleFormSubmit}
        type="submit"
        className="btn btn-lg btn-primary"
      >
        Submit
      </button>
    </div>
  </form>

  <div className="book" >
  <div className="media" >
  <img src="https://franceracing.fr/wp-content/uploads/2017/12/McLaren-Copier.jpeg" className="align-self-start mr-3 rounded" style={{width:100}}/>
  <div className="media-body">
    <h4>Media Top</h4>
    <p>Lorem ipsum...</p>
  </div>
  </div>
</div>

</div>
);

export default Form;
