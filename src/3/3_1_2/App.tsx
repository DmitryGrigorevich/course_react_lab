// 3_1_2 Profile editor
/*
    В проекте приведена форма, реализованная на чистом JavaScript.

    Эта форма переключается между двумя режимами: в режиме редактирования вы видите вводимые данные, 
		а в режиме просмотра - только результат. 
		Метка кнопки меняется между "Редактировать" и "Сохранить" в зависимости от того, 
		в каком режиме вы находитесь. 
		Когда вы изменяете вводимые данные, приветственное сообщение внизу обновляется в режиме реального времени.

    Ваша задача - реализовать это на React. Для вашего удобства разметка уже была преобразована в JSX, 
		но вам нужно будет сделать так, чтобы она показывала и скрывала входы, как это делает оригинал.

    Убедитесь, что она также обновляет текст внизу!
*/

import { useState } from "react";

export default function EditProfile() {
  const [name, setName] = useState("Jane");
  const [surname, setSurname] = useState("Jacobs");
  const [edit, setEdit] = useState(false);

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {!edit ? (
        <label>
          First name: <b>{name}</b>
        </label>
      ) : (
        <label>
          First name:
          {edit && (
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          )}
        </label>
      )}

      {!edit ? (
        <label>
          First surname: <b>{surname}</b>
        </label>
      ) : (
        <label>
          First surname:
          {edit && (
            <input
              value={surname}
              onChange={(event) => setSurname(event.target.value)}
            />
          )}
        </label>
      )}

      {!edit ? (
        <button type="submit" onClick={() => setEdit(true)}>Edit Profile</button>
      ) : (
        <button type="submit" onClick={() => setEdit(false)}>Save Profile</button>
      )}
      <p>
        <i>
          Hello, {name} {surname}!
        </i>
      </p>
    </form>
  );
}
