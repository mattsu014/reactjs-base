import { BrowserRouter, Route, Routes } from "react-router-dom";
import { User } from "./pages/User";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Layout } from "./components/Layout";
import { Page404 } from "./pages/Page404";
import GlobalStyle from "./styled";

function App() {
  return (
    <>
      
      <BrowserRouter>
      <GlobalStyle/>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
