// import React, { useState } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Dashboard from './pages/Dashboard';
// //import Settings from './pages/Settings';
// import './themes/lightTheme.css'; // default theme

// function App() {
//   const [theme, setTheme] = useState('light');

//   const toggleTheme = () => {
//     if (theme === 'light') {
//       import('./themes/darkTheme.css');
//       setTheme('dark');
//     } else {
//       import('./themes/lightTheme.css');
//       setTheme('light');
//     }
//   };

//   return (
//     <div className={`App ${theme}`}>
//       <Router>
//         <nav>
//           <ul>
//             <li><Link to="/dashboard">Dashboard</Link></li>
//             {/* <li><Link to="/settings">Settings</Link></li> */}
//             <li><button onClick={toggleTheme}>Toggle Theme</button></li>
//           </ul>
//         </nav>
//         <Switch>
//           <Route path="/dashboard" component={Dashboard} />
//           {/* <Route path="/settings" component={Settings} /> */}
//         </Switch>
//       </Router>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import './themes/lightTheme.css'; // default theme

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      import('./themes/darkTheme.css');
      setTheme('dark');
    } else {
      import('./themes/lightTheme.css');
      setTheme('light');
    }
  };

  return (
    <div className={`App ${theme}`}>
      <Router>
        <nav>
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><button onClick={toggleTheme}>Toggle Theme</button></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
