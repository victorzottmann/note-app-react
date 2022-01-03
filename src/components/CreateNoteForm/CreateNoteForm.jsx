import React, { Component } from 'react'

import './CreateNoteForm.css';

class CreateNoteForm extends Component {
  constructor() {
    super();
    this.title = "";
    this.text = "";
  }

  handleTitleChange(e) {
    e.stopPropagation();
    this.title = e.target.value;
  }

  handleTextChange(e) {
    e.stopPropagation();
    this.text = e.target.value;
  }

  handleCreateNote(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.createNote(this.title, this.text);
    console.log("Form props", this.props);
  }

  render() {
    return (
      <form className='form'
        onSubmit={this.handleCreateNote.bind(this)}
      >
        <input 
          type="text" 
          placeholder='Title'
          className='form-input'
          onChange={this.handleTitleChange.bind(this)}
        />
        <textarea
          rows={15}
          placeholder='Write something...'
          className='form-input'
          onChange={this.handleTextChange.bind(this)}
        />
        <button className='form-input form-submit'>
          Create Note
        </button>
      </form>
    );
  }
}

export default CreateNoteForm;