import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import router from 'src/router/router'

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  )
}

export default App
