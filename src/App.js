import React, { useState } from 'react';
import './App.scss';
import { Header } from './components/Header'
import { BrowserRouter as Router, Route  } from "react-router-dom";
import Home from './components/Home';
import GridPage from './components/GridPage';
import ChartPage from './components/ChartPage';
import FormsPage from './components/FormsPage';
import Footer from './components/Footer';

const App = () => {
  const [theme, setTheme] = useState("https://unpkg.com/@progress/kendo-theme-default@latest/dist/all.css");

  const changeTheme = (theme) => {
    setTheme(theme);
  }

  return (
    <Router>
        <link rel="stylesheet" href={theme}></link>
        <div className="content">
          <Header projectName={'Project Name'} />
          <Route exact path="/" component={Home} key={1}/>
          <Route exact path="/grid" render={(props) => <GridPage {...props} changeTheme={changeTheme} theme={theme}/>} key={2}/>
          <Route exact path="/chart" render={(props) => <ChartPage {...props} changeTheme={changeTheme} theme={theme}/>}  key={3}/>
          <Route exact path="/forms" render={(props) => <FormsPage {...props} changeTheme={changeTheme} theme={theme}/>} key={4}/>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </Router>
  );
}

export default App;
