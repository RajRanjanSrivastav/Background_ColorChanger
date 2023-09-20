import React, { useState } from "react";

const Header = () => {
  const [color, setColor] = useState();

  // const colorChanger = (id) => {
  //   console.log(id);
  // };

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div  className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bh-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" id="red" onClick={() => setColor("red")} style={{backgroundColor:"red"}} >
              Red
            </button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" id="orange" onClick={() => setColor("orange")} style={{backgroundColor:"orange"}}>
              Orange
            </button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" id="pink" onClick={() => setColor("pink")} style={{backgroundColor:"pink"}}>
              Pink
            </button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" id="green" onClick={() => setColor("green")} style={{backgroundColor:"green"}}>
              Green
            </button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" id="blue" onClick={() => setColor("blue")} style={{backgroundColor:"blue"}}>
              Blue
            </button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" id="purple" onClick={() => setColor("purple")} style={{backgroundColor:"purple"}}>
              Purple
            </button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" id="black" onClick={() => setColor("black")} style={{backgroundColor:"black"}}>
              Black
            </button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" id="olive" onClick={() => setColor("olive")} style={{backgroundColor:"olive"}}>
              Olive
            </button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" id="brown" onClick={() => setColor("brown")} style={{backgroundColor:"brown"}}>
              Brown
            </button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" id="skyblue" onClick={() => setColor("skyblue")} style={{backgroundColor:"skyblue"}}>
              Skyblue
            </button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" id="grey" onClick={() => setColor("grey")} style={{backgroundColor:"grey"}}>
              Grey
            </button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" id="voilet" onClick={() => setColor("yellow")} style={{backgroundColor:"yellow"}}>
              Yellow
            </button>
          </div>
        </div>
      </div>

      {/* <div className="container" style={{ backgroundColor: color }}>
        <button id="red" onClick={() => colorChanger(this.id)}>
          Red
        </button>
        <button id="orange" onClick={() => setColor("orange")}>
          Orange
        </button>
        <button id="pink" onClick={() => setColor("pink")}>
          Pink
        </button>
        <button id="green" onClick={() => setColor("green")}>
          Green
        </button>
        <button id="blue" onClick={() => setColor("blue")}>
          Blue
        </button>
        <button id="purple" onClick={() => setColor("purple")}>
          Purple
        </button>
        <button id="black" onClick={() => setColor("black")}>
          Black
        </button>
        <button id="white" onClick={() => setColor("white")}>
          White
        </button>
        <button id="brown" onClick={() => setColor("brown")}>
          Brown
        </button>
        <button id="skyblue" onClick={() => setColor("skyblue")}>
          Skyblue
        </button>
        <button id="grey" onClick={() => setColor("grey")}>
          Grey
        </button>
        <button id="voilet" onClick={() => setColor("violet")}>
          Violet
        </button> */}
      {/* </div> */}
    </>
  );
};

export default Header;
