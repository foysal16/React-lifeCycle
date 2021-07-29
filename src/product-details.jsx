import React, { useState, useEffect } from 'react';
import CircularLoader from './circular';


const ProdcutDetails = ({CurrentProduct , backToList}) =>{
  const [mainLoader, setIsLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoader(false);
    }, 1000)
  }, [])

    return(
      <>
          { mainLoader ? <CircularLoader /> : (<div >
          <p>Product Name: {CurrentProduct?.name}</p>
          <p>Product description: {CurrentProduct?.description}</p>
          <p>Price: {CurrentProduct?.price}</p>
          <p>Category: {CurrentProduct?.category}</p>
          <button onClick={backToList}>Back to List</button>
        </div>
       ) }
     </>
    )

}

export default ProdcutDetails;



