import "./App.css";

import Header from "./components/Header";
import Form from "./components/Form";
import TextContent from "./components/TextContent";

function App() {
  return (
    <div className="App">
      {/*  <header className="App-header">
      </header> */}
      <Header />
      <Form />
      <TextContent />
    </div>
  );
}

export default App;
