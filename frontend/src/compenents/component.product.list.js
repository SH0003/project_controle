import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteProductByID, getAllProducts } from "../services/product.services";

export function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const res = await getAllProducts();
    setProducts(res.data);
  }

  async function deleteProduct(id) {
    const res = await deleteProductByID(id);
    fetchProducts();
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <>
            <Link to={"/products/new"} className="btn btn-primary mb-3">
              <i className="fas fa-plus"></i> Nouveau produit
            </Link>
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col" className="text-center">#</th>
                    <th scope="col" className="text-center">Name</th>
                    <th scope="col" className="text-center">Price</th>
                    <th scope="col" className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((elem, index) => (
                    <tr key={index}>
                      <th scope="row" className="text-center">{index + 1}</th>
                      <td className="text-center">{elem.name}</td>
                      <td className="text-center">{elem.price}</td>
                      <td className="text-center">
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteProduct(elem._id)}
                        >
                          <i className="fas fa-trash"></i> Supprimer
                        </button>
                        
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}
