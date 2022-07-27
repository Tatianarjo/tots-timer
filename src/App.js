import SetPomodoro from "./components/SetPomodoro";
import { SettingsContext } from "./context/SettingsContext";
import { useContext, useEffect } from "react";
import Button from "./components/Button";
import CountdownAnimation from "./components/CountdownAnimation";

function App() {
  const { pomodoro, executing, setCurrentTimer, SettingBtn, children, updateExecute, startAnimate, startTimer, pauseTimer } =
    useContext(SettingsContext);

    useEffect(() => {updateExecute(executing)}, [executing, startAnimate])
  
    return (
    <div className="container">
      <h1 className="title_name">Tot's Timer</h1>
      <h2 className="sub_title">Work | Short Break | Long Break</h2>
      {pomodoro == 0 ? (
        <SetPomodoro />
      ) : (
        <>
          <ul className="labels">
            <li>
              <Button
                title="Work"
                activeClass={executing.active === "work" && "active-label"}
                _callback={() => setCurrentTimer("work")}
              />
            </li>
            <li>
              <Button
                title="Short Break"
                activeClass={executing.active === "short" && "active-label"}
                _callback={() => setCurrentTimer("short")}
              />
            </li>
            <li>
              <Button
                title="Long Break"
                activeClass={executing.active === "long" && "active-label"}
                _callback={() => setCurrentTimer("long")}
              />
            </li>
          </ul>
          
          <Button title="Settings" _callback={SettingBtn} />
          <div className="time-container">
            <div className="time-wrapper">
              
              <CountdownAnimation
              key={pomodoro}
              timer={pomodoro}
              animate={startAnimate}
              >{children}</CountdownAnimation>
            </div>
          </div>
          <div className="button-wrapper">
          <Button title="Start" activeClass={!startAnimate ? 'active' : undefined} _callback={startTimer} />
          <Button title="Pause" activeClass={startAnimate ? 'active' : undefined} _callback={pauseTimer} />

          </div>
        </>
      )}
    </div>
  );
}

export default App;
