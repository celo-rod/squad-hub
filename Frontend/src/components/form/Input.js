import style from './Input.module.css';
function Input({type, placeholder} ){
    return(
        <div className = {style.formsContainer}>
                <input type={type} placeholder={placeholder}/>
        </div>  
    )
}


export default Input;