// import components
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";

// import global styles
import GlobalStyle from "./GlobalStyles";

// react router
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Projects />
        </Route>
        <Route path="/project/:id" exact>
          <ProjectDetails />
        </Route>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
