import React, { MouseEvent, useRef } from "react";

import Button from 'react-bootstrap/Button';

import { Dispatch } from "redux";
import { connect } from "react-redux";

import { IStore, IAction, ADD_NOTE, REMOVE_NOTE, SET_ACTIVE_NOTE } from "types";

import style from "./index.style";
import "./index.css";

const Notes: React.FC = (props: any) => {
    const inputEl = useRef<HTMLInputElement>(null);
    const addNote = () => {
        if (inputEl && inputEl.current) {
            props.addNote(inputEl.current.value);
            inputEl.current.value = "";
        }
    };
    // event delegation have used to change and active note and remove note 
    const switchNote = (e: MouseEvent) => {
        if ( (e.target as HTMLElement).tagName !== "SPAN") return;
        const key = ((e.target as HTMLElement).closest("LI") as HTMLLIElement).dataset.key;
        props.setActiveNote(key);
    };
    const removeNote = (e: MouseEvent) => {
        if ( (e.target as HTMLButtonElement).tagName !== "BUTTON") return;
        let key = ((e.target as HTMLButtonElement).closest("LI") as HTMLLIElement).dataset.key;
        // if comments belong to a note that is removing - clear comments
        if (key === props.activeNote) 
            props.setActiveNote(-1);
        // change acive note index  
        else if (props.activeNote !== -1 && key < props.activeNote) 
            props.setActiveNote(props.activeNote - 1);
        props.removeNote(key);
    }
    const clickHandler = (e: MouseEvent) => {
    	switchNote(e);
    	removeNote(e);
    }
    const notesList = props.notes.map( (note: any, key: number) => {
        let activeStatus = (key === +props.activeNote) ? "isActive": undefined;

        return (
            <div key={key} style={{position: "relative"}}>
                <li key={key} className={activeStatus} data-key={key} style={style.noteLi}>
                <div style={style.note}>
                    <span style={style.noteTittle}>{note.title}</span>
                </div>
                <div style={style.noteControl}>
                    <span style={style.noteLength}>{note.comments.length}</span>
                	<Button variant="outline-danger">Delete</Button>
                </div>
                </li>
            </div>
        )
    });

    return (
        <>
            <h2>Items</h2>
            <div style={style.addingBar}>
	            <input style={style.input} ref={inputEl} placeholder="Type name here" />
	            <Button className="but" variant="info" onClick={addNote}>Add new</Button>
            </div>
            <ul onClick={clickHandler}>
                {notesList}
            </ul>
        </>
    );
};

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
    return {
        addNote: (content: string) => {
            dispatch({type: ADD_NOTE, content})
        },
        removeNote: (index: number) => {
            dispatch({type: REMOVE_NOTE, index})
        },
        setActiveNote: (activeNote: number) => {
            dispatch({type: SET_ACTIVE_NOTE, activeNote})
        },
    }        
}
const mapStateToProps = (state: IStore) => ({
    notes: state.notes,
    activeNote: state.activeNote,
});

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
