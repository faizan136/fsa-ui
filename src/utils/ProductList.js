import './ProductList.css'
const ProductList = () => {
  const products = [
    { id: 1, brand: "Apple", model: "Iphone 13", price: 1000, },
    { id: 2, brand: "Apple", model: "Iphone 12", price: 900 },
    { id: 3, brand: "Apple", model: "Iphone 12 max", price: 1500 },
  ];

  //const headStyle={backgroundColor:'red'}
  return (
    <div>
       <table className="table table-bordered table-hover">
      {/* <table border="1" width="100%"> */}
        {/* <thead class={headStyle}>  */}
        <thead >
          <tr>
            <th>Id</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => {
            return <tr key={i}>
              <td>{product.id}</td>
              <td>{product.brand}</td>
              <td>{product.model}</td>
              <td>{product.price}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};


export default ProductList;
