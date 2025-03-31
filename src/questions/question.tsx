import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
const Questions = ()=>{
    const navigate = useNavigate();
    const [score,setScore] =useState<number>(0);
    const [i,setI] = useState<number>(0);
    const [Questions,setQuestions] = useState<any>(null);
    const [correct,setCorrect] = useState<null|string>(null);
    const [answer,setAnswer] = useState<boolean|null>(null);
    const [skip,setSkip] = useState<boolean>(false);
    const handleAnswer = (e:any,ans:string)=>{
        if(ans == correct){
            setAnswer(true)
            setScore(score+4)
        }else{
            setAnswer(false)
            setScore(score-1);
        }
        setTimeout(()=>{
            setI(i+1);
            if ( i === 9 ) {
                navigate("/score");
                let sc = answer? score+4:score-1;
                localStorage.setItem("score", sc.toString());
                return;
            }
            setCorrect(Questions[i+1].correct_answer)
            e.target.checked = false;
            setAnswer(null);
        } , 3500)
        return;
    }
    const handleSkip = ()=>{
        setSkip(true);
        setTimeout(()=>{
            setI(i+1);
            if ( i === 9 ) {
                navigate("/score");
                localStorage.setItem("score", score.toString());
                return;
            }
            setCorrect(Questions[i+1].correct_answer)
            setAnswer(null);
        } , 2500)
        return;
    }
    useEffect(()=>{
        let info = async()=>{
            const data = {
                "exam": localStorage.getItem("exam"),
                "subject": localStorage.getItem("subject"),
                "topic": localStorage.getItem("topic"),
                "difficulty": localStorage.getItem("difficulty")
            }
            let result = await axios.post('https://examprepbackend.onrender.com/generate-questions/',data);
            if(result.data.success){
                setQuestions(result.data.questions.questions);
                setCorrect(result.data.questions.questions[0].correct_answer);
            }
            console.log(result);
            
        }
        info();

    },[])

    if (Questions === null){
        return (
            <>
            <div className="flex flex-col gap-0 justify-center items-center min-h-screen">
            <div className="bat flex justify-center items-center">
                <div className="t"></div>
                <div className="m flex test items-center">
                    <div className="eye"></div>
                    <div className="eye"></div>
                </div>
                <div className="b"></div>
            </div>
            <div className="flex justify-around items-center gap-4">
                <div className="lleg">t</div>
                <div className="rleg">l</div>
            </div>
            </div>
           </>
        )
    }
    return (
        <div className="bgplay relative min-h-screen">
            <div className={`${answer===null? "hidden":answer? "hidden":"flex"}  absolute gap-10 justify-center min-h-screen w-full`}>
                <div className="min-h-screen w-[20px] wrong"></div>
                <h1 className="text-2xl text-red-600">Wrong</h1>
                <div className="min-h-screen w-[30px] wrong"></div>
                <h1 className="text-2xl text-green-800">Choice</h1>
                <div className="min-h-screen w-[20px] wrong"></div>
            </div>
            <div className={`${answer===null? "hidden":answer? "flex":"hidden"}  absolute flex-col gap-20 justify-center min-h-screen w-full`}>
                <div className="absolute cone"></div>
                <div className="absolute rcone"></div> 
                <div className="absolute popper flex flex-col justify-center gap-10 items-center">
                    <div className="flex justify-between items-center gap-4">
                        <div className="bg-red-600 pop  w-[20px] h-[30px]"></div>
                        <div className="bg-green-600 pop w-[20px] h-[30px]"></div>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <div className="bg-red-950 pop  w-[20px] h-[30px]"></div>
                        <div className="bg-green-950 pop w-[20px] h-[30px]"></div>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <div className="bg-red-600 pop pip  w-[20px] h-[30px]"></div>
                        <div className="bg-green-600 pop w-[20px] h-[30px]"></div>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <div className="bg-amber-600 pop  pip  w-[20px] h-[30px]"></div>
                        <div className="bg-violet-600 pop w-[20px] h-[30px]"></div>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <div className="bg-orange-600 pop  w-[20px] h-[30px]"></div>
                        <div className="bg-purple-600pip  pop w-[20px] h-[30px]"></div>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <div className="bg-red-600 pop  w-[20px] h-[30px]"></div>
                        <div className="bg-green-600 pop pip  w-[20px] h-[30px]"></div>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <div className="bg-pink-600 pop  w-[20px] h-[30px]"></div>
                        <div className="bg-blue-600 pop w-[20px] h-[30px]"></div>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <div className="bg-green-600 pop pip w-[20px] h-[30px]"></div>
                        <div className="bg-red-600 pop w-[20px] h-[30px]"></div>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <div className="bg-yellow-600 pip pop  w-[20px] h-[30px]"></div>
                        <div className="bg-green-600 pop pip w-[20px] h-[30px]"></div>
                    </div>
                </div>
                <div className="p1"></div>
                <div className="w-full h-[30px] correct"> congratulations </div>
                {/* <h1 className="text-2xl text-red-600">correct</h1> */}
                <div className="w-full h-[30px] correct"> Sweety </div>
                {/* <h1 className="text-2xl text-green-800">Choice</h1> */}
                <div className="w-full h-[30px] correct"> Akshaya </div>
            </div>
            <div className="flex flex-col justify-center p-5 items-center max-w-4xl">
                <h1>
                   {Questions[i].question}
                </h1>
                <div className="border border-amber-200 mt-20 ">
                    <div className={`flex ${answer=== null ? "": correct===Questions[i].options[0]? "correctA":"wrongA"} w-[300px]  p-2  text-center justify-start gap-2 itmes-center`}>
                    <input type="radio" onChange={(e)=>handleAnswer(e,Questions[i].options[0])}/>
                    <h2>{Questions[i].options[0]}</h2>
                    </div>
                </div>
                <div className="border border-amber-200 mt-10 ">
                    <div className={`flex ${answer=== null ? "": correct===Questions[i].options[1]? "correctA":"wrongA"} w-[300px]  p-2  text-center justify-start gap-2 itmes-center`}>
                    <input type="radio" onChange={(e)=>handleAnswer(e,Questions[i].options[1])}/>
                    <h2>{Questions[i].options[1]} </h2>
                    </div>
                </div>
                <div className="border border-amber-200 mt-10 ">
                    <div className={`flex ${answer=== null ? "": correct===Questions[i].options[2]? "correctA":"wrongA"} w-[300px]  p-2  text-center justify-start gap-2 itmes-center`}>
                    <input type="radio" onChange={(e)=>handleAnswer(e,Questions[i].options[2])}/>
                    <h2>{Questions[i].options[2]} </h2>
                    </div>
                </div>
                <div className="border border-amber-200 mt-10 ">
                    <div className={`flex ${answer=== null ? "": correct===Questions[i].options[3]? "correctA":"wrongA"} w-[300px]  p-2  text-center justify-start gap-2 itmes-center`}>
                    <input type="radio"onChange={(e)=>handleAnswer(e,Questions[i].options[3])}/>
                    <h2>{Questions[i].options[3]} </h2>
                    </div>
                </div>
                <div className="border border-amber-200 mt-10">
                    <div className={`flex  w-[300px]  p-2  text-center justify-start gap-2 itmes-center`} onClick={handleSkip}>
                    <h2>Skip This Question</h2>
                    </div>
                </div>
                {
                    skip?
                    <div className="border border-amber-200 mt-10">
                    <div className={`flex  w-[300px]  p-2  text-center justify-start gap-2 itmes-center`}>
                    <h2>{correct}</h2>
                    </div>
                </div>:""
                }
            </div>
            
        </div>
    )
}

export default Questions