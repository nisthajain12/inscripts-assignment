import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Toolbar from './components/Toolbar';
import Spreadsheet from './components/Spreadsheet';

const App = () => {
  return (
    

    <div className="h-screen flex flex-col font-sans bg-gray-100">
      <Header />
      <Toolbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <Spreadsheet />
      </div>
    </div>
  );
};

export default App;


