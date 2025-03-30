import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
    const [selected, setSelected] = useState<string | null>(null);
    const [showOverlay, setShowOverlay] = useState<boolean>(false);

    const handleClick = (exam: string) => {
        setSelected(exam);
        localStorage.setItem("exam",exam);
        setShowOverlay(true)
    };

    return (
        <div className="bg-black min-h-screen relative flex flex-col items-center justify-center gap-10 p-10">
            {/* Three Divs */}
            {["NEET", "CUET", "EAPCET"].map((exam) => (
                <AnimatePresence key={exam}>
                    {!selected && (
                        <motion.div
                            className={`rounded-full border border-amber-300 h-[200px] ${exam.toLowerCase()} w-[200px] animate-bounce  flex items-center justify-center cursor-pointer`}
                            onClick={() => handleClick(exam)}
                            whileHover={{ scale: 1.1 }}
                        >
                            <h1 className={`text-4xl ${
                                exam === "NEET" ? "text-red-600" :
                                exam === "CUET" ? "text-green-600" :
                                "text-blue-600"
                            }`}>{exam}</h1>
                        </motion.div>
                    )}
                </AnimatePresence>
            ))}

            {/* Expanding Effect */}
            {selected && (
                <>
                    <motion.div
                        className={`fixed inset-0 rounded-full border border-amber-300 h-[200px] w-[200px] flex items-center justify-center cursor-pointer`}
                        initial={{ y: "-30%", x: "50%", scale: 1 ,rotateZ:0}}
                        animate={{ y: "100%", x: "50%", scale: 1,rotateZ:360}}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        style={{
                            background: selected === "NEET" ? "yellow" :
                                        selected === "CUET" ? "green" : "blue"
                        }}
                    />
                    {/* <motion.div
                        className="h-[100px] w-[100px] rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    /> */}
                </>
            )}

{showOverlay && (
                <motion.div
                    className="fixed inset-0"
                    initial={{ scale: 0, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                    animate={{ scale: 50, backgroundColor: 
                        selected === "NEET" ? "rgba(255, 0, 0, 1)" :
                        selected === "CUET" ? "rgba(0, 255, 0, 1)" :
                        "rgba(0, 0, 255, 1)"
                    }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    onAnimationComplete={() => window.location.href = `/#/${selected?.toLowerCase()}`}
                />
            )}
        </div>
    );
};

export default Home;
