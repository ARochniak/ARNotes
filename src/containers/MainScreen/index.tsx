import React from 'react';

import Notes from 'components/Notes';
import Comments from 'components/Comments';

import style from './index.style';
import './index.css';

const MainScreen: React.FC = (props: any) => {
  return (
    <div className="row no-gutters" style={style.container}>
      <div className="col note_comment">
        <Notes />
      </div>
      <div className="col note_comment">
        <Comments />
      </div>
    </div>
  );
};

export default MainScreen;
