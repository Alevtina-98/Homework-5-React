import { useEffect, useState } from "react";

function RenderValue() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("Останнє значення :", value);
  });

  return (
    <>
      <p>{value}</p>
      <button onClick={() => setValue(value + 2)}>Збільшити</button>
    </>
  );
}

export default RenderValue;
