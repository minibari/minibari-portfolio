export default function TabButton({isSelected, children, ...props}){
    return(
        <button className={isSelected ? "btn btn-primary ms-1" : "btn btn-outline-primary  ms-1"}{...props}>{children}</button>
    );
}