import React, { Component } from "react";
import Item from "./TodoItems";
export default class TodoList extends Component {
  render() {
    return (
      <section>
        <h2>todo list</h2>
        <Item />
      </section>
    );
  }
}
