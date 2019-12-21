import {
  ADD_COMMENT,
  ADD_NOTE,
  IAction,
  IStore,
  REMOVE_NOTE,
  SET_ACTIVE_NOTE
} from 'store/types';

const reducer = (state: IStore, action: IAction): IStore => {
  switch (action.type) {
    case ADD_NOTE: {
      return {
        ...state,
        notes: [...state.notes, { title: action.content, comments: [] }]
      };
    }
    case SET_ACTIVE_NOTE: {
      return {
        ...state,
        activeNote: action.activeNote
      };
    }
    case REMOVE_NOTE: {
      const notes = [...state.notes];
      notes.splice(action.index, 1);
      return {
        ...state,
        notes
      };
    }
    case ADD_COMMENT: {
      const notes = [...state.notes];
      notes[state.activeNote].comments.push({
        color: action.color,
        content: action.content
      });
      return {
        ...state,
        notes
      };
    }
    default:
      return state;
  }
};

export default reducer;
