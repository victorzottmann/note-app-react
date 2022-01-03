import React, { Component } from 'react';

import CreateNoteForm from './components/CreateNoteForm/CreateNoteForm';
import NoteList from './components/NoteList/NoteList';
import './assets/App.css';
import './assets/index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  createNote(title, text) {
    const newNote = {title, text};
    const newNotesArray = [...this.state.notes, newNote]
    const newState = {
      notes: newNotesArray
    }

    this.state.notes.push(newNote);
    this.setState(newState);
    console.log(newNotesArray);
  }

  render() {
    return (
      <section className="content">      
        <CreateNoteForm createNote={this.createNote.bind(this)} />
        <NoteList notes={this.state.notes} />
      </section>
    );
  }
}

export default App;
