import { RouterProvider } from "react-router";
import { ThemeProvider } from "styled-components";
import router from "./router/Router";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
