import Button from "./componets/Button";
import React from "react";
function App() {
  const [display, setDisplay] = React.useState("");
  function handleClick(e) {
    console.log("hi", e.target.innerText);
    setDisplay((prevDisplay) => {
      // console.log(prevDisplay);
      // reset
      if (prevDisplay.length > 10) return prevDisplay;
      if (e.target.innerText === "RESET") {
        return "";
      }
      // delete
      if (e.target.innerText === "DEL") {
        console.log("del");
        const displayArr = [...prevDisplay];

        return displayArr
          .map((n, i, arr) => (i === arr.length - 1 ? "" : n))
          .join("");
      }
      // evaluation
      if (e.target.innerText === "=") {
        console.log("evaluate");
        return String(eval(display));
      }
      // the x operand
      if (e.target.innerText === "x") {
        return `${prevDisplay}*`;
      }
      // number
      return `${prevDisplay}${e.target.innerText}`;
    });
  }
  return (
    <div className=" flex flex-col min-h-screen justify-center items-center text-white  gap-10 bg-[#b4a597]">
      <div className="bg-[#3a4764] p-5 rounded-xl flex flex-col gap-5">
        <div className=" flex justify-between items-center">
          <p>calc</p>
          <p>theme</p>
          <div className="flex flex-col">
            {/* choosing theme */}
            <ul className="flex justify-between">
              <li>
                <button>1</button>
              </li>
              <li>
                <button>2</button>
              </li>
              <li>
                <button>3</button>
              </li>
            </ul>
            {/* slider */}
            <div className="bg-[red] w-[60px] h-[15px]"></div>
          </div>
        </div>
        {/* display */}
        <p className="bg-[#182034] p-4  rounded-xl text-5xl">
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
