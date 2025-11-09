import Answer from "./components/Answer/Answer";
import Form from "./components/Forms/Form";
import { useState } from "react";
import { initialState } from "./helpers/helpers";
const App = () => {
  //
  const checInitialState = () => {
    const locStore = localStorage.getItem("initialLocalState");

    if (!locStore || locStore === "undefined" || locStore === "null") {
      return initialState;
    }
    try {
      return JSON.parse(locStore);
    } catch {
      return initialState;
    }
  };
  const [dataForm, setDataForm] = useState(() => checInitialState());

  console.log(dataForm);
  return (
    <div className=" flex gap-2.5 justify-center items-center mt-8">
      <Form dataForm={dataForm} setDataForm={setDataForm} />
      <Answer dataForm={dataForm} />
    </div>
  );
};

export default App;
