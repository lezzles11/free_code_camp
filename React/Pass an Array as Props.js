/*
1. Identify the problem (expected output, expected input, rules) 

2. Research 

3. Resources Used: 

*/
Passing an Array as Prop 

const List= (props) => {
  return <p>{props.tasks.join(", ")}</p>
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={['run', 'hike', 'bike']}/>
        <h2>Tomorrow</h2>
        <List tasks={['finish react', 'finish physics', 'finish math']}/>
      </div>
    );
  }
};










*/ 
