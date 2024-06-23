import { Home } from './pages/Home'
import { NewTodo } from './pages/NewTodo'

function App() {

  console.log(import.meta.env.VITE_API_URL);
console.log(import.meta.env.VITE_API_KEY);


  return (
  <>
  <Home/>
  </>)
}

export default App
