import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { useEffect } from "react";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
    const products = useSelector((state) => state)
    const dispatch = useDispatch()

    const fetchProducts = async () => {
        const response = await axios
            // .get('https://api.escuelajs.co/api/v1/products')
            .get('https://fakestoreapi.com/products')
            .catch((err) => {
                console.log("Err", err);
            })
        dispatch(setProducts(response.data))
    };

    useEffect(() => {
        fetchProducts();
    }, [])

    console.log(products);
    return (
        <div className="home">
            <div className="options-container">
                <button className="option-chip">Men's clothing</button>
                <button className="option-chip">Electronics</button>
                <button className="option-chip">Jewelery</button>
                <button className="option-chip">Womens clothing</button>
            </div>
            <div className="page-title">
                <h1>Trending products</h1>
            </div>
            <div className="products-container">
                <ProductComponent />
            </div>
        </div>
    );
}

export default ProductListing;