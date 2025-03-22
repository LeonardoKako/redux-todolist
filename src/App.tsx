import Header from "./components/Header";
import Home from "./pages/Home";
import { GlobalStyle } from "./styles";

export type TypeTask = {
  name: string;
  email: string;
  phone: string;
};

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
    </>
  );
}

export default App;
