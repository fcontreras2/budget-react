import React, { Component } from "react";
import Note from "@components/note";
import '@styles/styles.scss';
import { http } from "@services/http";
import ListItem from '@components/list-item';
import NoteDate from '@components/note-date';
import NoteCard from '@components/note-card';

export default class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
    this.ref = React.createRef();
  }

  componentDidMount() {
    // this.ref.current.focus();
    http
      .get("/list")
      .then(response => {
        this.setState({
          list: response.data
        });
        console.log(this.state)
      })
      .catch(error => { });
  }

  handleKeyPress(e) {
    if (e.charCode === 13) {
      this.addItem()
    }
  }

  addItem() {
    if (this.ref.current.value !== "") {
      // Press Enter
      http.post("/list", { text: this.ref.current.value }).then(response => {
        let list = this.state.list;
        list.push(response.data);
        this.setState({
          list
        });
        this.ref.current.value = "";
      });
    }
  }

  render() {
    return (
      <div className="container-notes">
        <Note>
          <NoteDate date={"Julio 2019"} />
          <NoteCard
            left={<ListItem placeholder="Gastos" />}
            rigth={<ListItem placeholder="Ingresos" />}
          />
        </Note>
      </div>
    );
  }
}