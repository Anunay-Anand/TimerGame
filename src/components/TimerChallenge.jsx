import { useState, useRef } from "react";

export default function TimerChallenge({ title, targetTime }) {

    const timer = useRef();

    const [timerStared, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);
        setTimerStarted(true);
    }

    function handleStop() {
        clearTimeout(timer.current);
    }

    return (
        <section className="challenge">
            <h2>{ title }</h2>
            { timerExpired && 'You Lost!' }
            <p className="challenge-time">
                { targetTime } second{ targetTime > 1 ? 's': '' }
            </p>
            <p>
                <button onClick={ timerStared ? handleStop : handleStart }>
                    { timerStared ? 'Stop': 'Start' } Challenge
                </button>
            </p>
            <p className={ timerStared ? 'active': undefined }>
                { timerStared ? 'Time is running...' : 'Timer inactive' }
            </p>
        </section>
    );
}