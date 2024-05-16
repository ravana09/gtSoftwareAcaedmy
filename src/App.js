import logo from "./logo.svg";
import "./App.css";
import One from "./Components/one";
import Facebook from "./Components/facebook";
import NewAccount from "./Components/newAccount";
import Grid from "./Components/grid";
import Variables from "./Components/Variables";
import Var from "./practice/Var";
import Logical from "./Components/Logical";
import LogicalPractice from "./practice/logicalPractice";
import Task from "./practice/Task";
import IfElse from "./Components/IfElse";
import UseState from "./Components/UseState";
import UseSataePractice from "./practice/useSataePractice ";
import UseStateTask from "./practice/Task/useStateTask";
import Bigger from "./Components/Biiger";
import OddEven from "./practice/Task/oddEven";
import FarenToCelcius from "./practice/Task/FarenToCelcius";
import Percentage from "./practice/Task/Percentage";
import Leapyear from "./practice/Task/Leapyear";
import SwitchCase from "./Components/SwitchCase";
import Season from "./practice/Task/Season";
import Vowelstask from "./practice/Task/Vowelstask";
import TicketPrice from "./practice/Task/TicketPrice";
import ColorChanging from "./practice/Task/ColorChanging";
import Calculator from "./practice/Task/Calculator";
import Loops from "./Components/Loops";
import EvenNum from "./practice/Task/ForLoop/EvenNum";
import Factorial from "./practice/Task/ForLoop/Factorial";
import Multiplication from "./practice/Task/ForLoop/Multiplication";
import MultiMultiplication from "./practice/Task/ForLoop/MultiMultiplication";
import SumofOdd from "./practice/Task/ForLoop/SumofOdd";
import Prime from "./practice/Task/ForLoop/Prime";
import Fibobonacci from "./practice/Task/ForLoop/Fibobonacci";
import PrimeNo from "./Components/Prime";
import BmiCalculator from "./practice/Task/BmiCalculator";
import Whileloop from "./practice/Task/ForLoop/Whileloop";
import FactorialFunc from "./practice/Task/function/factorialFunc";
import BmiCopy from "./practice/Task/BmiCopy";
import FibbonacciFunc from "./practice/Task/function/FibbonacciFunc";
import SpreadOp from "./Components/SpreadOp";
import Events from "./Components/Events";
import MultiState from "./practice/Task/MultiState";
import MouseEvents from "./Components/MouseEvents";
import MouseColorChange from "./practice/Task/MouseColorChange";
import MouseEnter from "./practice/Task/events/MouseEnter";
import MouseUpAndDown from "./practice/Task/events/MouseUpAndDown";
import Counter from "./practice/Task/Calculator/Counter";
import BasicCalculator from "./practice/Task/Calculator/Calculator";
import Notes from "./practice/Task/Calculator/Notes";
import MonthlyLoan from "./practice/Task/Calculator/MonthlyLoan";
import SavingCalculate from "./practice/Task/Calculator/SavingCalculate";
import ParentComp from "./Components/ParentComp";
import ParentEle from "./practice/ParentEle";
import TaskPropsChild from "./practice/Task/props/TaskPropsChild";
import TaskPropsParent from "./practice/Task/props/TaskPropsParent";
import ChildToParent from "./Components/ChildToParent";
import ChildButton from "./practice/Task/props/ChildButton";
import ParentButton from "./practice/Task/props/ParentButton";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Routing from "./Components/Routing";
import Routers from "./practice/Task/Routers/Routers";
import Forms from "./Components/Forms";
import FormTask from "./practice/Task/Form/FormTask";
import TipsCalculator from "./practice/Task/Calculator/TipsCalculator";
import ObjectExample from "./Components/ObjectExample";
import NumberObj from "./Components/NumberObj";
import Tofixed from "./practice/Task/Object/Tofixed";
import DateObj from "./Components/DateObj";
import AgeCalculator from "./practice/Task/Object/AgeCalculator";
import TImeNoon from "./practice/Task/Object/TImeNoon";
import MathObj from "./Components/MathObj";
import Dice from "./practice/Task/Object/Dice";
import ColorObject from "./practice/Task/Object/ColorObject";
import StonePaperGame from "./practice/Task/Object/StonePaperGame";
import StonePaperGameCopy from "./practice/Task/Object/StoneGameCopy";
import RandomNumGame from "./practice/Task/Object/RandomNumGame";
import RandomNumGameCopy from "./practice/Task/Object/RandomGameCopy";
import DescribtionTask from "./practice/Task/Object/DescribtionTask";
import StringObj from "./Components/StringObj";

