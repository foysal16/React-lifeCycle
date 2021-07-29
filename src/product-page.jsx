import React, { useState, useEffect } from 'react';
import CircularLoader from './circular';


const ProductPage = ({products , selectProduct}) =>{


  const [mainLoader, setIsLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoader(false);
    }, 1000)
  }, [])



  return (
    <>
    {
      mainLoader ? <CircularLoader /> : (
        <div>
            {products.map((product) => {
                return <div 
                style={{
                    marginBottom: '10px',
                    border: '1px solid red',
                    padding: '10px'
                }}



                onClick ={() =>selectProduct(product)}>
                  
                    
                    <p>Product Name: {product.name}</p>
                    <p>price: {product.price}</p>
                </div>
            })}
        </div>)

    }
    
    
    
    </>
    
  )
}

export default ProductPage;







/*class ProductPage extends Component {
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
    return (
        this.state.loading ? <CircularLoader /> : (
        <div>
            {this.props.productlist.map((product) => {
                return <div 
                style={{
                    marginBottom: '10px',
                    border: '1px solid red',
                    padding: '10px'
                }}



                onClick ={() => this.props.selectProduct(product)}>
                   
                    
                    <p>Product Name: {product.name}</p>
                    <p>price: {product.price}</p>
                </div>
            })}
        </div>)
    )
    
  }
}


export default ProductPage;*/