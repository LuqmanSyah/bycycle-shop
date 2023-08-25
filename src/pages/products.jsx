import React from "react";
import Layouts from "../fragments/Layouts";
import CardProducts from "../components/CardProducts";
import { cardProduct } from "../constants";

const ProductsPage = () => {
    return (
        <Layouts>
            <div className="container my-5">
                <div className="d-flex justify-content-between">
                    <span className="fw-semibold text-dark-emphasis fs-2">Produk Kami</span>
                    <div class="input-group mb-3 w-50">
                        <input type="text" class="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button class="btn btn-outline-secondary btn-sm" type="button" id="button-addon2">
                            Search
                        </button>
                    </div>
                </div>
                <div className="row my-3">
                    {cardProduct.map((product) => (
                        <div className="col-md-3 col-6">
                            <CardProducts name={product.name} price={product.price}>
                                {product.body}
                            </CardProducts>
                        </div>
                    ))}
                </div>
            </div>
        </Layouts>
    );
};

export default ProductsPage;
