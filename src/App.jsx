import { useState } from "react";
import Welcome from "./pages/Welcome";
import ThemeSelect from "./pages/ThemeSelect";

function App() {
  // track which screen is showing, default  "welcome"
  const [screen, setScreen] = useState("welcome");

  // track which theme user picked, default "light"
  const [theme, setTheme] = useState("");

  return (
    <div className={`app theme-${theme}`}>
      {/* if screen is  welcome, show welcome page */}
      {screen ===  "welcome" && (
        <Welcome onContinue = {() => setScreen("theme")} /> // continue  to theme page
      )}
      {/* if screen is theme, show theme page */}
      {screen === "theme" && (
        <ThemeSelect
            selectedTheme = {theme} // current theme selected
            onSelectTheme = {setTheme} // update theme
            onContinue = {() => setScreen("home")} /> // continue to home page
      )}
      {/* if screen is home, show home page */}
      {screen === "home" && (
        <main className="page">
          <h1>Grocery List: </h1>
          <p>Your grocery list goes here!</p>
        </main>
      )}
    </div>
  );
}

export default App;