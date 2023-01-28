import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Profile } from "./pages/Profile";
import { Navbar } from "./pages/Navbar"
import { useState, createContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("Karthik Vajja");
  const client = new QueryClient({defaultOptions:{
    queries: {
      refetchOnWindowFocus: false
    }
  }});
  return (
    <div className="App">
      <AppContext.Provider value={{username, setUsername}}>
        <QueryClientProvider client={client}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </AppContext.Provider>
    </div>
  );
}



export default App;
