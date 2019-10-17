import React, { Component } from "react";
class Book extends Component {
  render() {
    return (
      <div>
        <div className="carousel slide myCarousel" data-ride="carousel">
          {/* <ol className="carousel-indicators">
            <li
              data-target=".myCarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target=".myCarousel" data-slide-to="1"></li>
            <li data-target=".myCarousel" data-slide-to="2"></li>
          </ol> */}
          <div className="carousel-inner center">
            <div className="item active d-block w-100">
              <img src="../../../img/slideshow1.jpg" alt="Los Angeles" />
            </div>

            <div className="item d-block w-100">
              <img src="../../../img/slideshow2.jpg" alt="Chicago" />
            </div>

            <div className="item d-block w-100">
              <img src="../../../img/slideshow3.jpg" alt="New York" />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
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
              <form>
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
                        value="option1"
                        checked
                      />
                      <label className="form-check-label" for="exampleRadios1">
                        Scooty
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios2"
                        value="option2"
                      />
                      <label className="form-check-label" for="exampleRadios2">
                        Bike
                      </label>
                    </div>

                    <div className="form-group">
                      <label for="exampleFormControlSelect1">Source Dock</label>
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
                              <span className="glyphicon glyphicon-time"></span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-success">Pay</button>
                  </td>
                </tr>
              </form>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Book;
