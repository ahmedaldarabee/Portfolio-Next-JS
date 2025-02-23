import { FC, ReactNode } from "react";

interface ButtonProps {
    // | that be [ or ]
    variant?:"primary" | "secondary" | "outline",
    isFullSize?:boolean,
    children:ReactNode,
}

const Button: FC<ButtonProps> = ({variant="primary" , isFullSize , children}) => {
    return ( 
        <button className={`btn ${isFullSize && 'w-full'} ${variant === 'primary'?'btn-primary':variant==='secondary' ? 'btn-secondary' : 'btn-outline'}`} 
        type="button"> {children} </button>
    );
}

export default Button;