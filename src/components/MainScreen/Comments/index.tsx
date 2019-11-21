import React, { useRef, KeyboardEvent, useState } from "react";

import { GithubPicker } from 'react-color';

import { connect } from "react-redux";

import { IStore, ADD_COMMENT } from "types";

import style from "./index.style";

const Comments: React.FC = (props: any) => {
    const [ colorPickerState, toggleColorPiecker ] = useState(false);
    const [ color, setColor ] = useState("#E6E6E6");
    const textareaEl = useRef<HTMLTextAreaElement>(null);
    let commentsList;

    const addComment = () => {
        props.dispatch({
            type: ADD_COMMENT,
            content: (textareaEl.current as HTMLTextAreaElement).value,
            color: color,
        });
    }
    const onKeyDownHandler = (e: KeyboardEvent) => {
        let textareaVal = (textareaEl.current as HTMLTextAreaElement).value;
        if ( e.ctrlKey && e.key === "Enter" && textareaVal !== "") {
            if (+props.activeNote === -1) {
                alert("Shoose note to add a comment");
                return;
            }
            addComment();
            (textareaEl.current as HTMLTextAreaElement).value = "";
        }
    }

    const handleClick = () => {
        toggleColorPiecker(!colorPickerState)
    };

    const handleClose = () => {
        toggleColorPiecker(false)
    };
    const handleChange = (color: any) => {
        setColor(color.hex);
        toggleColorPiecker(false);
    };

    // don't show comments if there no activeNote
    if (props.activeNote !== -1)
        commentsList = props.notes[props.activeNote].comments.map(
            (comment: any, key: number) => (
                <li key={key} style={style.commentLi}>
                    <div style={{...style.commentColor, background: comment.color}}/>
                    <p style={style.commentContent}>{comment.content}</p>
                </li>
            )
        );

    return (
        <div onKeyDown={onKeyDownHandler}>
            <h2>Comments {+props.activeNote + 1 ? "#" + (+props.activeNote + 1): undefined}</h2>
            <ul>
                {commentsList}
            </ul>
            <div style={style.swatch} onClick={handleClick}>
                <div style={{...style.color, background: color}} />
            </div>

            {colorPickerState ? (
                <div style={style.popover}>
                    <div style={style.cover} onClick={handleClose}/>
                    <GithubPicker color={color} onChange={handleChange}/>
                </div>
            ) : null}

            <textarea 
                ref={textareaEl}
                style={style.textarea}
                placeholder="To add comment press Ctrl+Enter"
            />
        </div>
    );
};

const mapStateToProps = (state: IStore) => ({
    activeNote: state.activeNote,
    notes: state.notes,
});

export default connect(mapStateToProps)(Comments);
