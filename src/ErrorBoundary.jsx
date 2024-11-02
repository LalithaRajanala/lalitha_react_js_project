import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(`Error occured while rendering component: ${error} , ${info}`);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Cannot find results requested</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
