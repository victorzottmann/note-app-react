import React, { Component } from 'react'

import NoteCard from './NoteCard/NoteCard';

class NoteList extends Component {
  render() {
    return (
      <ul>
        {Array.of("Work", "Work", "Studies").map((category, index) => {
          return (
            <li key={index}>
              <NoteCard />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NoteList;