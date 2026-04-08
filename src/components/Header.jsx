import React from 'react'
import logo from "./../assets/logo.png"
import viber from "./../assets/socials/viber.svg"
import whatsapp from "./../assets/socials/whatsapp.svg"
import linkedin from "./../assets/socials/linkedin.svg"
import "./../assets/css/custom.css"

const socials = [
    {
        name: "LinkedIn",
        icon: linkedin,
    },
    {
        name: "Viber",
        icon: viber,
    },
    {
        name: "WhatsApp",
        icon: whatsapp,
    },
]

const Header = () => {
  return (
    <div className='fixed w-full h-25 flex items-center justify-between border-b border-[#d9d9d9] px-9 py-2'>
        <div className='flex items-center justify-center gap-10'>
            <img src={logo} alt="Cretan Labdamun" className='h-20 w-auto'/>

            <div className='flex gap-10 items-center justify-center text-lg font-poppins font-light'>
                <div>Cretan Labdamun</div>

                <div>About Us</div>

                <div>Image Gallery</div>

                <div>Contact</div>
            </div>
        </div>
       

        <div className='flex gap-6 items-center justify-center'>
            {socials.map(({ icon, name, url }) => (
                <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-center group"
                >
                    <img src={icon} alt={name} className={`w-6 h-6 text-white cursor-pointer transition-all duration-300 group-hover:scale-120 group-hover:-translate-y-1
                        ${name === "LinkedIn" ? "rounded-full" : ""}`} />

                    <div
                        className="
                            absolute top-10 flex flex-col items-center
                            opacity-0 translate-y-0 scale-75
                            group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
                            transition-all duration-300 pointer-events-none
                            "
                        >
                        <div className="px-3 py-1 text-xs text-black font-inter bg-black/10 backdrop-blur-md rounded-md border border-white/20">
                            {name}
                        </div>
                    </div>
                </a>
            ))}
        </div>
    </div>
  )
}

export default Header