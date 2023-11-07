import {Component} from "react";

class MyClassComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: "Initial Text",
      counter: 0
    };

    // Re-bind the function to this "this"  :)
    this.increment = this.increment.bind(this);
  }

  increment() {
    // console.log("increment Called: ", this);

    const newState = {counter: this.state.counter + 1};
    this.setState(newState);
  }

  componentDidMount() {
    console.log("Component Mounted");
  }
  // useEffect(()=>{}, [])

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter !== this.state.counter) {
      console.log("Counter has changed!", prevState.counter);
    }
    if (prevState.text !== this.state.text) {
      console.log("text has changed!", prevState.text);
    }
  }
  // useEffect(()=>{}, [counter])


  componentWillUnmount() {
    console.log("component about to die!");
  }

  render() {
    const props = this.props;

    return (
      <div>
        <div>{props.text}</div>
        {this.state.counter}
        <button onClick={this.increment} >+</button>
        <div>
          <input value={this.state.text}
            onChange={e => this.setState({text: e.target.value})} />
        </div>

      </div>
    );

  }
}

export default MyClassComponent;