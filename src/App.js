import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import TodoAdder from './containers/TodoAdder/TodoAdder';
import TodoItem from './components/TodoItem/TodoItem';
import TodoItemCompleted from './components/TodoItem/TodoItemCompleted';
import Container from './containers/ListContainer/ListContainer';
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

  showEmptyMessage = () => {
    if(this.state.items.length === 0){
      return <p className="emptyMessage">Add a task.</p>
    } else {
      return null;
    }
  }

  showEmptyMessageCompleted = () => {
    if(this.state.itemsCompleted.length === 0){
      return <p className="emptyMessage">You don't have any completed tasks.</p>
    } else {
      return null;
    }
  }

  autoGrow = (element) => {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
  }


  render(){
    return(
      <div>
        <Layout>
          <Container>
            <h3>To-Do:</h3>
            {this.showEmptyMessage()}
            {this.state.items.map((item, index) => {
                return <TodoItem 
                name={item.name}
                deleteItem={() => this.deleteItemHandler(index)}
                modifyItemInput={(e) => this.modifyItemHandler(index, e)}
                doneItem={(e) => this.handleCompleteItem(index, e)}
                key={item.id}/>;            
            })}
            <h3 className="completedTitle">Completed:</h3>
            {this.showEmptyMessageCompleted()}
            {this.state.itemsCompleted.map((item, indexCompleted) => {
              return <TodoItemCompleted 
                name={item.name}
                deleteItem={() => this.deleteItemCompletedHandler(indexCompleted)}
                key={item.id}/>;
            })}
          </Container>
          <TodoAdder 
            submitProp={this.handleAddItem} 
            onChange={this.inputHandler} 
            value={this.state.value}/>
        </Layout>
      </div>
    );
  }
}

export default App;