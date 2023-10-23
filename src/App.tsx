import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './style/theme/Default';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Me from './components/me/Me';
import { MaxWidthContainer } from './style/Container';
import { GlobalStyles } from './style/global';
import Header from './components/header/Header';
import Project from './components/project/Project';
// import { lightTheme } from './style/theme/Light';

// interface ThemeType {
//   gradient: string,
//   bg: string,
//   colorTitle: string,
//   colorText: string,
//   colorTag: string,

//   boxShadow: string,
//   colorHover: string,
// }

const App = () => {
  // const [theme, setTheme] = React.useState<ThemeType>(defaultTheme);

  // setTheme(lightTheme);

  return (  
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>

        <MaxWidthContainer>
          <Header />
          <Routes>
            <Route path="/" element={<Me />} />
            <Route path="projects" element={<Project />} />

          </Routes>
          <GlobalStyles />
        </MaxWidthContainer>

      </BrowserRouter>
    </ThemeProvider >
  );
};

export default App;
