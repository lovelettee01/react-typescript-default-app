import React from "react";
import { Header, Footer } from "~/layouts";
import FlexLayoutGrid from "./components/FlexLayoutGrid";
function App() {
  return (
    <React.Fragment>
      <Header />
      <FlexLayoutGrid />
      <Footer />
    </React.Fragment>
  );
}
export default App;
