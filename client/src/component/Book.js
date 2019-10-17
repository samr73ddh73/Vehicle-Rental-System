import React, { Component } from "react";
// import slideshow1 from "../img/slideshow1.jpg";
// import slideshow2 from "../img/slideshow2.jpg";
// import slideshow3 from "../img/slideshow3.jpg";

// class Book extends Component {
//   render() {
//     return (
//       <div>
//         <div className="Booking">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-4 m-auto dark-overlay-form">
//                 <h1 className="display-4 text-center">Book Vehicle</h1>

//                 <form>
//                   <div className="form-check form-group">
//                     <div>Vehicle Type :</div>
//                     <br />
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       name="exampleRadios"
//                       id="exampleRadios1"
//                       value="option1"
//                       checked
//                     />
//                     <div className="form-check-label" for="exampleRadios1">
//                       Scooty
//                     </div>
//                   </div>
//                   <div className="form-check form-group">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       name="exampleRadios"
//                       id="exampleRadios2"
//                       value="option2"
//                     />
//                     <label className="form-check-label" for="exampleRadios2">
//                       Bike
//                     </label>
//                   </div>

//                   <div className="form-group">
//                     <label for="exampleFormControlSelect1">Source Dock</label>
//                     <select
//                       className="form-control"
//                       id="exampleFormControlSelect1"
//                     >
//                       <option>SJT</option>
//                       <option>TT</option>
//                       <option>SMV</option>
//                       <option>GDN</option>
//                       <option>Main Gate</option>
//                       <option>Gate 2</option>
//                     </select>
//                   </div>
//                   <label>Time:</label>
//                   <br />
//                   <div className="form-group">
//                     <div className="input-group date">
//                       <input type="text" className="form-control" />
//                       <span className="input-group-addon">
//                         <span className="glyphicon glyphicon-time"></span>
//                       </span>
//                     </div>
//                   </div>

//                   <button className="btn btn-success">Pay</button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// class Book extends Component {
//   render() {
//     return (
//       <div>
//         <div className="container bookVhicle">
//           <h1 className="display-7 mb-6">RENT YOUR VEHICLE</h1>
//           <hr></hr>
//           <hr></hr>
//           <form>
//             <div className="form-check form-group">
//               <label>Vehicle Type-</label>
//               <br />
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="exampleRadios"
//                 id="exampleRadios1"
//                 value="option1"
//                 checked
//               />
//               <label className="form-check-label" for="exampleRadios1">
//                 Scooty
//               </label>
//             </div>
//             <div className="form-check form-group">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="exampleRadios"
//                 id="exampleRadios2"
//                 value="option2"
//               />
//               <label className="form-check-label" for="exampleRadios2">
//                 Bike
//               </label>
//             </div>

//             <div className="form-group">
//               <label for="exampleFormControlSelect1">Source Dock</label>
//               <select className="form-control" id="exampleFormControlSelect1">
//                 <option>SJT</option>
//                 <option>TT</option>
//                 <option>SMV</option>
//                 <option>GDN</option>
//                 <option>Main Gate</option>
//                 <option>Gate 2</option>
//               </select>
//             </div>
//             <label>Time:</label>
//             <br />
//             <div className="container">
//               <div className="row">
//                 <div className="form-group">
//                   <div className="input-group date">
//                     <input type="text" className="form-control" />
//                     <span className="input-group-addon">
//                       <span className="glyphicon glyphicon-time"></span>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <button className="btn btn-success">Pay</button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

class Book extends Component {
  render() {
    return (
      <div>
        <div className="container ">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col" className="thead-dark">
                  RENT YOUR VEHICLE
                </th>
              </tr>
            </thead>
            <tbody>
              <form />
              <tr>
                <td>
                  <div className="form-check">
                    <label>Vehicle Type-</label>
                    <br />
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      defaultValue="option1"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios1"
                    >
                      Scooty
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios2"
                      defaultValue="option2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios2"
                    >
                      Bike
                    </label>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">
                      Source Dock
                    </label>
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                    >
                      <option>SJT</option>
                      <option>TT</option>
                      <option>SMV</option>
                      <option>GDN</option>
                      <option>Main Gate</option>
                      <option>Gate 2</option>
                    </select>
                  </div>
                  <label>Time:</label>
                  <br />
                  <div className="container">
                    <div className="row">
                      <div className="form-group">
                        <div className="input-group date">
                          <input type="text" className="form-control" />
                          <span className="input-group-addon">
                            <span className="glyphicon glyphicon-time" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-success">Pay</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Book;
