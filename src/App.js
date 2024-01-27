// import React, { useState } from 'react';
// import { Calendar } from './components/Calendar';
// import { Register } from './components/Register';
// function App() {
//   const [likes, setLikes] = useState(0)
//   const increaseLike = () => {
//     setLikes(likes+1);
//   }
//   return (
//     <div className="App">
//       <div>{ }</div>
//       <button onClick={increaseLike}>Like! 👍</button>
//     </div>
//   );
// }

// export default App;



//////////////////////EX1//////////////////\
// import React from "react";
// import { Hudini } from "./components/Hudini";
// const App = () => {
//   return (
//     <div>
//       <h1>My App</h1>
//       <Hudini />
//     </div>
//   );
// };

// export default App;


/////////////////EX2//////////////////
// import React, { useState } from 'react';
// import { Home } from './components/Home';
// import { Landing } from './components/Landing';
// const App = () => {
//   const [appState, setAppState] = useState({
//     user: "Robyn",
//     store: [
//       { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
//       { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
//       { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
//     ],
//     shouldDiscount: false,
//     currentPage: "Landing"
//   });

//   return (
//     <div>
//       {appState.currentPage === "Landing" && <Landing user={appState.user} hottestItem={appState.store.find(item => item.hottest)} />}
//       {appState.currentPage === "Home" && <Home store={appState.store} />}
//     </div>
//   );
// };

// export default App;


///////////////EX3////////////////////////
// import React, { useState } from 'react';
// import { Home } from './components/Home';
// import { Landing } from './components/Landing';
// const App = () => {
//   const [appState, setAppState] = useState({
//     user: "Robyn",
//     store: [
//       { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
//       { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
//       { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
//     ],
//     shouldDiscount: false,
//     currentPage: "Landing"
//   });

//   const handlePageChange = (page) => {
//     setAppState({ ...appState, currentPage: page });
//   };

//   return (
//     <div>
//       {appState.currentPage === "Landing" && <Landing user={appState.user} hottestItem={appState.store.find(item => item.hottest)} />}
//       {appState.currentPage === "Home" && <Home store={appState.store} />}
      
//       <div>
//         <button onClick={() => handlePageChange("Landing")}>Go to Landing</button>
//         <button onClick={() => handlePageChange("Home")}>Go to Home</button>
//       </div>
//     </div>
//   );
// };

// export default App;


//////////////////////////EX4////////////////////////////
import React, { useState } from 'react';

import { Home } from './components/Home';
import { Landing } from './components/Landing';
const App = () => {
  const [appState, setAppState] = useState({
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
    ],
    shouldDiscount: false,
    currentPage: "Landing"
  });

  const handlePageChange = (page) => {
    setAppState({ ...appState, currentPage: page });
  };

  return (
    <div>
      {appState.currentPage === "Landing" && <Landing user={appState.user} hottestItem={appState.store.find(item => item.hottest)} />}
      {appState.currentPage === "Home" && <Home store={appState.store} shouldDiscount={appState.shouldDiscount} />}
      
      <div>
        <button onClick={() => handlePageChange("Landing")}>Go to Landing</button>
        <button onClick={() => handlePageChange("Home")}>Go to Home</button>
      </div>
    </div>
  );
};

export default App;
