import React from "react";
import injectSheet from "react-jss";

const styles = {
  inputText: {
    width: "100%",
    border: "0",
    height: 20,
    padding: 10
  }
};

const InputTitle = ({ refText, tiping, classes }) => {
  return (
    <input
      className={classes.inputText}
      type="text"
      ref={refText}
      placeholder="Nuevo item"
      autoFocus
      onKeyPress={tiping}
    />
  );
};

export default injectSheet(styles)(InputTitle);
