import React, { useState, useEffect } from 'react';
import ProductPage from './product-page';
import ProdcutDetails from './product-details';
import CircularLoader from './circular';

const App = () => {
  const [mainLoader, setIsLoader] = useState(true)
  const [CurrentProduct, setCurrentProduct] = useState(null)
  const [products, setProductList] = useState([
    {
      name: 'Iphone',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla eget nisl quis rutrum. In tempus sapien odio',
      price: '120000',
      category: 'SmartPhone',
    },
    {
      name: 'Samsung',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla eget nisl quis rutrum. In tempus sapien odio',
      price: '80000',
      category: 'SmartPhone',
    },
    {
      name: 'One Plus 8',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla eget nisl quis rutrum. In tempus sapien odio',
      price: '60000',
      category: 'SmartPhone',
    },
  ])

  useEffect(() => {
    setTimeout(() => {
      setIsLoader(false);
    }, 1000)
  }, [])


  const selectProduct = (data) => {
    setCurrentProduct(data);
  }

  const backToList = () => {
    setCurrentProduct(null);
  }

  return (
    <div
      style={{
        padding: '100px'
      }}
    >
      {CurrentProduct ? (
        <ProdcutDetails CurrentProduct={CurrentProduct} backToList={backToList} />
      )
        :
        (
          <div>
            {mainLoader ? <CircularLoader /> : (<ProductPage products={products} selectProduct={selectProduct} />)}
          </div>
        )}

    </div>


  )

}
export default App;


/*class App extends Component {
  state = {
    productlist: [
      {
        name: 'Iphone',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla eget nisl quis rutrum. In tempus sapien odio',
        price: '120000',
        category: 'SmartPhone',
      },
      {
        name: 'Samsung',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla eget nisl quis rutrum. In tempus sapien odio',
        price: '80000',
        category: 'SmartPhone',
      },
      {
        name: 'One Plus 8',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla eget nisl quis rutrum. In tempus sapien odio',
        price: '60000',
        category: 'SmartPhone',
      },

    ],

    currentProduct: null,
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

  onloadedPage = () => {
    this.setState({ ...this.state, loading: true });
  }

  selectProduct = (data) => {
    this.setState({ ...this.state, currentProduct: data });
  }

  backToList = () => {
    this.setState({ ...this.state, currentProduct: null });

  }

  render() {
    return (

      <div
        style={{
          padding: '100px'
        }}
      >
        {this.state.currentProduct ? (
          <ProdcutDetails currentProduct={this.state.currentProduct} backToList={this.backToList} />
        )
          :
          (
            <div>
              {this.state.loading ? <CircularLoader /> : (<ProductPage productlist={this.state.productlist} selectProduct={this.selectProduct} />)}
            </div>
          )}



      </div>

    );
  }
}

export default App; */
