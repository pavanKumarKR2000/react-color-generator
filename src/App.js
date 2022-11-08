import "./App.css";
import Values from "values.js";
import { useState } from "react";
import SingleColor from "./SingleColor";

const App = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <section className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <h1>COLOR GENERATOR</h1>
          </div>
          <div className="form-control">
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder="#f15025"
            />
            <button className="btn" type="submit">
              generate
            </button>
          </div>
        </form>
      </section>
      <section className="color-container">
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} />;
        })}
      </section>
    </>
  );
};

export default App;
