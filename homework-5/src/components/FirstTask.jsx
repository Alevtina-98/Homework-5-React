import { useRef, useState } from "react";

function UsersForm() {
  const nameRef = useRef(null);
  const surnameRef = useRef(null);
  const emailRef = useRef(null);
  const [users, setUsers] = useState([]);

  const handleSubmit = () => {
    const newUser = {
      name: nameRef.current.value,
      surname: surnameRef.current.value,
      email: emailRef.current.value,
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);

    nameRef.current.value = "";
    surnameRef.current.value = "";
    emailRef.current.value = "";
  };

  return (
    <div>
      <h3>Форма користувача</h3>
      <input type="text" placeholder="I'мя" ref={nameRef} />
      <input type="text" placeholder="Прізвище" ref={surnameRef} />
      <input type="email" placeholder="Електронна адреса" ref={emailRef} />
      <button onClick={handleSubmit}>Додати користувача</button>

      <h3>Cписок користувачів:</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name}
            {user.surname}-{user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersForm;
