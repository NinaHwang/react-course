class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count
        };
    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count -1
            }
        });
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

Counter.defaultProps = {
    count: 0
};

ReactDOM.render(<Counter />, document.getElementById('app'));

// console.log('App.js is running!');

// // JSX - JavaScript XML
// var appRoot = document.getElementById('app');

// var title = {
//     title: 'Indecision App',
//     subtitle: 'This is a subtitle',
//     options: ['One', 'Two']
// }

// var template = (
//     <div>
//         <h1>{title.title}</h1> 
//         {title.subtitle && <p>{title.subtitle}</p>}
//         <p>{title.options.length > 0 ? 'Here are your options' : 'No options'}</p>
//         <ol>
//             <li>Item one</li>
//             <li>Item two</li>
//         </ol>
//     </div>
// );

// var user = {
//     name: 'ChaeYeong Hwang',
//     age: 24,
//     //location: 'Incheon'
// };
// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>;
//     }
// };
// var template2 = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         <p>Age: {user.age}</p>
//         <p>{getLocation(user.location)}</p>
//     </div>
// );

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };
// // JSX does not have built-in data binding
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };


// const renderCounterApp = () => {
//     const template3 = (
//         <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>reset</button>
//         </div>
//         );
//         ReactDOM.render(template3, appRoot);
//     };

// renderCounterApp();