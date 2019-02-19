import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getForm } from '../actions/listActions';
import axios from 'axios'
import '../styles/formStyles.css'



class Form extends Component {
  state = {
    photo:'',
    title: '',
    fresh_by:'',
    description:"",
    zipcode: "",
    price: "",
    id: this.props.match.params.id
  }


 //handleSubmit
 handleSubmit= (e) => {
    e.preventDefault()
    getForm({
       photo: this.state.photo,
       title: this.state.title,
       description: this.state.description,
       fresh_by: this.state.fresh_by,
       zipcode: this.state.zipcode,
       price: this.state.price,
       id: this.state.id
    }).then(() => {
      this.props.history.goBack()
    })
 }


 //handleChange
  handleChange= (e)=> {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  fileSelectedHandler = e => {
    this.setState({
      selectedFile: e.target.files[0]
    })
  }

  fileUploadHandler = () => {
    axios.post('')
  }
  
  render() {
    return (
      <div className="formDiv">
        {/* <input type="file" onChange={this.fileSelectedHandler}/>
        <button onClick={this.fileUploadHandler}>Upload</button> */}

        <form onSubmit={this.handleSubmit} className="formForm">
          <label>Title of post:</label>
          <input className="formtitle" autoComplete='off' type="text" name="title" onChange={this.handleChange} placeholder="Title" value={this.state.title}/><br/>
          <label>How much are you looking for?</label>
          <input className="formtitle" autoComplete="off" type="text" name="price" onChange={this.handleChange} placeholder="Price" value={this.state.price}/>
          <label>Are you willing to trade:</label>
          <select className="formtitle">
            <option value="willing">Willing to trade/barter</option>
            <option value="cash">Cash only</option>
            <option value="donate">Looking to donate/give away</option>
          </select>
          <option></option>
          <label>Input URL of photo:</label>
          <input className="image" autoComplete='off' type="url" name="photo" onChange={this.handleChange} placeholder="Photo URL" value={this.state.photo}/> <br/>
          <label>Description of Produce:</label>
          <textarea className="textarea" autoComplete='off' name="description" onChange={this.handleChange} placeholder="Description" value={this.state.description}></textarea><br/>
          <label>ZipCode:</label>
          <input className="formtitle" autoComplete="off" name="zipcode" onChange={this.handleChange} placeholder="Zip-Code" value={this.state.zipcode}></input>
          <label>Fresh-Until Date:</label> <br/>
          <p id="formA"><a  href="http://www.eatbydate.com/" target="blank">If unsure, check before suggesting an expiration date.</a></p>
          <input className="fdate" autoComplete='off' type="date" data-date-format="DD MMMM YYYY" name="fresh_by" onChange={this.handleChange} value={this.state.fresh_by}/><br/>
          <button  className="submit" type="submit">Submit</button> 

        </form>
        
      </div>
    )
  }
}

function mapStateToProps(appState) {
  
  return {
   form: appState.listingsReducer.form
  }
}

export default connect(mapStateToProps)(Form)