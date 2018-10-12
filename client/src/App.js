import React, { Component } from 'react';
import './App.css';
import MedicationList from './components/MedicationList';
import NavBar from './components/TopNav';
import MedListForm from './components/MedListForm';
import DailyTabs from './components/DailyTabs';

import MedTable from './components/MedTable';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <NavBar/>
      <DailyTabs/>
      <MedicationList/>
      <MedListForm/>
      <MedTable/>
      </React.Fragment>
    );
  }
}

export default App;