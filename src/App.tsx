import { create } from "zustand"
import { Button } from "./components/ui/button"

function App() {

  const useStore = create<{
    count: number;
    inc: () => void;
    dec: () => void;
  }>()

  return (
    <>
     <Button>Click me</Button>
    </>
  )
}

export default App
