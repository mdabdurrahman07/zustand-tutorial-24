import { create } from "zustand"
import { Button } from "./components/ui/button"



// this zustand works like hooks
const useStore = create<{
  // the <> is set for setting up the types of TS
  count: number;
  inc: () => void;
  dec: () => void;
  // after <> the () first bracket is for setting up the initial behavior 
}>((set) => ({
  count: 0,
  inc: () => set((state) => ({count: state.count + 1})),
  dec: () => set((state) => ({count: state.count - 1}))
}))
function App() {


  const store = useStore()
  

  return (
    <>
     <Button onClick={store.inc}>+</Button>
      <Count/>
     <Button onClick={store.dec}>-</Button>
    </>
  )
}

const Count = () => {
  const store = useStore()
  return(
    <>
  {store.count}
  </>
  ) 
};


export default App
