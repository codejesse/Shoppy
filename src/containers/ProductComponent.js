import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Error from "./Error";
import { cartProducts } from "../redux/actions/productActions";

const ProductComponent = () => {
    const dispatch = useDispatch();

    const addProduct = (product) => {
        dispatch(cartProducts(product))
    }

    const products = useSelector((state) => state.allProducts.products);
    if(products.length === 0) {
        return (
            <Error />
        )
    } 
    const renderList = products.map((product) => {
        const { id, title, price, category, image } = product;
        
        return (
            <div className="testing row centered" key={id}>
                <Link to={`/product/${id}`}>
                    <div className="">
                        <div className="product-card">
                            <div className="product-card-save"></div>
                            <div className="product-image">
                                <img src={image} alt={title} />
                            </div>
                            <div className="product-details">
                                <div className="product-title">{title}</div>
                                <div className="product-price">$ {price}</div>
                                {/* <div className="product-chip">{category}</div> */}
                                <button className="details-button" onClick={() => addProduct(product)}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    });
    return <>{renderList}</>;
};

export default ProductComponent;