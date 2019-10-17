import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBInput
} from "mdbreact";

const Profile = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="4"></MDBCol>
        <MDBCol md="6">
          <MDBCard
            className="card-image"
            style={{
              backgroundImage:
                "url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)",
              width: "28rem"
            }}
          >
            <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
              <div className="text-center">
                <h3 className="white-text mb-5 mt-4 font-weight-bold">
                  <strong>Fill Your</strong>
                  <a href="#!" className="green-text font-weight-bold">
                    <strong> Profile</strong>
                  </a>
                </h3>
              </div>
              <MDBInput
                label="Your Branch"
                group
                type="text"
                validate
                labelClass="white-text"
              />
              <MDBInput
                label="Your Semester"
                group
                type="text"
                validate
                labelClass="white-text"
              />
              <MDBInput
                label="About You.."
                group
                type="text"
                validate
                labelClass="white-text"
              />

              <MDBRow className="d-flex align-items-center mb-4">
                <div className="text-center mb-3 col-md-12">
                  <MDBBtn
                    color="success"
                    rounded
                    type="button"
                    className="btn-block z-depth-1"
                  >
                    Create Profile!!
                  </MDBBtn>
                </div>
              </MDBRow>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Profile;
