import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Nav from "./components/Nav";
import Landing from "./pages/Landing";
import Home from "./pages/Home";

export default function App() {
//   gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 
// const container = useRef();

// useGSAP(() => {
// 	// gsap code here...
// 	gsap.to('.button', { x: 360 }); // <-- automatically reverted
// },{ scope: container }); // <-- scope is for selector text (optional)
  return (
    <BrowserRouter>
      <InnerApp />
    </BrowserRouter>
  );
}

function InnerApp() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" && <Nav />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}