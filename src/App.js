import './App.scss';

import { Content } from './components/layout/Content';
import { Header } from './components/layout/Header';
import { ProjectsProvider, SelectedProjectProvider } from './context';

const App = () => {
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <div className="App">
          <Header />
          <Content />
        </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};

export default App;
