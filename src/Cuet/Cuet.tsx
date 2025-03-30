import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cuet = ()=>{
    const [items,setItem] = useState<string|null>(null)
    const navigate = useNavigate();
    const handleClick = (itemk:string)=>{
        setItem(itemk);
        localStorage.setItem("subject",itemk)
        setTimeout(()=>{
            navigate("/cuet2");
        },4500);
    }
    return (
        <div className="bg-amber-950 flex min-h-screen gap-4 justify-center flex-col items-center">
        {["PHYSICS", "CHEMISTRY",  "BIOLOGY","AGRICULTURE","ENGLISH"].map((item: any, index: number) => {
            return (
                <div key={index}  className={`flex  items-center justify-center ${
    items === null ? "" : item === items ? "parent" : "opacity-0"}`} onClick={() => handleClick(item)}>
                    <div className={`${
    items === null ? "" : item === items ? "left" : ""}`} ></div>
                    <div className=" w-[150px] h-[50px] text-amber-300 text-center border border-green-600 p-2">
                        <h1 className="text-2xl mb-2 text-center"><i>{item}</i></h1>
                    </div>
                    <div className={`${
    items === null ? "" : item === items ? "right" : ""}`}></div>
                </div>
            );
        })}
            
        </div>
    )
}
export default Cuet;