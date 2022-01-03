import React, { Component } from 'react'

import './CreateNoteForm.css';

class CreateNoteForm extends Component {
  render() {
    return (
      <form className='form'>
        <input 
          type="text" 
          placeholder='Title'
          className='form-input'
        />
        <textarea
          rows={15}
          placeholder='Write something...'
          className='form-input'
        />
        <button className='form-input form-submit'>
          Create Note
        </button>
      </form>
    );
  }
}

export default CreateNoteForm;