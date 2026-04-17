// 3_3_1 Synced inputs 
/*
  Эти два входа являются независимыми. 
	Сделайте их синхронизированными: редактирование одного входа должно обновить другой вход с тем же текстом, 
	и наоборот.
*/
import { useState } from 'react';

type InputProps = {
	label: string,
	value: string,
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function SyncedInputs() {

	const [text, setText] = useState('')

  return (
    <>
      <Input label="First input" value={text} onChange={(e) => setText(e.target.value)}/>
      <Input label="Second input" value={text} onChange={(e) => setText(e.target.value)}/>
    </>
  );
}

function Input({ label, value, onChange }: InputProps) {
  return (
    <label>
      {label}
      {' '}
      <input
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

