const Button = ({btnText, btnColor, onClick}) => {
    return(
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: btnColor}} onClick={onClick}>{btnText}</button>
    )
};

export default Button;