// less destructuring in this code

class FormComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            costume: '',
            color: 'Red',
        }
        // this.handleChange = this.handleChange.bind(this);
        // can also deal with this a different way by making handleChange an arrow function
    }

    handleChange = ev => {
        this.setState({[ev.target.name]: ev.target.value}) // exciting ES6 syntax
    }

    validate = str => {
        if (str.indexOf('ghost') !== -1) {
            return true
        }
        return false
        
    }

    handleSubmit = ev => {
        ev.preventDefault()

        // async calls -- axios.post('/api/costumes', this.state)
    }


    render() {
        console.log('form render', this.state)
        return (
            <form onSubmit = {this.handleSubmit}>
                <label>
                Input your favorite Halloween costume:
                <input
                name='costume'
                type="text"
                onChange = {this.handleChange}
                value = {this.state.costume}
                />
                </label>
                <label>
                Input your color costume:
                <input
                name='color'
                type="text"
                onChange = {this.handleChange}
                value = {this.state.color}
                />
                <button>Submit</button>
                </label>
                {this.validate(this.state.costume) && (<span>That's too scary</span>)}
            </form>
        )
    }
}

ReactDOM.render(<FormComponent />, document.getElementById('root'))