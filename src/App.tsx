import { useStore } from "./store/store";

const App = () => {

  const store = useStore()
  return (
    <div>
      {JSON.stringify(store)}
    </div>
  );
};

export default App;