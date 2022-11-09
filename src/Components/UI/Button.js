import './button.css';
const Button = (props) => {
    return (
        <div className="px-4 pb-4 sm:px-6">
            <button
            type={ props.type || "button"}
            onClick={ props.onClick }
            className="button-border inline-flex justify-center border-2
                bg-gray-600 py-2 px-8 text-sm text-white uppercase tracking-widest
                hover:bg-gray-500 focus:outline-none focus:bg-transparent 
                focus:border-gray-900 focus:text-black duration-300"
            >
                { props.children }
            </button>
      </div>
    )
}

export default Button;