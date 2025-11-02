import Answer from "./components/Answer/Answer";
import Form from "./components/Forms/Form";
import { useState } from "react";

import { type initState } from "./types/types";

const App = () => {
  const initialState: initState = {
    name: "",
    email: "",
    surname: "",
  };
  const [dataForm, setDataForm] = useState(initialState);
  return (
    <div className=" flex gap-2.5 justify-center items-center mt-8">
      <Form dataForm={dataForm} setDataForm={setDataForm} />
      <Answer dataForm={dataForm} />
    </div>
  );
};

export default App;
