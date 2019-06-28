import React from 'react';
import injectSheet from 'react-jss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const style = {
  header: {
    display: 'flex',
    position: 'relative'
  },
  icon: {
    cursor: "pointer",
    position: "absolute",
    right: 5,
    top: 10
  }
}

const NoteHeader = ({classes, input}) => (
  <div className={classes.header}>
    {input}
    <FontAwesomeIcon className={classes.icon} icon={faAngleRight} />
  </div>
)

export default injectSheet(style)(NoteHeader);
