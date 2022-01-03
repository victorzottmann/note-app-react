import React, { Component } from 'react';

import CreateNoteForm from './components/CreateNoteForm/CreateNoteForm';
import NoteList from './components/NoteList/NoteList';
import './assets/App.css';
import './assets/index.css';

class App extends Component {
  render() {
    return (
      <section className="content">      
        <CreateNoteForm />
        <NoteList />
      </section>
    );
  }
}

export default App;
