import { useEffect } from "react";
import { type initState } from "../../types/types";

interface FormProps {
  dataForm: initState;
  setDataForm: React.Dispatch<React.SetStateAction<initState>>;
}
const Form: React.FC<FormProps> = ({ dataForm, setDataForm }) => {
  //
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setDataForm((pr) => ({
      ...pr,
      [id]: value,
    }));
    localStorage.setItem("initialState", JSON.stringify(dataForm));
  };

  useEffect(() => {
    const saveLocalElement = localStorage.getItem("initialState");
    if (saveLocalElement && saveLocalElement.length > 0) {
      setDataForm(JSON.parse(saveLocalElement));
    }
  }, []);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(localStorage.getItem("initialState"));
    setDataForm({ email: "", name: "", surname: "" });
    localStorage.removeItem("initialState");
  };

  return (
    <form
      onSubmit={submitForm}
      className="flex flex-col border-r border-black pr-[25px]"
    >
      <label htmlFor="name">Enter name</label>
      <input
        value={dataForm.name}
        onChange={handleChange}
        id="name"
        className="border rounded-xl mb-1.5"
        type="text"
      />

      <label htmlFor="surname">Enter surname</label>
      <input
        value={dataForm.surname}
        onChange={handleChange}
        id="surname"
        className="border rounded-xl mb-1.5"
        type="text"
      />

      <label htmlFor="email">Enter email</label>
      <input
        value={dataForm.email}
        onChange={handleChange}
        id="email"
        className="border rounded-xl mb-1.5"
        type="email"
      />
      <button
        type="submit"
        className="cursor-pointer bg-gray-400 rounded-[20px] py-[4.5px] px-0 w-[100px] m-0 mx-auto hover:bg-[#c6c6c6]"
      >
        submit
      </button>
    </form>
  );
};

export default Form;
