import { sums } from "../lib/wasm_bg.wasm";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <input
        onChange={(e) => {
          const v = Number(e.target.value);
          !isNaN(v) && setValue(sums(v));
        }}
      />
      <div>{value}</div>
    </div>
  );
};

export default App;
