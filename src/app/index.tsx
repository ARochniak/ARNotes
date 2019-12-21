import React from 'react';

import MainScreen from 'containers/MainScreen';
import Sidebar from 'containers/Sidebar';

import { connect } from 'react-redux';

import { IStore } from 'store/types';

import style from './App.style';

import './App.css';

const App: React.FC = (props: any) => {
  return (
    <div style={style.app}>
      <div className="sidebar" style={style.sidebar}>
        <Sidebar />
      </div>
      <div style={style.main}>
        <MainScreen />
      </div>
    </div>
  );
};

const mapStateToProps = (state: IStore) => ({
  notes: state.notes
});

export default connect(mapStateToProps)(App);
