import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router";
import { ThemeProvider } from "styled-components";
import { ModalProvider } from "./contexts/modal.context";
import router from "./router/Router";
import GlobalStyle from "./styles/GlobalStyle";
import { theme } from "./styles/theme";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <RouterProvider router={router} />
          <ReactQueryDevtools />
        </ThemeProvider>
      </ModalProvider>
    </QueryClientProvider>
  );
}

export default App;
