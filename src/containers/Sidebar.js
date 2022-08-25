import '../App.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const state = useSelector((state) => state.cartProducts)
    return (
        <div className="sidebar-container">
            <div className="sidebar-logo">
                <img src='/shoppy.png' alt='logo' />
            </div>
            <div className='sidebar-details'>
                <div className='sidebar-item'><Link to={"/"} style={{textDecoration: "none", color: "#737373"}}>Dashboard</Link></div>
                <div className='sidebar-item'>Wallet</div>
                <div className='sidebar-item'>Notifications</div>
                <div className='sidebar-item'>Saved items</div>
                <div className='sidebar-item'>Cart({state.length})</div>
                <div className='sidebar-item'>Wishlist</div>
                <hr />
                <div className='sidebar-bottom'>
                    <div className='sidebar-profile'>
                        <div><img src='/User.png' alt='sample-profile' /></div>
                        <p>John smith</p>
                    </div>
                </div>
                <div className='bottom-card-container'>
                    <div className='bottom-card' style={{ backgroundImage: "url(/wavy4.png)" }}>
                        <div className='bottom-card-details'>
                            <h2>Signup now</h2>
                            <p>Keep shopping on our site
                                and get 20%</p>
                            <button className='bottom-card-button'>Get started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;