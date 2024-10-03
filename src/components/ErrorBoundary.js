import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = { hasError: false };
    }
    componentDidCatch(error) {
        this.setState({ hasError: true })
        console.error(error)
    }
    render() {
        if(this.state.hasError === true) {
            return <p>Something went wrong!</p>
        }
        return this.props.children
    }
}

export default ErrorBoundary