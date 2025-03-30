import { useNavigate } from "react-router-dom"
import { Physics } from "./neet";
import { Chemistry } from "./neet";
import { Biology } from "./neet";
import { useEffect, useState } from "react";
const Neet2 = ()=>{
    const navigate = useNavigate();
    const [topics,setTopic] = useState<any>(null);
    const [top,setTop] = useState<null|string>(null)
    const handle = (item:string)=>{
        localStorage.setItem("topic" ,item)
        localStorage.setItem("difficulty","medium")
        setTop(item);
        setTimeout(()=>{
            navigate("/question");
        },3000);
    }

    useEffect(()=>{
        let topic = localStorage.getItem("subject");
        if (topic === "PHYSICS"){
            setTopic(Physics)
        }else if (topic === "CHEMISTRY"){
            setTopic(Chemistry)
        }else{
            setTopic(Biology)
        }
    })
    return (

        <div className="flex flex-col justify-center items-center">

        {topics?.map((item: any, index: number) => {
            return (
            <div key={index} className={`border mx-10 text-center my-4 w-full 
            ${top===null? "":top===item.topic ? "":"select"} 
             p-2 topic border-yellow-400`} onClick={()=>handle(item.topic)}>
                <h1 className="font-bold">{item.topic}</h1>
            </div>
            )
        })}
        </div>
    )
}

export default Neet2;