import React from "react";

export const CartModal = ({ carts, handleCartQuantity, deleteCart }) => {
  console.log("carts: ", carts);
  // const { carts } = props;
  return (
    <div
      className="modal fade"
      id="cartModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Cart
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            {/* Nếu carts rỗng */}
            {!carts.length && <h2>Vui lòng chọn sản phẩm</h2>}
            {!!carts.length && ((
               <div className="table">
               <thead>
                 <tr>
                   <th>STT</th>
                   <th>Image</th>
                   <th>Name</th>
                   <th>Description</th>
                   <th>Price</th>
                   <th>Quantity</th>
                   <th>Total</th>
                 </tr>
               </thead>
               <tbody>
                 {carts.map((product, index) => {
                   console.log("quantity",product.cartQuantity)
                   return (
                     <tr key={product.id}>
                       <td>{index + 1}</td>
                       <td>
                         <img
                           style={{
                             width: 100,
                             height: 100,
                           }}
                           src={product.image}
                           alt="..."
                         ></img>
                       </td>
                       <td>{product.name}</td>
                       <td>
                         <p
                         style={{
                           maxWidth: 300,
                         }}
                         >
                            {product.description}
                         </p>
                        </td>
                       <td>{2 * product.price}</td>
                       <td>
                         <button className="btn btn-outline-success" onClick={()=>handleCartQuantity(product.id, 1)}>+</button>
                         <span className="mx-2">{product.cartQuantity}</span>
                         <span className="btn btn-outline-danger" onClick={()=>handleCartQuantity(product.id, -1)}>-</span>
                       </td>
                       <td>{product.cartQuantity * product.price}</td>
                       <td>
                        <button className="btn btn-outline-dark" onClick={()=>deleteCart(product.id)}>X</button>
                       </td>
                     </tr>
                   );
                 })}
               </tbody>
             </div>
            ))}
           
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

//gán !!a quy đổi ra boolean ví dụ a=1 !!a suy ra a = true phủ định của phủ định là khẳng định ý nói hai dấu !!
// binding boolean không hiển thị lên api