function App() {
  return (
    <>
      {/* <One/> */}
      {/* <Facebook/> */}
      {/* <NewAccount/>  */}
      {/* <Grid/> */}
      {/* <Variables /> */}
      {/* <Var></Var> */}
      {/* <Logical /> */}
      {/* <LogicalPractice/> */}
      {/* <Task /> */}
      {/* <IfElse />
      <UseState /> */}
      {/* <UseSataePractice /> */}
      {/* <UseStateTask /> */}
      {/* <Bigger /> */}

      {/* < OddEven/> */}
      {/* <FarenToCelcius /> */}
      {/* <Percentage/>
     <Leapyear />
     <SwitchCase /> */}
      {/* <Season /> */}
      {/* <Vowelstask /> */}
      {/* <TicketPrice /> */}
      {/* <ColorChanging />
     <Calculator />
     <Loops /> */}
      {/* <EvenNum/> */}
      {/* <Factorial/> */}
      {/* <Multiplication /> */}
      {/* <MultiMultiplication/> */}
      {/* <SumofOdd/> */}
      {/* <Prime /> */}
      {/* <Fibobonacci /> */}
      {/* <PrimeNo /> */}

      {/* <BmiCalculator/> */}
      {/* <BmiCopy/> */}
      {/* <Whileloop /> */}
      {/* <FactorialFunc /> */}
      {/* <FactorialFunc /> */}
      {/* <FibbonacciFunc/> */}
      {/* <SpreadOp /> */}
      {/* <Events /> */}
      {/* <MultiState/> */}
      {/* <MouseEvents /> */}
      {/* <MouseColorChange/>  */}
      {/* <MouseEnter/> */}
      {/* <MouseUpAndDown/> */}
      {/* <Counter/> */}
      {/* <BasicCalculator/> */}
      {/* <Notes/>
    <MonthlyLoan/> */}
      {/* <SavingCalculate /> */}
      {/* <ParentComp n="hello" /> */}
      {/* <ParentEle/> */}
      {/* <TaskPropsChild/> */}
      {/* <TaskPropsParent/> */}
      {/* <ChildToParent /> */}
      {/* <ChildButton/> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Routers />} />
          <Route path="/BmiCalculator" element={<BmiCalculator />} />
          <Route path="/MonthlyEmiCalculator" element={<MonthlyLoan />} />
          <Route path="/SavingCalculator" element={<SavingCalculate />} />
          <Route path="/Forms" element={<Forms />} />
          <Route path="/FormTask" element={<FormTask />} />
          <Route path="/TipCalculator" element={<TipsCalculator />} />
          <Route path="/ObjectExample" element={<ObjectExample />} />
          <Route path="/NumberObj" element={<NumberObj />} />
          <Route path="/Tofixed" element={<Tofixed />} />
          <Route path="/DateObj" element={<DateObj />} />
          <Route path="/AgeCalculator" element={<AgeCalculator />} />
          <Route path="/TImeNoon" element={<TImeNoon />} />
          <Route path="/MathObj" element={<MathObj />} />
          <Route path="/Dice" element={<Dice />} />
          <Route path="/ColorObject" element={<ColorObject />} />
          <Route path="/StonePaperGame" element={<StonePaperGame />} />
          <Route path="/StonePaperGameCopy" element={<StonePaperGameCopy />} />
          <Route path="/RandomNumGame" element={<RandomNumGame />} />
          <Route path="/RandomNumGameCopy" element={<RandomNumGameCopy/>} />
          <Route path="/DescribtionTask" element={<DescribtionTask/>} />
          <Route path="/StringObj" element={<StringObj/>} />


          
          



        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
