import { useContext } from "react";
import ThemeContext from "../ThemeContext";

const DarkModeButton = () => {
  const { themeClass, setThemeClass } = useContext(ThemeContext);
  const isDarkMode = themeClass === "dark";

  const onHandleClick = () => {
    setThemeClass(isDarkMode ? "light" : "dark");
  };

  return (
    // <div className="relative">
    <button className="p-4  rounded-md font-medium text-white capitalize" onClick={() => onHandleClick()}>
      {isDarkMode ? "light" : "dark"} Mode
    </button>
    //</div>
  );
};


export default DarkModeButton;