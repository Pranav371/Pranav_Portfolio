import '../styles/navbar.css'
function Navbar(){
    return (
        <div className="navlist">
            <div className='navlist-wrapper'>
            <a href="#about-me" className='navlink'>About Me</a>
            <a href="#" className='navlink'>Projects</a>
            <a href="#blogs"className='navlink'>Blogs</a>
            <a href="#" className='navlink'>Contact</a>
            </div>
        </div>
    );
}

export default Navbar;