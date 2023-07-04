const Button=(props)=>
{
    return(
        <>
        <button onClick={props.BtnClicked} className={props.classname}>{props.children} </button>
        </>
    );
}
export default Button;