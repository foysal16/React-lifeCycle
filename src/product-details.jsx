import React, { Component } from 'react';
import CircularLoader from './circular';

class ProdcutDetails extends Component {
  state = {
    loading: true,
    timeout: null,
  };
  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({ loading: false });
    }, 1000); // 3 seconds
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  render() {
    return(this.state.loading ? <CircularLoader /> : (<div >
                <p>Product Name: {this.props.currentProduct?.name}</p>
                <p>Product description: {this.props.currentProduct?.description}</p>
                <p>Price: {this.props.currentProduct?.price}</p>
                <p>Category: {this.props.currentProduct?.category}</p>
                <button onClick={this.props.backToList}>Back to List</button>
            </div>)
        )     
  }
}


export default ProdcutDetails;