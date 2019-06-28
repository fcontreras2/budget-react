import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  list: {
    display:'flex',
    width: '48%'
  },
  divider: {
    height: '100%',
  }
}

const ListItem = ({classes,placeholder}) => (
  <input type="text" className={classes.list} placeholder={placeholder}></input>
)

export default injectSheet(styles)(ListItem);