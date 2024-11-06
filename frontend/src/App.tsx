import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ThemeContext from "./ThemeContext";
import DarkModeButton from "./components/DarkModeButton";
import NavBar from "./components/NavBar";
import AllEntries from "./routes/AllEntries";
import EditEntry from "./routes/EditEntry";
import NewEntry from "./routes/NewEntry";
import { EntryProvider } from "./utilities/globalContext";

export default function App() {
  const [themeClass, setThemeClass] = useState("light");
  return (
    <section>
      <Router>
        <ThemeContext.Provider value={{ themeClass, setThemeClass }}>
          <div className={themeClass}>
            <div className="text-slate-900 bg-slate-100 h-screen  justify-center items-center dark:text-slate-100 dark:bg-slate-900">
              <EntryProvider>
                <NavBar></NavBar>
                <Routes>
                  <Route path="/" element={<AllEntries />}></Route>
                  <Route path="create" element={<NewEntry />}></Route>
                  <Route path="edit/:id" element={<EditEntry />}></Route>
                </Routes>
              </EntryProvider>
            </div>
          </div>
        </ThemeContext.Provider>
      </Router>
    </section>
  );
}
