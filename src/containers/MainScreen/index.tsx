import React from 'react';

import Notes from 'components/Notes';
import Comments from 'components/Comments';

import './index.css';

const MainScreen: React.FC = (props: any) => {
  return (
    <div className="notes_cont row no-gutters">
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
