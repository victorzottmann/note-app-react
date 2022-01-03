import React, { Component } from 'react';

import './App.css';
import CreateNoteForm from './components/CreateNoteForm';
import NoteList from './components/NoteList';

class App extends Component {
  render() {
    return (
      <div className="App">      
        <CreateNoteForm />
        <NoteList />
      </div>
    );
  }
}

export default App;
