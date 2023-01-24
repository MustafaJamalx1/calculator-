import Button from "./componets/Button";
import React from "react";
function App() {
  const [display, setDisplay] = React.useState("");
  // const [theme, setTheme] = React.useState("1");
  // slider
  function slider(e) {
    if (Number(e.target.id) === 1) {
      console.log("left");
      document.querySelector("#slider").classList.add("left-0");
    }
    if (Number(e.target.id) === 3) {
      const temp = document.querySelector("#slider");
      // it's named containes not includse
      // document.querySelector("#slider").classList.includes("left-0")
      temp.classList.contains("left-0")
        ? temp.classList.replace("left-0", "right-0")
        : temp.classList.add("right-0");
    }
  }
  function handleClick(e) {
    setDisplay((prevDisplay) => {
      // console.log(prevDisplay);
      // reset

      if (e.target.innerText === "RESET") {
        return "";
      }
      // delete
      if (e.target.innerText === "DEL") {
        const displayArr = [...prevDisplay];

        return displayArr
          .map((n, i, arr) => (i === arr.length - 1 ? "" : n))
          .join("");
      }
      // evaluation
      if (e.target.innerText === "=") {
        return String(eval(display));
      }
      // the x operand
      if (e.target.innerText === "x") {
        return `${prevDisplay}*`;
      }
      if (prevDisplay.length > 15) return prevDisplay;
      // number
      return `${prevDisplay}${e.target.innerText}`;
    });
  }

  return (
    <div className="flex flex-col min-h-screen justify-center items-center text-white gap-10 bg-[#b4a597] font-spartan">
      <div className="bg-[#3a4764] p-5 rounded-xl flex flex-col gap-5">
        <div className=" flex justify-between items-end">
          <p className="text-4xl">calc</p>
          <p className=" ml-auto pr-2 text-xs -translate-y-[0.2rem]">THEME</p>
          <div className="flex flex-col gap-1">
            {/* choosing theme */}
            <ul className="flex justify-between px-[.3rem]">
              <li>
                <button id="1" onClick={slider} className=" text-xs">
                  1
                </button>
              </li>
              <li>
                <button id="2" onClick={slider} className=" text-xs">
                  2
                </button>
              </li>
              <li>
                <button id="3" onClick={slider} className=" text-xs">
                  3
                </button>
              </li>
            </ul>
            {/* slider */}
            <div className="bg-[#232c43] w-[60px] h-[20px] rounded-full flex items-center relative">
              <div
                id="slider"
                className="w-[17px] rounded-full h-[17px] bg-[red] absolute left"
              ></div>
            </div>
          </div>
        </div>
        {/* display */}
        <p className="bg-[#182034] p-4  rounded-xl text-5xl overflow-hidden">
          {display ? display : "0"}
        </p>
        {/* calc buttons */}
        <div className="bg-[#232c43] text-[#444b5a] rounded-xl grid grid-cols-4 justify-items-center place-items-center gap-x-5 gap-y-5 p-4">
          <Button value="7" handleClick={handleClick} />
          <Button value="8" handleClick={handleClick} />
          <Button value="9" handleClick={handleClick} />
          <Button
            value="DEL"
            bg="bg-[#637097]"
            shadow="drop-shadow-key"
            handleClick={handleClick}
          />
          <Button value="4" handleClick={handleClick} />
          <Button value="5" handleClick={handleClick} />
          <Button value="6" handleClick={handleClick} />
          <Button value="+" handleClick={handleClick} />
          <Button value="1" handleClick={handleClick} />
          <Button value="2" handleClick={handleClick} />
          <Button value="3" handleClick={handleClick} />
          <Button value="-" handleClick={handleClick} />
          <Button value="." handleClick={handleClick} />
          <Button value="0" handleClick={handleClick} />
          <Button value="/" handleClick={handleClick} />
          <Button value="x" handleClick={handleClick} />
          <Button value="RESET" span="col-span-2" handleClick={handleClick} />
          <Button value="=" span="col-span-2" handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
