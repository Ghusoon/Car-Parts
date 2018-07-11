import React from "react";
import "./form.css"


const Form = props => (
  <div >

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
        className="btn btn-lg btn-secondary"
      >
        Submit
      </button>
    </div>
  </form>



</div>
);

export default Form;
