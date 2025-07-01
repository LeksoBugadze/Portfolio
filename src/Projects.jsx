import React,{ useState } from "react";

function Projects(){
    const [projectsArr,setProjectsArr]=useState([
        {
            name:<h1 className="text-slate-300 text-lg transition-all duration-200">Find Location App</h1>,
            imageLink:'findByIp.png',
            description:
            <p className="text-slate-400">
                This is a full-stack application that utilizes two APIs to provide location-based functionality.
                The first is an IP Geolocation API, which retrieves geographical information based on an IP address, email, or domain.
                The second is Leaflet.js, a JavaScript library used to render interactive maps.
                The application combines these technologies to display the retrieved location data visually on a map, offering a dynamic and user-friendly interface.  
            </p>,
            techs:
            <div className="flex gap-2 items-center">
                <h1 className="text-slate-400">Built with: </h1>
                <img className="ring-1 p-1 rounded-xl ring-blue-500 w-10" src="/typescript.svg" alt="typescript"/>
                <img className="ring-1 p-1 rounded-xl ring-sky-400 w-10" src="/react.svg" alt="react"/>
                <img className="ring-1 p-1 rounded-xl ring-sky-400 w-10" src="/tailwind.svg" alt="tailwind"/>
                <img className="ring-1 p-1 rounded-xl ring-orange-400 w-10" src="/java.svg" alt="java"/>
                <img className="ring-1 p-1 rounded-xl ring-lime-500 w-10" src="/spring.svg" alt="spring"/>
            </div>,
            link:'https://findbyip.aleksandrebugadze.com',
        },{
            name:<h1 className="text-slate-300 text-lg transition-all duration-200">To-Do List</h1>,
            imageLink:'todoList.jpeg',
            description:
            <p className="text-slate-400">
                This is a full stack To-Do List web application that is rich in features developed with modern technologies 
                having user authentication and task management capabilities.
                It can enable users to securely register, login, and manage their own tasks in a clean and responsive UI.
            </p>,
            techs:
            <div className="flex gap-2 items-center">
                <h1 className="text-slate-400">Built with: </h1>
                <img className="ring-1 p-1 rounded-xl ring-sky-400 w-10" src="/react.svg" alt="react"/>
                <img className="ring-1 p-1 rounded-xl ring-sky-400 w-10" src="/tailwind.svg" alt="tailwind"/>
                <img className="ring-1 p-1 rounded-xl ring-lime-500 w-10" src="/nodeJS.svg" alt="nodeJS"/>
                <img className="ring-1 p-1 rounded-xl ring-slate-400 w-10" src="/express.svg" alt="express"/>
                <img className="ring-1 p-1 rounded-xl ring-green-400 w-10" src="/mongoDb.svg" alt="mongoDB"/>
            </div>,
            link:'https://to-do-list.aleksandrebugadze.com',
        },{
            name:<h1 className="text-slate-300 text-lg transition-all duration-200">Weather App</h1>,
            imageLink:'weatherApp.png',
            description:
            <p className="text-slate-400">
                This is a full stack weather application built with the latest web technology.
                It fetches real-time weather data by implementing the OpenWeather API, providing users with real-time information based on what they provide.  
            </p>,
            techs:
            <div className="flex gap-2 items-center">
                <h1 className="text-slate-400">Built with: </h1>
                <img className="ring-1 p-1 rounded-xl ring-orange-400 w-10" src="/html.svg" alt="html"/>
                <img className="ring-1 p-1 rounded-xl ring-blue-400 w-10" src="/css.svg" alt="css"/>
                <img className="ring-1 p-1 rounded-xl ring-yellow-400 w-10" src="/javaScript.svg" alt="javascript"/>
                <img className="ring-1 p-1 rounded-xl ring-lime-500 w-10" src="/nodeJS.svg" alt="nodeJS"/>
                <img className="ring-1 p-1 rounded-xl ring-slate-400 w-10" src="/express.svg" alt="express"/>
            </div>,
            link:'https://weather-app.aleksandrebugadze.com',
        },{
            name:<h1 className="text-slate-300 text-lg transition-all duration-200">Rogue Cube </h1>,
            imageLink:'rogueCube.jfif',
            description:
            <p className="text-slate-400">
                Rogue Cube is a 2D roguelike game with an isometric perspective.
                Your main goal is to grow stronger and defeat the final boss without dying.
                If you die, you lose everything.
            </p>,
            techs:
            <div className="flex gap-2 items-center">
                <h1 className="text-slate-400">Built with: </h1>
                <img className="ring-1 p-1 rounded-xl ring-orange-400 w-10" src="/html.svg" alt="html"/>
                <img className="ring-1 p-1 rounded-xl ring-blue-400 w-10" src="/css.svg" alt="css"/>
                <img className="ring-1 p-1 rounded-xl ring-yellow-400 w-10" src="/javaScript.svg" alt="javascript"/>
            </div>,
            link:'https://rogue-cube.aleksandrebugadze.com',
        }
    ])
    
    
    return(
        <div id="projects" className="flex w-full flex-col gap-5">
            <div className="flex flex-col gap-5 group/list">
            <h1 className="sticky top-0 z-20 p-3 backdrop-blur text-lg md:hidden">Projects</h1>
                {
                    projectsArr.map((e,i)=>{
                        return(
                            <a 
                                className="md:group-hover/list:opacity-50 md:hover:!opacity-100 transition-opacity duration-200 hover:bg-slate-800 transition-bg duration-200 
                                flex-col lg:flex-row p-4 rounded-xl flex items-center gap-5"
                                href={e.link}
                                target="_blank"                           
                                key={i}
                                >
                                <img
                                    className="lg:w-50 rounded-xl " 
                                    src={e.imageLink} 
                                    alt="project-image"/>
                                <div className="flex flex-col gap-3 items-start">
                                    {e.name}
                                    {e.description}
                                    {e.techs}
                                </div>
                            </a>
                        )
                    })
                }
                <a 
                    target="_blank"
                    href="https://github.com/LeksoBugadze?tab=repositories"
                    className="inline-block group group-hover/list:opacity-50 lg:hover:!opacity-100 underline cursor-pointer text-xl text-slate-300"
                    >
                    View other projects <img src="/arrow-right.svg" className="inline-block group-hover:ml-2 transition-ml duration-200 w-6"></img>
                </a>
            </div>
        </div>
    )
}

export default Projects;