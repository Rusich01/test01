import { type initState } from "../../types/types";
interface FormProps {
  dataForm: initState;
}

const Answer: React.FC<FormProps> = ({ dataForm }) => {
  return (
    <div>
      <p>Name:{dataForm.name}</p>
      <p>Surname: {dataForm.surname}</p>
      <p>Email: {dataForm.email}</p>
    </div>
  );
};

export default Answer;
