// 3_4_2 Swap two form fields
/*
  Эта форма позволяет вводить имя и фамилию. 
	В ней также есть флажок, контролирующий, какое поле будет первым. 
	Если установить флажок, поле "Фамилия" появится перед полем "Имя".

  Это почти работает, но есть ошибка. Если вы заполните поле "Имя" и установите флажок, 
	текст останется в первом поле (теперь это "Фамилия"). 
	Исправьте это так, чтобы при изменении порядка ввода текст также перемещался.
*/

import { useState } from "react";

type fieldProps = {
  label: string;
  value: string;
  onChange: (e: any) => void;
};

export default function App() {
  const [reverse, setReverse] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={(e) => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );

  return (
    <>
      {reverse ? (
        <>
          <Field
            label="Last name"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <Field
            label="First name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </>
      ) : (
        <>
          <Field
            label="First name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Field
            label="Last name"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </>
      )}
      {checkbox}
    </>
  );
}

function Field({ label, value, onChange }: fieldProps) {

  return (
    <label>
      {label}:{" "}
      <input
        type="text"
        value={value}
        placeholder={label}
        onChange={onChange}
      />
    </label>
  );
}
