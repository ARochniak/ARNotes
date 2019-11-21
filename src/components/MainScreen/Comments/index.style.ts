import React from "react";

import reactCSS from 'reactcss';

const style = reactCSS({
    'default': {
        color: {
            width: '52px',
            height: '52px',
        },
        swatch: {
            background: '#fff',
            borderRadius: '1px',
            boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
            display: 'inline-block',
            cursor: 'pointer',
            marginRight: "10px",
        },
        popover: {
            position: 'absolute',
            zIndex: 2,
        } as React.CSSProperties,
        cover: {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
        } as React.CSSProperties,
        commentLi: {
            display: "flex",
            borderBottom: "1px solid #F2F2F2",
            padding: "20px 0 10px"
        },
        commentColor: {
            width: "52px",
            height: "52px",
            marginRight: "10px",
        },
        commentContent: {
            wordBreak: "break-all",
            width: "80%",
            fontSize: "0.7em"
        } as React.CSSProperties,
        textarea: {
            width: "80%",
            resize: "none",
            borderColor: "#CCCCCC"
        }as React.CSSProperties,
    },
});

export default style;
