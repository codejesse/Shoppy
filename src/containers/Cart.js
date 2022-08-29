import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import "../App.css"


const Cart = (props) => {
    console.log(props.items)
    if (props.items.length === 0) {
        return (
            <div className='empty-cart'>
                <div className='empty-cart-details'>
                    <div>Your cart is empty</div>
                    <div className='button-align'>
                        <Link to="/"><button>Continue shopping</button></Link>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='cart-wrapper'>
                <div className='cart-header'>Your Cart</div>
                {props.items.map((item) => (
                    <div className='cart-card' key={item.title}>
                        <img src={item.image} alt={item.title} />
                        <div className='cart-card-details'>
                            <div className='cart-title'>{item.title}</div>
                            <p>${item.price}</p>
                            <div className='item-quantity'>
                                <button>+</button>
                                <div>{item.quantity} </div>
                                <button>-</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}




const mapStateToProps = (state) => {
    return {
        items: state.cartProducts
    }
}

export default connect(mapStateToProps)(Cart)