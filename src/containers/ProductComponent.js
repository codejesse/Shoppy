import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
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
                                <button className="details-button">Add to cart</button>
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