

function About(){
    const techs=[
        {src:'/html.svg',label:'HTML'},
        {src:'/css.svg',label:'CSS'},
        {src:'/javaScript.svg',label:'JavaScript'},
        {src:'/react.svg',label:'React'},
        {src:'/tailwind.svg',label:'Tailwind'},
        {src:'/nodeJS.svg',label:'NodeJS'},
        {src:'/express.svg',label:'Express'},
        {src:'/mongoDb.svg',label:'MongoDB'},
    ]

    return(
        <div id='about' className="flex w-full flex-col gap-5 ">
            <h1 className="sticky top-0 z-20 p-3 backdrop-blur text-lg md:hidden">About</h1>
            <p className="text-slate-400 text-base sm:text-lg">
                I'm a developer who loves to create clean and useful experiences, as evident from my portfolio.
                I'm not averse to challenges and highly driven to keep refining my skills and applying them in real-world applications.
            </p>
            <p className="text-slate-400 text-base sm:text-lg">
                Currently enrolled in the Bachelor of Science in Computer Science program at Tbilisi State University (TSU), focusing on foundational and advanced topics in programming, algorithms, data structures, and software development.
            </p>
            <p className="text-slate-400 text-base sm:text-lg">
                In my spare time, I enjoy playing video games, working out, reading, and spending time with my family.
            </p>
            <h1 className="text-base sm:text-lg text-slate-200" >These are current technologies I'm profficent with:</h1>
            <div className="flex gap-3 flex-wrap w-full ">
                {
                    techs.map((e,i)=>{
                        return(
                            <div 
                                className="flex gap-2 items-center ring p-3 ring-blue-500 rounded-lg"
                                key={i}>
                                <img src={e.src} className="w-7 sm:w-10" alt={e.label} />
                                <h1 className="text-sm sm:text-md lg:text-lg">{e.label}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default About;