function Contact(){
    
    return (
        <>
            <div id="contact" className="flex flex-col gap-2 text-slate-400">
                <h1 className="sticky top-0 z-20 p-3 text-slate-200 backdrop-blur text-lg md:hidden">Contact</h1>
                <div className="flex gap-2">
                    <img className="w-5" src="/phone.svg" alt="phone-icon"/>
                    <h1>+995 599 913 158</h1>
                </div>
                <div className="flex gap-2">
                    <img className="w-5" src="/email.svg" alt="email-icon"/>
                    <h1>leskobugadze@gamil.com</h1>
                </div>
                <div className="flex gap-2">
                    <img className="w-5 " src="/location.svg" alt="location-icon"/>
                    <h1>Georgia, Tbilisi</h1>
                </div>
            </div>
        </>
    )
}

export default Contact;