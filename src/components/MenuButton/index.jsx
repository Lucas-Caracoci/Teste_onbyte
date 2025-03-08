'use client'

const MenuButton = ({isOpen, onClick ,color}) => {
    return (
        <button
        className=" 
           text-white font-bold py-2 px-4 rounded mt-2 md:hidden"
           onClick={onClick}
        >
       
        {isOpen ? (
            <svg
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12" />
            </svg>
        ) : (
            <svg
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke={color}>
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        )}
    </button>
    );
}

export default MenuButton;
