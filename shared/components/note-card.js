import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  card: {
    display:'flex',
    justifyContent: 'space-between'
  },
  divider: {
    height: '100%',
    width: '1%'
  }
}

const NoteCard = ({classes,left, rigth}) => (
  <div className={classes.card}>
    {left} 
    <span className={classes.divider}/>
    {rigth}
  </div>
)

export default injectSheet(styles)(NoteCard);