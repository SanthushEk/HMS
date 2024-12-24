import { useState } from 'react';
import SideBar from './Components/SideBar/SideBar';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // State to manage sidebar visibility

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <SideBar isOpen={sidebarOpen} />

      {/* Main Content */}
      <div className={`main flex-1 ${sidebarOpen ? 'ml-64' : ''} transition-all duration-300`}>
        {/* Navbar with hamburger toggle */}
        <NavBar toggleSidebar={toggleSidebar} />
        
        {/* Home Component */}
        <Home />
      </div>
    </div>
  );
}

export default App;
