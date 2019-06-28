import React from 'react';
import injectSheet from 'react-jss'

const styles = {
  boxNote: {
    position: 'relative',
    backgroundColor: 'white',
    minHeight: '20vh',
    maxHeight: '60vh',
    textAlign:'center',
    width: '30%',
    borderRadius: '.5em',
    padding: '1em'
  }
}

const Note = ({children,classes}) => (
  <div className={classes.boxNote}>
    {children}
  </div>
)

export default injectSheet(styles)(Note);
