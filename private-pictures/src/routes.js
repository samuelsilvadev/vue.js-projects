import Home from "./components/home/Home";
import Register from "./components/register/Register";

export const routes = [
  { path: "", component: Home, title: "Home" },
  { path: "/register", component: Register, title: "Register" }
];
