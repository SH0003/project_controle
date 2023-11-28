import React, { useState } from "react";
import { addProduct } from "../services/product.services";
import { useNavigate } from "react-router-dom";

export function ProductAddForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  function handleForm(event) {
    // Pour ne pas actualiser la page quand j'envoie le formulaire
    event.preventDefault();
    const p = { "name": name, "price": price };
    addProduct(p);
    navigate("/products");
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="form-wrapper">
            <form onSubmit={(e) => handleForm(e)}>
              <label className="form-label" htmlFor="name">
                Name :
              </label>
              <input
                className="form-control"
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
              <br />

              <label className="form-label" htmlFor="price">
                Price :
              </label>
              <input
                className="form-control"
                type="number"
                id="price"
                onChange={(e) => setPrice(e.target.value)}
              />
              <br />

              <input
                type="submit"
                className="btn btn-primary"
                value={"Enregistrer"}
              />
              <input
                type="reset"
                className="btn btn-primary ml-2"
                value={"Annuler"}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
