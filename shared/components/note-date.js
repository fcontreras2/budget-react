import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  date: {

  }
}

const NoteDate = ({classes,date}) => (
  <p className={classes.date}> {date}</p>
)

export default injectSheet(styles)(NoteDate);