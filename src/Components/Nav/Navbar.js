import './navbar.css';

import Logo from './nav-utils/pokedexlogo.png';

const Navbar = () => {
    return (
         <div className='relative z-10'>
            <div className="bg-white drop-shadow-md fixed w-full">
                <div className="flex items-center py-3 px-2 md:pt-5 md:pb-4 md:px-5 duration-300">
                    <img src={ Logo } alt='logo'
                        className='h-5 md:h-10'
                    />
                    <h1 className='text-lg md:text-2xl font-semibold tracking-wide text-gray-700'>Pokedex</h1>
                </div>
            </div>
         </div>   
    )
}

export default Navbar;