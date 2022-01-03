import React, { Component } from 'react'

import NoteCard from '../NoteCard/NoteCard';
import './NoteList.css';

class NoteList extends Component {
  render() {
    return (
      <ul className='note-list'>
        {Array.of("Work", "Work", "Studies").map((category, index) => {
          return (
            <li className='note-list-item' key={index}>
              <NoteCard />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NoteList;