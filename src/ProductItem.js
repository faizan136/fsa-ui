// const CartButton=({product,onAddClick})=>product.inStock?
//  //return product.inStock?
//   <button disabled={!product.inStock} className =" btn btn-danger btn-sm" onClick={onAddClick}>
//     Add to cart
//     <i className ='fa fa-shopping-cart'></i>
//   </button> :null
import ShouldRender from './utils/ShouldRender'
const CartButton=({product,onAddClick})=>product.inStock &&
 
  <button disabled={!product.inStock} className =" btn btn-danger btn-sm" onClick={onAddClick}>
    Add to cart
    <i className ='fa fa-shopping-cart'></i>
  </button> 


//presentation component

const ProductItem =({product,onAdd}) =>{      //destructuring

  const onAddClick =()=>{
    onAdd(product)
  }
    
return <div class="col-md-3">
      <div className ='card'>
      <img className='card-img-top' src={product.img}/>
      <div className ="card-body">
        <h4 className ="card-title">{product.brand}{product.model}</h4>
        <b>${product.price} </b>
        <h6>
          <label>In Stock?</label>
          <input disabled type='checkbox' checked={product.inStock}/></h6>
        {/* <h6>inS=>tock?:{product.inStock ?"Yes":"No"}</h6> */}
        </div>
        <div className="card-footer">
          <ShouldRender cond={product.inStock}>
            <button disabled={!product.inStock} className =" btn btn-danger btn-sm" onClick={onAddClick}>
    Add to cart
    <i className ='fa fa-shopping-cart'></i>
  </button> 
          </ShouldRender>
         {/* <CartButton product={product} onAddClick={onAddClick}/> */}
          {/* {product.inStock?
          <button disabled={!product.inStock} className =" btn btn-danger btn-sm" onClick={onAddClick}>
            Add to cart
            <i className ='fa fa-shopping-cart'></i>
          </button> :null} */}
          </div>
        </div>
        </div>
}
export default ProductItem;