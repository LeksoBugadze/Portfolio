function Hero(){
    
    return(
        <div className="flex flex-col sticky items-center top-10 md:top-15 lg:top-25 ">
            <div className="flex flex-col gap-5 " >
                <h1 
                    className="text-5xl text-center md:text-left text-blue-500 "
                    >
                    Aleksandre Bugadze
                </h1>
                <h1 
                    className="text-3xl text-center md:text-left"
                    >
                    Full Stack Developer
                </h1>
            </div> 
            <p 
                className="mt-5 text-xl w-2xs text-slate-400 text-center md:text-left"
                >
                I build minimalistic, practical digital expirience for the web.
            </p>
            <div className="md:self-start md:mt-15 md:flex md:flex-col md:gap-5 hidden">
                <a className="cursor-pointer text-slate-300" href="#about">About</a>
                <a className="cursor-pointer text-slate-300" href="#projects">Projects</a>
                <a className="cursor-pointer text-slate-300" href="#contact">Contact</a>
            </div>
            <div className="md:self-start md:mt-15 mt-5 flex items-center gap-5">
                <a href="https://github.com/LeksoBugadze" target="_blank" className="hover:bg-blue-500 transition:bg duration-150  cursor-pointer p-3 ring ring-blue-500 rounded-xl"><img className="w-6" src="/github.svg" alt="github-link"/></a>
                <a href="https://www.linkedin.com/in/lekso-bugadze" target="_blank" className="hover:bg-blue-500 transition:bg duration-150  cursor-pointer p-3 ring ring-blue-500 rounded-xl"><img className="w-6" src="/linkedin.svg" alt="linkedin-link"/></a>
                <a target="_blank" className="hover:bg-blue-500 transition-bg duration-250 flex itmes-center gap-3 ring-1 p-2 pt-3 pb-3 rounded-lg ring-blue-500" href="../public/CV.pdf">Download CV </a>
            </div>
        </div>
    )
}

export default Hero;