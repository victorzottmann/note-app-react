import React, { Component } from 'react';

import './NoteCard.css'

class NoteCard extends Component {
  render() { 
    return (
      <section className='note-card'>
        <header className='note-card-header'>
          <h3 className='note-card-title'>Title</h3>
        </header>
        <p className='note-card-text'>Write something...</p>
      </section>
    );
  }
}
 
export default NoteCard;

