class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* change code below this line */}
        <Fruits /> 
          <Vegetables /> 
        {/* change code above this line */}
      </div>
    );
  }
};

// change code below this line
ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));

/*
Resources
https://www.reactenlightenment.com/react-state/8.4.html
https://reactjs.org/docs/faq-functions.html

*/

