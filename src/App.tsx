import { Home } from './pages/Home'

function App() {

  console.log(import.meta.env.VITE_API_URL);
console.log(import.meta.env.VITE_API_KEY);


  return (
  <>
  <Home/>
  </>)
}

export default App
