import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { router } from './Router/Route'
import QuickCheckInProvider from './context/QuickCheckInProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuickCheckInProvider>
      <RouterProvider router={router}></RouterProvider>
    </QuickCheckInProvider>
  </StrictMode>,
)
