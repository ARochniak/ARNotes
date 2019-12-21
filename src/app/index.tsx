import React from 'react';

import MainScreen from 'containers/MainScreen';
import Sidebar from 'containers/Sidebar';

import { connect } from 'react-redux';

import { IStore } from 'store/types';

import './App.css';

const App: React.FC = (props: any) => {
  return (
    <div className="App">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main">
        <MainScreen />
      </div>
    </div>
  );
};

const mapStateToProps = (state: IStore) => ({
  notes: state.notes
});

export default connect(mapStateToProps)(App);
