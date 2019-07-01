import React, { Component } from "react";
import Note from "@components/note";
import '@styles/styles.scss';
import { http } from "@services/http";
import ListItem from '@components/list-item';
import NoteDate from '@components/note-date';
import NoteCard from '@components/note-card';
import firebase from '@services/firebase';

export default class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = { expenses: [], income: [] };
    this.ref = React.createRef();
  }

  componentDidMount() {
    // this.ref.current.focus();
    http
      .get("expenses")
      .then(response => {
        this.setState({
          expenses: response.data
        });
        console.log(this.state)
      })
      .catch(error => { });

    http
      .get("income")
      .then(response => {
        this.setState({
          income: response.data
        });
        console.log(this.state)
      })
      .catch(error => { });
      console.log(this.state)
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
            left={<ListItem placeholder="Gastos" items={this.state.expenses} />}
            rigth={<ListItem placeholder="Ingresos" items={this.state.income} />}
          />
        </Note>
      </div>
    );
  }
}