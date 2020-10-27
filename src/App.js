import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import TodoAdder from './containers/TodoAdder/TodoAdder';
import TodoItem from './components/TodoItem/TodoItem';
import TodoItemCompleted from './components/TodoItem/TodoItemCompleted';
import './App.css';

class App extends Component {
  state = {
      value: '',
      items: [],
      itemsCompleted: []
  }

  makeid = (length) => {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  isEmptyOrSpaces = (str) => {
    return str === null || str.match(/^ *$/) !== null;
  }

  inputHandler = (event) => {
      this.setState({
          value: event.target.value
      });
  };

  handleAddItem = (event) => {
    if(this.isEmptyOrSpaces(this.state.value)){
      //do nothing
    }else{
      this.state.items.push({name: this.state.value, id: `${this.makeid(5)}`});
        this.setState({
          value: ''
        });
    }
      event.preventDefault();
  }

  handleCompleteItem = (itemIndex, event) => {
    const items = [...this.state.items];
    const item = {...items[itemIndex]};
    items[itemIndex] = item;
    this.state.itemsCompleted.push(items[itemIndex]);
    items.splice(itemIndex, 1)
    this.setState({items: items});
    event.preventDefault();
  }

  deleteItemHandler = (itemIndex) => {
    const items = [...this.state.items];
    items.splice(itemIndex, 1);
    this.setState({items: items});
  }

  deleteItemCompletedHandler = (indexC) => {
    const itemsCompleted = [...this.state.itemsCompleted];
    itemsCompleted.splice(indexC, 1);
    this.setState({itemsCompleted: itemsCompleted});
  }

  modifyItemHandler = (itemIndex, event) => {
    const items = [...this.state.items];
    const item = {...items[itemIndex]};
    item.name = event.target.value;
    items[itemIndex] = item;
    this.setState({items});
  }

  clearCompletedHandler = () => {
    this.setState({
      itemsCompleted: []
    });
  }
  
  render(){
    return(
      <div>
        <Layout>
          <TodoAdder 
            submitProp={this.handleAddItem} 
            onChange={this.inputHandler} 
            value={this.state.value}/>
          <h3>To-Do:</h3>
          {this.state.items.map((item, index) => {
            return <TodoItem 
              name={item.name}
              deleteItem={() => this.deleteItemHandler(index)}
              modifyItemInput={(e) => this.modifyItemHandler(index, e)}
              doneItem={(e) => this.handleCompleteItem(index, e)}
              key={item.id}/>;
          })}
          <h3 className="completedTitle">Completed:</h3>
          

          {this.state.itemsCompleted.map((item, indexCompleted) => {
            return <TodoItemCompleted 
              name={item.name}
              deleteItem={() => this.deleteItemCompletedHandler(indexCompleted)}
              key={item.id}/>;
          })}
        <p>Made by <a href="https://minimalistwebs.com/" target="_blank" rel="noreferrer">MinimalistWebs</a> &copy; 2020</p>
        </Layout>
      </div>
    );
  }
}

export default App;