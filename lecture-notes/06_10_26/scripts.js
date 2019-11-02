const app = document.getElementById('app');

const firstComponent = React.createElement(
    'h1',
    {
        style: {
            fontSize: '6em'
        },
        onClick: () => window.alert('hi there')
    },
    ['our first component']
    )

ReactDOM.render(firstComponent, app)