import React, { Component } from 'react'

class CreateNoteForm extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder='Title' />
        <textarea name="" id="" cols="30" rows="5" placeholder='Write something...' />
        <button>Create Note</button>
      </form>
    );
  }
}

export default CreateNoteForm;