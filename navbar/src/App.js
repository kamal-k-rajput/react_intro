import "./App.css";

function App() {
  const data = ["Services", "Product", "About"];
  return (
    <div className="navbar inlineblock">
      <Logo className="logo"></Logo>
      <div className="inlineblock">
        {data.map((el) => {
          return <Link className="link" link={el}></Link>;
        })}
      </div>
      <Button className="button" type={"Contact"}></Button>
    </div>
  );
}
function Logo() {
  return <b>LOGOBAKERY</b>;
}
function Link(er) {
  return <div>{er.link}</div>;
}
function Button(e) {
  return <button>{e.type}</button>;
}
export default App;
