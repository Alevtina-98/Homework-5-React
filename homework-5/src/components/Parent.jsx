import { useState } from "react";

import Child from "./Child";

function Parent() {
  const [user, setUser] = useState({
    name: "Андрій",
    surname: "Шевченко",
    email: "shewa7@gmail.com",
  });

  const changeUser = () => {
    setUser({
      name: "Іван",
      surname: "Степанюк",
      email: "ivan2@gmail.com",
    });
  };

  return (
    <div>
      <h1>Батьківський компонент</h1>
      <Child user={user} />
      <button onClick={changeUser}>Змінити користувача</button>
    </div>
  );
}

export default Parent;
