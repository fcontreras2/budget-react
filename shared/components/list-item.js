import React from 'react';
import injectSheet from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const styles = {
  box: {
    width: '49%',
    '& ul': {
      padding: 0
    },
    '& input': {
      fontFamily: 'Montserrat',
      border: '0',
      background: '0'
    },
    '& li:nth-child(2n+1)': {
      backgroundColor: "#dedede"
    }
  },
  item: {
    display: 'flex',
  },
  name: {
    width: '80%'
  },
  price: {
    width: '20%',
    textAlign: 'center'
  }
}

const ListItem = ({ classes, items }) => {
  return <div className={classes.box}>
    <ul ondrop="drop(event)" ondragover="allowDrop(event)">
      {
        items.map((e, i) => (
          <li key={i} className={classes.item} draggable="true" ondragstart="drag(event)" >
            <FontAwesomeIcon className={classes.icon} icon={faBars} />

            <input type="text" className={classes.name} value={e.title} />
            <input type="text" className={classes.price} value={e.price} />
          </li>
        ))
      }
    </ul>
  </div>
}


export default injectSheet(styles)(ListItem);