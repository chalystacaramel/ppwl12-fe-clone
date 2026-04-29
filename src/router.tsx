import { createBrowserRouter } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import PageExample from "./pages/PageExample";
import { Footer } from "./components/Footer";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RootLayout>
        <Page1 />
      </RootLayout>
    ),
  },
  {
    path: "/page-2",
    element: (
      <RootLayout>
        <Page2 />
      </RootLayout>
    ),
  },
  {
    path: "/page-example",
    element: (
      <RootLayout>
        <PageExample />
      </RootLayout>
    ),
  },
]);
