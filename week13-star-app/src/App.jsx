import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import './App.css';
import StarShips from './pages/StarShips';
import StarShipDetail from './pages/StarShipDetail';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <h1>Star App</h1>
          <Link to="/starships">Star Ships List</Link>
        </div>
      ),
    },
    {
      path: "/starships",
      element: <StarShips />
    },
    {
      path: "/starships/:shipId",
      element: <StarShipDetail />
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
