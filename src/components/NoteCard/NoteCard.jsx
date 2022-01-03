import React, { Component } from 'react';

import './NoteCard.css'

class NoteCard extends Component {
  render() { 
    return (
      <section className='note-card'>
        <header>
          <h3>Title</h3>
        </header>
        <p>Write something...</p>
      </section>
    );
  }
}
 
export default NoteCard;

