import React from "react";

export const ProductDetailModal = (props) => {
  const {productDetail} = props
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Product Detail
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
            <div className="row">
              <div className="col-6">
              
                <img className="img-fluid" src={productDetail.image} alt="..." />
              </div>
              <div className="col-6">
                <p className="fw-bold fs-4">{productDetail.name}</p>
                <p>
                 {productDetail.description}
                </p>
                <p>product</p>
                <p className="fw-bold">Quantity: {productDetail.quantity}</p>
              </div>
            </div>
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
