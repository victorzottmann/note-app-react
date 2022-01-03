import React, { Component } from 'react'

import NoteCard from '../NoteCard/NoteCard';
import './NoteList.css';

class NoteList extends Component {
  render() {
    return (
      <ul className='note-list'>
        {this.props.notes.map((note, index) => {
          return (
            <li className='note-list-item' key={index}>
              <NoteCard title={note.title} text={note.text} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NoteList;