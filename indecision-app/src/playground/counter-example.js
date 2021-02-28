console.log('App.js is running!');

// JSX - JavaScript XML
var appRoot = document.getElementById('app');

var title = {
    title: 'Indecision App',
    subtitle: 'This is a subtitle',
    options: ['One', 'Two']
}

var template = (
    <div>
        <h1>{title.title}</h1> 
        {title.subtitle && <p>{title.subtitle}</p>}
        <p>{title.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = {
    name: 'ChaeYeong Hwang',
    age: 24,
    //location: 'Incheon'
};
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
};
var template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        <p>Age: {user.age}</p>
        <p>{getLocation(user.location)}</p>
    </div>
);

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};
// JSX does not have built-in data binding
const minusOne = () => {
    count--;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
};


const renderCounterApp = () => {
    const template3 = (
        <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
        </div>
        );
        ReactDOM.render(template3, appRoot);
    };

renderCounterApp();