import { createRoot } from 'react-dom/client';
import React from "react"; // <- this is a shared module, but used as usual
import App from "./App";


const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App  />);
