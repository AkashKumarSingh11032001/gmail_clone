import "./App.css";
import Main from "./pages/Main";
import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Main />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
