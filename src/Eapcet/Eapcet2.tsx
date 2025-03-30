import { useNavigate } from "react-router-dom"
import { Physics,Chemistry,Biology } from "./eapcet";
import { useEffect, useState } from "react";
const Eapcet2 = ()=>{
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
            ${top===null? "":top===item ? "":"select"} 
             p-2 topic border-yellow-400`} onClick={()=>handle(item)}>
                <h1 className="font-bold">{item}</h1>
            </div>
            )
        })}
        </div>
    )
}

export default Eapcet2;