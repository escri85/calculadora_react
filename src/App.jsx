import { useState } from "react";
import "./App.scss";

function App() {
  const [numberOne, setNumberOne] = useState("");
  const [numberTwo, setNumberTwo] = useState("");
  const [currentOperation, setCurrentOperation] = useState("");
  const [result, setResult] = useState(0);

  const handleClilckNumber = (event) => {
    const value = event.target.value;
    console.log(event.target.value);
    if (currentOperation === "") {
      setNumberOne(numberOne + value);
    } else {
      setNumberTwo(numberTwo + value);
    }
  };
  const handleClikOperation = (event) => {
    const value = event.target.value;
    setCurrentOperation(value);
  
  };
  const getResult = () => {
    switch (currentOperation) {
      case "+":
        setResult(Number(numberOne) + Number(numberTwo));
        break;
      case "-":
        setResult(Number(numberOne) - Number(numberTwo));
        break;
      case "*":
        setResult(Number(numberOne) * Number(numberTwo));
        break;
      case "/":
        setResult(Number(numberOne) / Number(numberTwo));
        break;
      default:
      }
      setTimeout(()=>{
        deleteAll()
      },1500)
    };
    const deleteAll = () => {
      setNumberOne("");
      setNumberTwo("");
      setCurrentOperation("");
      setResult("");
    };

  return (
    <div className="App">
      <div className="calculator-grid">
        <div className="output">
          <div className="previus">
            {currentOperation ? numberOne + currentOperation : ""}
          </div>
          <div className="current">
            {result ? result : !currentOperation ? numberOne : numberTwo}
          </div>
        </div>

        <button onClick={deleteAll} className="span-two">
          AC
        </button>
        <button value="" onClick={deleteAll}>
          DEL
        </button>
        <button value="/" onClick={handleClikOperation}>
          /
        </button>
        <button value="7" onClick={handleClilckNumber}>
          7
        </button>
        <button value="8" onClick={handleClilckNumber}>
          8
        </button>
        <button value="9" onClick={handleClilckNumber}>
          9
        </button>
        <button value="*" onClick={handleClikOperation}>
          *
        </button>
        <button value="4" onClick={handleClilckNumber}>
          4
        </button>
        <button value="5" onClick={handleClilckNumber}>
          5
        </button>
        <button value="6" onClick={handleClilckNumber}>
          6
        </button>
        <button value="+" onClick={handleClikOperation}>
          +
        </button>
        <button value="1" onClick={handleClilckNumber}>
          1
        </button>
        <button value="2" onClick={handleClilckNumber}>
          2
        </button>
        <button value="3" onClick={handleClilckNumber}>
          3
        </button>
        <button value="-" onClick={handleClikOperation}>
          -
        </button>
        <button value="." onClick={handleClilckNumber}>
          .
        </button>
        <button value="0" onClick={handleClilckNumber}>
          0
        </button>
        <button onClick={getResult} className="span-two">
          =
        </button>
      </div>
    </div>
  );
}

export default App;
