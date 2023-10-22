import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './style/theme/Default';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Me from './components/me/Me';
import { MaxWidthContainer } from './style/Container';
import { GlobalStyles } from './style/global';
import Header from './components/header/Header';
import Project from './components/project/Project';
// import { lightTheme } from './style/theme/Light';

const App = () => {
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
