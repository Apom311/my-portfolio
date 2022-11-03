import React, { useState } from "react";
import Navigation from "./Navigation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

export default function Header() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
    </div>
  );
}

// class Header extends Component {
//   render() {
//     return (
//       <HashRouter>
//         <div className="rowHeader" id="header">
//           <a href="https://Apom311.github.io/my-portfolio/">
//             <img
//               src="https://img.icons8.com/color/48/000000/astronaut.png"
//               alt="Ryan Kinslow"
//               className="icon"
//             />
//           </a>
//         </div>
//         <div className="content">
//           <Routes>
//             <Route exact path="/" render={() => <Navigate to="/portfolio" />} />
//             <Route path="/portfolio" component={Portfolio} />
//             <Route path="/about" component={About} />
//             <Route path="/contact" component={Contact} />
//             <Route path="/resume" component={Resume} />
//           </Routes>
//         </div>
//       </HashRouter>
//     );
//   }
// }
// export default Header;
