import { useState } from "react";
import Answer from "./components/Answer/Answer";
// import Form from "./components/Forms/Form";
import NewForm from "./components/Forms/NewForm";
import { initialState } from "./helpers/helpers";
import Loader from "./components/Loader/Loader";
const App = () => {
  const [loader, setLoader] = useState(false);
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
  const [dataForm, setDataForm] = useState<any>(() => checInitialState());
  console.log(dataForm);

  return (
    <div className=" flex gap-2.5 justify-center items-center mt-8">
      {/* <Form dataForm={dataForm} setDataForm={setDataForm} /> */}

      {loader ? (
        <Loader />
      ) : (
        <>
          <NewForm
            dataForm={dataForm}
            setDataForm={setDataForm}
            setLoader={setLoader}
          />
          <Answer dataForm={dataForm} />
        </>
      )}
    </div>
  );
};

export default App;
