import React,{useState,useEffect} from "react";

function CursorGlow(){
    const [cursorPos,setCursorPos]=useState({x:0,y:0});
    
    useEffect(()=>{
        function updatePos(e){
            setCursorPos({ x: e.clientX, y: e.clientY });
        }

        window.addEventListener("mousemove", updatePos);
        return () => window.removeEventListener("mousemove", updatePos);
    },[])

    return(
        <div 
            style={{
                position: "fixed",
                top: cursorPos.y,
                left: cursorPos.x,
                width: "600px",
                height: "600px",
                background: "radial-gradient(600px at 654px 1954px, rgba(29, 78, 216, 0.15))",
                borderRadius: "50%",
                pointerEvents: "none",
                transform: "translate(-50%, -50%)",
                filter: "blur(10em)",
                zIndex: 1,
            }}>
        </div>
    )
}

export default CursorGlow;