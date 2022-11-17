import './navbar.css';

import Logo from './nav-utils/pokedexlogo.png';

const Navbar = () => {
    return (
        <div className="bg-white drop-shadow-md">
            <div className="flex pt-5 pb-4 px-5">
                <img src={ Logo } alt='logo'
                    className='h-10'
                />
                <h1 className='text-2xl font-semibold tracking-wide text-gray-700'>Pokedex</h1>
            </div>
        </div>
    )
}

export default Navbar;