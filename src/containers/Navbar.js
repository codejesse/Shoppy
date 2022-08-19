const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="search-bar"><input type="text" placeholder=""></input></div>
            <div className='Navbar-pic'>
                <img src="/profile-pic.png" alt="sample-user-pic" />
            </div>
        </div>
    );
}

export default Navbar;