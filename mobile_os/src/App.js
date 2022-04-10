import "./App.css";

function App() {
  const data = [
    {
      title: "Mobile Operating System",
      os: ["Android", "Blackberry", "iPhone", "Windows Phone"],
    },
    {
      title: "Mobile Manufacturers",
      os: ["Samsung", "HTC", "Micrimax", "Apple"],
    },
  ];
  return (
    <div className="App">
      {data.map((el) => {
        return <Operate title={el.title} os={el.os} />;
      })}
    </div>
  );
}

function Operate(el) {
  return (
    <div className="operate">
      <h1> {el.title} </h1>
      <div className="lists">
        {el.os.map((e) => {
          return <li>{e}</li>;
        })}
      </div>
    </div>
  );
}
export default App;
