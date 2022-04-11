import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = { hasError: false };
    }
    
    componentDidCatch(error) {
        console.log(error);
        this.setState({ hasError: true })
    }

    render () {
        if (this.state.hasError) {
            return <p>Something went wrong!</p>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
// if you want to build an error boundary, it needs to be a class based component 
// there is no equivalent for functional components 