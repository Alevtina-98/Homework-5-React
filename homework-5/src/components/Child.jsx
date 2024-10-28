function Child({ user }) {
  return (
    <div>
      <h2>Дочірній компонент</h2>
      <p>{user.name}</p>
      <p>{user.surname}</p>
      <p>{user.email}</p>
    </div>
  );
}
export default Child;
