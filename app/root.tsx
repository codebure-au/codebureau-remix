import { Links, Meta, Outlet, Scripts, LiveReload } from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";

import Header from "./components/Header";
import Footer from "./components/Footer";

import styles from "./styles/root.css";
import sharedStyles from "./styles/shared.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: sharedStyles },
];

const App = () => {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <div className="site-content">
          <Outlet />
        </div>
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export default App;
