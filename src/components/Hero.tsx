'use client';
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () =>{

    const handleScroll = ()=>{
        console.log("HOLA");
    };

    // Render
    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                    Find your next car quickly and easily!
                </h1>
                <p className="hero__subtitle">
                    Streamline your car search with our easy-to-use interface.
                </p>

                <CustomButton 
                    title={"Explore our cars"}
                    type="button"
                    containerStyles={"bg-primary-blue text-white rounded-full mt-10"}
                    handleClick={handleScroll}
                />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image
                        src="/hero.png"
                        alt="Hero image"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="hero__image-overlay"></div>
            </div>
        </div>
    )
}

export default Hero