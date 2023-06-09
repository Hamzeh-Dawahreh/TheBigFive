import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import TheBigFive from "./Pages/TheBigFive";
import backgroundImage from "./assets/Images/image.png";

function App() {
  const styles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
  };

  return (
    <div className="App" style={styles}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<TheBigFive />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
