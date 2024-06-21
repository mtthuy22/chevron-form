import { useState } from "react";
import CheckboxForm from "./CheckboxForm";
import Chevrons from "./Chevrons";

function App() {
  const [checkboxes, setCheckboxes] = useState([{ id: 1, checked: false }]);

  const handleChange = (id) => {
    setCheckboxes((checkboxes) => {
      checkboxes = checkboxes.map((checkbox) => {
        if (checkbox.id === id) {
          return { ...checkbox, checked: !checkbox.checked };
        } else {
          return checkbox;
        }
      });
      if (checkboxes[checkboxes.length - 1].checked) {
        return [...checkboxes, { id: checkboxes.length + 1, checked: false }];
      } else {
        return checkboxes;
      }
    });
  };

  const chevrons = checkboxes.filter((checkbox) => checkbox.checked);

  return (
    <>
      <h1 className="text-center">Chevron chart form</h1>
      <div className="mb-4 d-flex flex-column justify-content-center align-items-center pb-4">
        <CheckboxForm checkboxes={checkboxes} handleChange={handleChange} />
      </div>
      <div className="d-flex flex-sm-row flex-column">
        <Chevrons chevrons={chevrons} />
      </div>
    </>
  );
}

export default App;
