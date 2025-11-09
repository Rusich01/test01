import { useEffect } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { type initState } from "../../types/types";

interface FormProps {
  dataForm: initState;
  setDataForm: React.Dispatch<React.SetStateAction<initState>>;
}
const Form: React.FC<FormProps> = ({ dataForm, setDataForm }) => {
  const initialLocalState = "initialLocalState";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setDataForm((prev: any) => {
      const updated = { ...prev, [id]: value };
      localStorage.setItem(initialLocalState, JSON.stringify(updated));
      return updated;
    });
  };

  const checkLocalStore = () => {
    if (localStorage.length >= 1) {
      const timeoutId = setTimeout(() => {
        localStorage.setItem(initialLocalState, JSON.stringify(dataForm));
      }, 200);

      return () => clearTimeout(timeoutId);
    }
  };

  useEffect(() => {
    const saveLocalElement = localStorage.getItem(initialLocalState);
    //
    if (saveLocalElement && saveLocalElement.length > 0) {
      setDataForm(JSON.parse(saveLocalElement));
    }
  }, []);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(localStorage.getItem(initialLocalState));
    setDataForm({ email: "", name: "", surname: "" });
    localStorage.removeItem(initialLocalState);
  };

  useEffect(() => {
    checkLocalStore();
  }, [dataForm]);

  return (
    <form
      onSubmit={submitForm}
      className="flex flex-col border-r border-black pr-[25px]"
    >
      <Input
        label="Enter name"
        value={dataForm?.name ?? ""}
        onChange={handleChange}
        id="name"
        className="border rounded-xl mb-1.5"
        type="text"
      />

      <Input
        label="Enter surname"
        value={dataForm?.surname ?? ""}
        onChange={handleChange}
        id="surname"
        className="border rounded-xl mb-1.5"
        type="text"
      />

      <Input
        label="Enter email"
        value={dataForm?.email ?? ""}
        onChange={handleChange}
        id="email"
        className="border rounded-xl mb-1.5"
        type="email"
      />

      <Button
        type="submit"
        text="submit"
        className="cursor-pointer bg-gray-400 rounded-[20px] py-[4.5px] px-0 w-[100px] m-0 mx-auto hover:bg-[#c6c6c6]"
      />
    </form>
  );
};

export default Form;
