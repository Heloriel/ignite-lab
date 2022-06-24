import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { client } from "./lib/apollo";
import { Router } from "./Router";

function App() {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Layout>
    </ApolloProvider>
  );
}

export default App;
