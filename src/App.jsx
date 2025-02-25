import { lazy } from 'react'
import { Suspense } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
const Home = lazy(() => import('./pages/Home'));
function App() {
  

  return (
    <BrowserRouter>
      <Suspense fallback= {<h1>Loading</h1>}>
      <Routes>
        <Route path='/' index element={<Home/>}/>
      </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
