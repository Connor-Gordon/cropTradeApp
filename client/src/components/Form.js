import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getForm } from '../actions/listActions';

import '../styles/formStyles.css'


class Form extends Component {
  state = {
    photo:'',
    title: '',
    description:'',
    id: this.props.match.params.id
  }
    


 //handleSubmit
 handleSubmit= (e) => {
    e.preventDefault()
    getForm({
       photo: this.state.photo,
       title: this.state.title,
       description: this.state.description,
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
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input className="image" autoComplete='off' type="url" name="photo" onChange={this.handleChange} placeholder="Photo URL" value={this.state.photo}/> <br/>
          <input className="formtitle" autoComplete='off' type="text" name="title" onChange={this.handleChange} placeholder="Title" value={this.state.title}/><br/>
          <textarea className="textarea" autoComplete='off' name="description" onChange={this.handleChange} placeholder="Description" value={this.state.description}></textarea><br/>
          <button type="submit">Submit</button> 

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