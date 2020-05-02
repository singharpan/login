import React, { Component } from "react";

class List extends Component {
  state = {
    count: [10, 11, 2, 35, 5667, 46],
  };

  render() {
    const listitem = this.state.count.map((item) => {
      return (
        <div>
          <li>{item}</li>
        </div>
      );
    });
    return <div>{listitem}</div>;
  }
}

export default List;
