class VisibilityToggle extends React.Component{
    constructor(props) {
        super(props)
        this.handleEvent = this.handleEvent.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleEvent() {
        this.setState((prevState) => {
            // if (!prevState.visibility) {
            //     return {
            //         visibility: true
            //     }
            // } else {
            //     return {
            //         visibility: false
            //     }
                return {
                    visibility: !prevState.visibility
                }
        }) 
    }
    render() {
        return(
            <div>
                <button onClick={this.handleEvent}>{this.state.visibility ? 'Hide it!' : 'Show it!'}</button>
                {this.state.visibility && (
                    <div>
                        <p>Hey, you found me!</p>
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))