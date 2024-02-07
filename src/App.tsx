import React, { useState } from "react";
import AppLayout from "./AppLayout";
import { navbarTitleContext } from "./Context";

function App() {
  const [title, setTitle] = useState<string>("")

  return (
    <div>
      <navbarTitleContext.Provider value={{ title, setTitle }}>
      <AppLayout />
      </navbarTitleContext.Provider>
    </div>
  );
}

export default App;
