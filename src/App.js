import "./App.css";
import Banner from "./components/banner/Banner";
import Content from "./components/content/Content";
import Form from "./components/form/Form";

import { useState, useRef } from "react";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

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
