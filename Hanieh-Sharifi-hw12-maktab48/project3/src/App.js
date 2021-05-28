import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import MenuItems from "./Components/MenuBody/MenuItems";
import items from "./items.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      index: -1,
      selectedItem: "",
      items: [],
      lastItems: [],
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount()
  {
      this.getData();
  }

  getData()
  {
    this.setState({items:items})
  }
  
  
  render() {
    return(
    <div className="app-parent">
      {this.state.selectedItem && (<Header deleteItem={(e) => this.setState({selectedItem:""})} selected={this.state.selectedItem} />)}
      <MenuItems itemsArr={this.state.items} clickAction={(e) => {let list=[...items];this.setState({selectedItem: list[e.target.id-1]})}} />
    </div>);
  }
}

export default App;
