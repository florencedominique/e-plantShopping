import { useState } from "react";
import ProductList from "./components/ProductList";

/*
  App component controls whether the landing page
  or the product list is displayed.
*/
function App() {
  // State required by the assignment
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div>
      {showProductList ? (
        // Show Product List after clicking Get Started
        <ProductList />
      ) : (
        // Landing Page
        <div className="landing">
          <h1>Paradise Nursery</h1>
          <p>Your one-stop shop for beautiful houseplants</p>

          {/* Get Started button with required onClick logic */}
          <button onClick={() => setShowProductList(true)}>
            Get Started
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
