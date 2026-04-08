import React, { useRef } from 'react'
import Header from './components/Header'
import heroImage from "./assets/heroImage.jpg"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP);

const App = () => {
  const heroImageRef = useRef(null)
  const heroImageWrapperRef = useRef(null)

    useGSAP(() => {
        // Set initial state via GSAP to avoid Tailwind transform conflicts
        gsap.set(heroImageRef.current, { 
            xPercent: -50, 
            yPercent: -50,
            left: "75%",
            top: "50%" 
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "body", 
                start: "top top",
                end: "400px top", 
                scrub: 1,         
            }
        });

        tl.to(heroImageRef.current, {
            left: "50%",      // Adjust to match your px-9 (9 * 4px)
            top: "50%",        // Centered vertically within the 25h header
            height: "400px",
            duration: 1
        }, 0) // 0 ensures it starts at the beginning of the timeline
    }, { dependencies: [], scope: heroImageWrapperRef });

  return (
    <div className='h-[200vh]'>
      <Header/>

      <div ref={heroImageWrapperRef} className='fixed w-full h-screen z-50 pointer-events-none'>
        <img ref={heroImageRef} src={heroImage} alt="Cretan Labdanum" className='h-[35vh] w-auto absolute z-50 pointer-events-auto'/>
      </div>
    </div>
  )
}

export default App