import { useRef } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { type initState } from "../../types/types";

interface FormProps {
  dataForm: initState;
  setDataForm: React.Dispatch<React.SetStateAction<initState>>;
  setLoader: any;
}
const NewForm: React.FC<FormProps> = ({
  dataForm,
  setDataForm,
  setLoader,
}: FormProps) => {
  const initialLocalState = "initialLocalState";

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleChangeForm = () => {
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());
    localStorage.setItem(initialLocalState, JSON.stringify(data));

    const resault = localStorage.getItem(initialLocalState);
    if (!resault) return;
    setDataForm(JSON.parse(resault));
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoader(true);

    setTimeout(() => {
      setLoader(false);
      setDataForm({ name: "", email: "", surname: "" });
    }, 200);

    setTimeout(() => {
      alert(localStorage.getItem(initialLocalState));
      localStorage.removeItem(initialLocalState);
    }, 300);
  };

  return (
    <form
      onSubmit={submitForm}
      ref={formRef}
      onChange={handleChangeForm}
      className="flex flex-col border-r border-black pr-[25px]"
    >
      <Input
        label="Enter name"
        name="name"
        id="name"
        className="border rounded-xl mb-1.5"
        type="text"
        value={dataForm?.name}
        onChange={handleChangeForm}
      />

      <Input
        label="Enter surname"
        id="surname"
        name="surname"
        className="border rounded-xl mb-1.5"
        type="text"
        value={dataForm?.surname}
        onChange={handleChangeForm}
      />

      <Input
        label="Enter email"
        id="email"
        name="email"
        className="border rounded-xl mb-1.5"
        type="email"
        value={dataForm?.email}
        onChange={handleChangeForm}
      />

      <Button
        type="submit"
        text="submit"
        className="cursor-pointer bg-gray-400 rounded-[20px] py-[4.5px] px-0 w-[100px] m-0 mx-auto hover:bg-[#c6c6c6]"
      />
    </form>
  );
};

export default NewForm;
