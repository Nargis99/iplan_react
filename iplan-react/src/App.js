import React, { useState } from "react";
import "./App.css";
import axios from "axios";


const ProjectsPendingEnrollment = () => {
  const [tableData, setTableData] = useState([]); // State for backend data
  const [isDataLoaded, setIsDataLoaded] = useState(false); // Control dynamic rendering

  // Function to handle fetching data from FastAPI backend
  const handleReviewClick = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/get-top-10");
      console.log("Fetched data successfully:", response.data);
      setTableData(response.data); // Update state with fetched data
      setIsDataLoaded(true); // Enable table rendering with fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  return (
    <div className="card">
      <h2>Projects Pending Enrollment</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Project No.</th>
              <th>Project Name</th>
              <th>Client Name</th>
              <th>Funding</th>
              <th>Days</th>
              <th>Schedule</th>
            </tr>
          </thead>
          <tbody>
            {/* Render Default Row Values */}
            {!isDataLoaded && (
              <tr>
                <td>302546</td>
                <td>PAJV ESRSC MACINVERT</td>
                <td>Plexus-Ayuda Joint Venture, LLC</td>
                <td>$42,912</td>
                <td>35</td>
                <td>Pending Review</td>
              </tr>
            )}
            {/* Dynamically Render New Data Upon Review */}
            {isDataLoaded && tableData.length > 0 ? (
              tableData.map((item) => (
                <tr key={item.project_no}>
                  <td>{item.project_no}</td>
                  <td>{item.project_name}</td>
                  <td>{item.client_name}</td>
                  <td>{item.funding}</td>
                  <td>{item.days}</td>
                  <td>{item.schedule}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">Click the Review button to load data.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="actions">
        <button className="review-btn" onClick={handleReviewClick}>
          Review
        </button>
      </div>
    </div>
  );
  
  

  // return (
  //   <div className="card">
  //     <h2>Projects Pending Enrollment</h2>
  //     <table>
  //       <thead>
  //         <tr>
  //           <th>Project No.</th>
  //           <th>Project Name</th>
  //           <th>Client Name</th>
  //           <th>Funding</th>
  //           <th>Days</th>
  //           <th>Schedule</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {isDataLoaded && tableData.length > 0 ? (
  //           tableData.map((item) => (
  //             <tr key={item.project_no}>
  //               <td>{item.project_no}</td>
  //               <td>{item.project_name}</td>
  //               <td>{item.client_name}</td>
  //               <td>{item.funding}</td>
  //               <td>{item.days}</td>
  //               <td>{item.schedule}</td>
  //             </tr>
  //           ))
  //         ) : (
  //           <tr>
  //             <td colSpan="6">Click the Review button to load data.</td>
  //           </tr>
  //         )}
  //       </tbody>
  //     </table>
  //     <div className="actions">
  //       <button className="review-btn" onClick={handleReviewClick}>
  //         Review
  //       </button>
  //     </div>
  //   </div>
  // );
  
  // return (
  //   <div className="card">
  //     <h2>Projects Pending Enrollment</h2>
  //     <table>
  //       <thead>
  //         <tr>
  //           <th>Project No.</th>
  //           <th>Project Name</th>
  //           <th>Client Name</th>
  //           <th>Funding</th>
  //           <th>Days</th>
  //           <th>Schedule</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {isDataLoaded && tableData.length > 0 ? (
  //           tableData.map((item) => (
  //             <tr key={item.project_no}>
  //               <td>{item.project_no}</td>
  //               <td>{item.project_name}</td>
  //               <td>{item.client_name}</td>
  //               <td>{item.funding}</td>
  //               <td>{item.days}</td>
  //               <td>{item.schedule}</td>
  //             </tr>
  //           ))
  //         ) : (
  //           <tr>
  //             <td>302546</td>
  //             <td>PAJV ESRSC MACINVERT</td>
  //             <td>Plexus-Ayuda Joint Venture, LLC</td>
  //             <td>$42,912</td>
  //             <td>35</td>
  //             <td>
  //               <button className="review-btn" onClick={handleReviewClick}>
  //                 Review
  //               </button>
  //             </td>
  //           </tr>
  //         )}
  //       </tbody>
  //     </table>

  //     {/* Actions Section */}
  //     <div className="actions">
  //       <button className="dropdown-btn">Pursuit Project</button>
  //     </div>
  //   </div>
  // );
};


// const ProjectsPendingEnrollment = () => {
//   const [tableData, setTableData] = useState([]);
//   const [isDataLoaded, setIsDataLoaded] = useState(false);

//   const handleReviewClick = async () => {
//     try {
//       const response = await axios.get("http://127.0.0.1:8000/get-top-10");
//       console.log("Data fetched successfully:", response.data);
//       setTableData(response.data);
//       setIsDataLoaded(true);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   return (
//     <div className="card">
//       <h2>Projects Pending Enrollment</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Project No.</th>
//             <th>Project Name</th>
//             <th>Client Name</th>
//             <th>Funding</th>
//             <th>Days</th>
//             <th>Schedule</th>
//           </tr>
//         </thead>
//         <tbody>
//           {isDataLoaded && tableData.length > 0 ? (
//             tableData.map((item) => (
//               <tr key={item.project_no}>
//                 <td>{item.project_no}</td>
//                 <td>{item.project_name}</td>
//                 <td>{item.client_name}</td>
//                 <td>{item.funding}</td>
//                 <td>{item.days}</td>
//                 <td>{item.schedule}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="6">Click the Review button to load data.</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//       <div className="actions">
//         <button className="review-btn" onClick={handleReviewClick}>
//           Review
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProjectsPendingEnrollment;

// const ProjectsPendingEnrollment = () => {

//   // const handleReviewClick = () => {
//   //   console.log("Review button clicked for project 302546!");
//   //   alert("Review button clicked for project 302546!");
//   // };

//   const [tableData, setTableData] = useState([]);

//   // Function to handle the click event
//   const handleReviewClick = async () => {
//     try {
//       const response = await axios.get("http://127.0.0.1:5000/get-top-10");
//       console.log("Data fetched successfully:", response.data);
//       setTableData(response.data); // Update state with fetched data
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   return (
//     <div className="card">
//       <h2>Projects Pending Enrollment</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Project No.</th>
//             <th>Project Name</th>
//             <th>Client Name</th>
//             <th>Funding</th>
//             <th>Days</th>
//             <th>Schedule</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>302546</td>
//             <td>PAJV ESRSC MACINVERT</td>
//             <td>Plexus-Ayuda Joint Venture, LLC</td>
//             <td>$42,912</td>
//             <td>35</td>
//             <td>
//               <button className="review-btn" onClick={handleReviewClick}>Review</button>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//       {/*Actions */}
//       {/* <button className="dropdown-btn">New PM</button> */}
//       {/* <button className="dropdown-btn right-align-btn">Pursuit Project</button> */}
//       <div className="actions">
//         <button>Pursuit Project</button>
//       </div>
//     </div>
//   );
// };

const ProjectResourceAvailability = () => {
  return (
    <div className="card">
      <h2>Project Resource Availability for Next 3 Months</h2>
      <table className="projects-table">
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Resource Allocation Status Bar</th>
            <th>Overallocated Hours</th>
            <th>Resources</th>
          </tr>
        </thead>
        <tbody>

          {/* Project 1 Row */}
          <tr>
            <td>McCormick Road Highwall</td>
            <td>
              <div className="status-bar">
                <div className="green-bar" style={{ width: "58%" }}>
                  <span className="percentage-text">58%</span>
                </div>
                <div className="red-bar" style={{ width: "42%" }}>
                  <span className="percentage-text">42%</span>
                </div>
              </div>
            </td>
            <td>151.8</td>
            <td>
              <button className="view-btn">View</button>
            </td>
          </tr>
          
          {/* Project 2 Row */}
          <tr>
            <td>Hartzell Covington OVAP</td>
            <td>
              <div className="status-bar">
                <div className="green-bar" style={{ width: "54%" }}>
                  <span className="percentage-text">54%</span>
                </div>
                <div className="red-bar" style={{ width: "46%" }}>
                  <span className="percentage-text">46%</span>
                </div>
              </div>
            </td>
            <td>55.7</td>
            <td>
              <button className="view-btn">View</button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Actions */}
      {/* <div className="actions">
        <button>Team Finder</button>
        <button>Resource Allocation</button>
      </div> */}
    </div>
  );
};



const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="app">
      <header className="header">
      <div className="hamburger-icon" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <img src="https://raw.githubusercontent.com/Nargis99/Azure_iplan/main/CDMSmith_logo_print_RGB_BlueGr%20(1).jpg" 
        alt="CDM Smith Logo" className="logo" />
        <h1 className="iplan image-text-container">iPlan</h1>
        <div className="username">nasreenn</div> {/* Your username */}
      </header>

       {/* Side menu */}
       <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
        <a href="#">Home</a>
        <a href="#">Home</a>
        <a href="#">iPlan</a>
        <a href="#">Team Finder</a>
        <a href="#">Resource Overallocation</a>
      </div>

      <div className="content">
        <ProjectsPendingEnrollment />
        <ProjectResourceAvailability />
      </div>
    </div>
  );
};


export default App;


// import React, { useState } from "react";
// import axios from "axios";


