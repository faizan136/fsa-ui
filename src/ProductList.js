import './ProductList.css'
import ProductItem from './ProductItem.js'
import ShouldRender from './utils/ShouldRender';
const ProductList = () => {
  const cart=[];
  const onAddCartClick=(product)=>{
    //console.log('Added to cart',product)
    cart.push(product);
    console.log(cart); 
  }
const products =[
    { id: 1, brand: "Apple", model: " Iphone 13",inStock:true, price: 1000,img:'https://images.hindustantimes.com/tech/img/2021/09/24/original/iPhone_13_Pro_Max_(4)_1632469213724.jpg' },
    { id: 2, brand: "Apple", model: " Iphone 12",inStock:false,price: 900,img:'https://www.cnet.com/a/img/YQlXeeHCk-e--zjAOA19Cc-ISPs=/940x0/2020/10/18/bdb7ea97-cb99-48d8-a69c-38d26109f33b/05-iphone-12-pro-2020.jpg' },
    { id: 3, brand: "Apple", model: " Iphone 12 max",inStock:true, price: 1500,img:'https://m.media-amazon.com/images/I/71MHTD3uL4L.jpg' },
  ];
return <div>
  <ShouldRender>
    <h1>Hello</h1>
    <h2>Hello2</h2>
  </ShouldRender>
  {products.map(item=><ProductItem product={item} onAdd={onAddCartClick}/>
  // return <div class="col-md-3">
  //     <div className ='card'>
  //     <img className='card-img-top' src={product.img}/>
  //     <div className ="card-body">
  //       <h4 className ="card-title">{product.brand}{product.model}</h4>
  //       <b>${product.price} </b>
  //       <h6>
  //         <label>In Stock?</label>
  //         <input disabled type='checkbox' checked={product.inStock}/></h6>
  //       {/* <h6>inStock?:{product.inStock ?"Yes":"No"}</h6> */}
  //       </div>
  //       <div className="card-footer">
  //         <button className =" btn btn-danger btn-sm">
  //           Add to cart
  //           <i className ='fa fa-shopping-cart'></i>
  //         </button>
  //         </div>
  //       </div>
  //       </div>
  
  //}
  )}
</div>
}

export default ProductList;



//   //const headStyle={backgroundColor:'red'}
//   return (
//     <div>
//        <table className="table table-bordered table-hover">
//       {/* <table border="1" width="100%"> */}
//         {/* <thead class={headStyle}>  */}
//         <thead >
//           <tr>
//             <th>Id</th>
//             <th>Brand</th>
//             <th>Model</th>
//             <th>Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product, i) => {
//             return <tr key={i}>
//               <td>{product.id}</td>
//               <td>{product.brand}</td>
//               <td>{product.model}</td>
//               <td>{product.price}</td>
//             </tr>;
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };


// export default ProductList;
