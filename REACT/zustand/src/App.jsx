import { Counter } from "./components/Counter";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="w-full h-screen flex justify-center border m-3">
      <Counter />
      <Posts/>
    </div>
  );
}

export default App;
