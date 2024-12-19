import React, { useEffect, useState, useRef } from 'react';

function Countdown() {
    const [secound, setSecound] = useState(0);
    const [minut, setMinut] = useState(0);

    const timerRef = useRef(0);

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setSecound((prevSecound) => {
                if (prevSecound === 59) {
                    setMinut((prevMinut) => prevMinut + 1);
                    return 0;
                }
                return prevSecound + 1;
            });
        }, 1000);

        return () => clearInterval(timerRef.current);
    });

    function handleReset() {
        clearInterval(timerRef.current);
        setSecound(0);
        setMinut(0);
    }

    function handleStop() {
        clearInterval(timerRef.current);
        timerRef.current = 0;
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="text-center p-6 rounded-lg shadow-lg bg-white border border-gray-300">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">
                    {minut < 10 ? '0' + minut : minut} : {secound < 10 ? '0' + secound : secound}
                </h1>
                <div className="flex gap-4">
                    <button
                        onClick={handleReset}
                        className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600 focus:outline-none"
                    >
                        Reset
                    </button>
                    <button
                        onClick={handleStop}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 focus:outline-none"
                    >
                        Stop
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Countdown;
