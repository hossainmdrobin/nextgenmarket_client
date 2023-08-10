import React, { useEffect, useRef,useState} from 'react';
import Image from 'next/image'
import tob from "./../../../assets/images/tob.png"
import styles from "./OurProductLeft.module.css"

const OurProductLeft = () => {
    const animationRef = useRef(null)
    const [isAnimated,setIsAnimated] = useState(false)
    const {our_product_left,image_animation} = styles;

    useEffect(()=>{
        const observer = new IntersectionObserver(entries=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    setIsAnimated(true);
                    observer.unobserve(animationRef.current)
                }
            })
        },{threshold:0.5})
        observer.observe(animationRef.current)
        return ()=>{
            observer.disconnect();
        }
    },[])
    return (
        <div ref={animationRef} className={`md:w-1/2 w-full ${our_product_left}`}>        
            <div className='absolute top-[50%] -bottom-[10%] -right-[15%] left-[50%]'>
                <Image className={`${isAnimated? image_animation:""}`} src={tob} alt='lslsls' />                
            </div>
            
        </div>
    );
}

export default OurProductLeft;
