import './navbar.css';

import Logo from './nav-utils/pokedexlogo.png';

const Navbar = () => {
    return (
        <div className="bg-white drop-shadow-md">
            <div className="flex justify-between pt-5 pb-4 px-5">
                <img src={ Logo } alt='logo'
                    className='h-10'
                />
            </div>
        </div>
    )
}

export default Navbar;