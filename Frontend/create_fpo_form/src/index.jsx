import React from "react";
import ReactDOMClient from "react-dom/client";
import { CreateJob } from "./screens/CreateJob";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<CreateJob />);
