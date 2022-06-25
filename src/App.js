import "./App.css";
import Banner from "./components/banner/Banner";
import Content from "./components/content/Content";
import Form from "./components/form/Form";

import { useState } from "react";

function App() {
  const [contentActive, setContentActive] = useState(false);
  return (
    <div className='App'>
      <Banner active={contentActive} handleToggle={setContentActive} />
      <main>
        <Content active={contentActive} />
        <Form />
      </main>
    </div>
  );
}

export default App;
