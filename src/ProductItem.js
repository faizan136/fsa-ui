// const CartButton=({product,onAddClick})=>product.inStock?
//  //return product.inStock?
//   <button disabled={!product.inStock} className =" btn btn-danger btn-sm" onClick={onAddClick}>
//     Add to cart
//     <i className ='fa fa-shopping-cart'></i>
//   </button> :null
import ShouldRender from "./utils/ShouldRender";
import IfElse from "./utils/IfElse";
const CartButton = ({ product, onAddClick }) =>
  product.inStock && 
    <button
      disabled={!product.inStock}
      className=" btn btn-danger btn-sm"
      onClick={onAddClick}
    >
      Add to cart
      <i className="fa fa-shopping-cart"></i>
    </button>
  ;

//presentation component

const ProductItem = ({ product, onAdd }) => {
  //destructuring

  const onAddClick = () => {
    onAdd(product);
  };

  return (
    <div class="col-md-3">
      <div style={{ margin: "20px" }} className="card">
        <div className="card-header">
          <span className="card-title">
            {product.brand}
            {product.model}
          </span>
        </div>
        <img className="card-img-top" src={product.img} />
        <div className="card-body">
          <b>${product.price} </b>
          <h6>
            <label>In Stock?</label>
            <input disabled type="checkbox" checked={product.inStock} />
          </h6>
          {/* <h6>inS=>tock?:{product.inStock ?"Yes":"No"}</h6> */}
        </div>
        {/* <ShouldRender cond={product.inStock}> */}
        <div className="card-footer">
          {/* {product.inStock ? ( */}
          <IfElse cond={product.instock}>
            <button className=" btn btn-danger btn-sm" onClick={onAddClick}>
              Add to cart
              <i className="fa fa-shopping-cart"></i>
            </button>
            
            <button className=" btn btn-danger btn-sm" onClick={onAddClick}>
              Notify
              <i className="fa fa-bell"></i>
            </button>
          </IfElse>
          {/* <CartButton product={product} onAddClick={onAddClick}/> */}
          {/* {product.inStock?
          <button disabled={!product.inStock} className =" btn btn-danger btn-sm" onClick={onAddClick}>
          Add to cart
          <i className ='fa fa-shopping-cart'></i>
        </button> :null} */}
        </div>
        {/* </ShouldRender> */}
      </div>
    </div>
  );
};
export default ProductItem;
