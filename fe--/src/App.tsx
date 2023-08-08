import { mainRouter } from "./Routes/mainRoutes"
import { RouterProvider } from "react-router-dom"
const App=()=>{
  return(
    <div>
      <RouterProvider router={mainRouter}/>
    
    </div>
  )
}

export default App