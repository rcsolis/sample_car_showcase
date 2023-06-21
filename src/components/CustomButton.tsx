'use client';
import { ICustomButtonProps } from "@types";
import Image from "next/image";

const CustomButton= (props: ICustomButtonProps) =>{
    const { title, containerStyles, textStyles, rightIcon, isDisabled, type, handleClick } = props;
    // Render
    return (
        <button
            disabled={false}
            type={type || "button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1 ${textStyles}`}>
                {title}
            </span>
            {rightIcon && <div className="relative w-6 h-6">
                <Image src={rightIcon}
                    alt="right icon"
                    className="object-contain"
                    fill />    
            </div>}
        </button>
    )
}
export default CustomButton