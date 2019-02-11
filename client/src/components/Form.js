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
    console.log(e.target.files[0])
    this.setState({
      selectedFile: e.target.files[0]
    })
  }

  fileUploadHandler = () => {
    axios.post('')
  }
  
  render() {
    return (
      <div>
        <input type="file" onChange={this.fileSelectedHandler}/>
        <button onClick={this.fileUploadHandler}>Upload</button>

        <form onSubmit={this.handleSubmit}>
          <input className="image" autoComplete='off' type="url" name="photo" onChange={this.handleChange} placeholder="Photo URL" value={this.state.photo}/> <br/>
          <input className="formtitle" autoComplete='off' type="text" name="title" onChange={this.handleChange} placeholder="Title" value={this.state.title}/><br/>
          <textarea className="textarea" autoComplete='off' name="description" onChange={this.handleChange} placeholder="Description" value={this.state.description}></textarea><br/>
          <label>Fresh By Date:</label> <br/>
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