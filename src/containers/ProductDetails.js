import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProducts } from "../redux/actions/productActions";
import Sidebar from "./Sidebar";
import "../App.css"

const ProductDetails = () => {
    const { productId } = useParams();
    let product = useSelector((state) => state.product)
    const { image, title, price, category, description } = product;
    const dispatch = useDispatch();

    const fetchProductsDetail = async (id) => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .catch((err) => {
                console.log("Err", err);
            })
        dispatch(selectedProducts(response.data))
        console.log(product)
    }

    useEffect(() => {
        if (productId && productId !== "") fetchProductsDetail(productId)
    }, [productId]);

    return (
        <div className="product-detail-container">
            {/* <Sidebar /> */}
            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <div className="">
                    <div className="details-title">{title}</div>
                    <div className="details-card">
                        <div className="details-image">
                            <img src={image} alt={title} />
                        </div>
                        <div className="details-desc">
                            <h2 className="details-name">{title}</h2>
                            <p>{description}</p>
                            <p>$ {price}</p>
                            <button className="details-button">Add to cart</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductDetails;