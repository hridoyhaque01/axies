// import "aos/dist/aos.css";
import React, { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import { ThemeContext } from "./contexts/ThemeContext/ThemeProvider";

function App() {
  const { isDarkMode } = useContext(ThemeContext);
  const Router = router;

  // aos animation

  // useEffect(() => {
  //   AOS.init({
  //     once: true,
  //   });
  //   AOS.refresh();
  // }, []);
  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
