import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Score = ()=>{
    const navigate = useNavigate();
    const [sc,setSc] = useState<null|string>("10");
    useEffect(()=>{
        setSc(localStorage.getItem("score"));
    } , [] )
    return (
        <div className="bg-amber-600 flex flex-col min-h-screen justify-center items-center">
           <div className="stop"></div>
           <div className="smid">
            <div className="flex flex-col text-center items-center justify-center" onClick={()=>navigate("/home")}>
                <h1 className="text-5xl font-bold">{sc}</h1>
                <h1>----------</h1>
                <h1 className="text-5xl font-bold">10</h1>
            </div>
           </div>
           <div className="sbottom"></div>
        </div>
    )
}
export default Score;


