export const ADD_NOTE = 'ADD_NOTE';
export const SET_ACTIVE_NOTE = 'SET_ACTIVE_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const ADD_COMMENT = 'ADD_COMMENT';

export interface IStore {
  activeNote: number;
  notes: INotes[];
}
interface INotes {
  title: string;
  comments: IComments[];
}
interface IComments {
  color: string;
  content: string;
}

export interface IAddNote {
  type: typeof ADD_NOTE;
  content: string;
}

export interface ISetActiveNote {
  type: typeof SET_ACTIVE_NOTE;
  activeNote: number;
}
export interface IRemoveNote {
  type: typeof REMOVE_NOTE;
  index: number;
}
export interface IAddComment {
  type: typeof ADD_COMMENT;
  content: string;
  color: string;
}

export type IAction = IAddNote | ISetActiveNote | IRemoveNote | IAddComment;
