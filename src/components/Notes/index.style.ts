const style = {
    input: {
        width: "60%",
    	border: "1px solid #CCCCCC",
    	borderRadius: "3px",
    	height: "38px",
    	verticalAlign: "middle",
    	paddingLeft: "10px",
    },
    noteLi: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #F2F2F2",
        padding: "5px 0",
    },
    note: {
        wordBreak: "break-all" as "break-all",
    },
    noteTittle: {
        cursor: "pointer",
        fontWeight: "bold" as "bold",
    },
    noteControl: {
        display: "flex",
        alignItems: "center",
    },
    noteLength: {
        marginRight: "10px",
        padding: "0 13px",
        borderRadius: "13px",
        color: "#FFF",
        backgroundColor: "#27CCC0",
    },
    addingBar: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "30px",
    }
}

export default style;