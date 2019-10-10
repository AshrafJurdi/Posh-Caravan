import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalFooter
} from "mdbreact";
import EditFormUser from "../AdminUser/EditForm/editform";
class ViewUsers extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      modal: false,
      modalEdit: false
    };
  }
  async componentDidMount() {
    try {
      const responseUsers = await fetch(`${process.env.REACT_APP_APP_URL}/users`);
      const users = await responseUsers.json();
      this.setState({ users });
      console.log("users==>", users);
      console.log(this.state);
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * deletes a user from the users table
   *
   */
  deleteUser = async User_ID => {
    console.log("here", User_ID);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_APP_URL}/users/delete/${User_ID} `
      );
      const answer = await response.json();
      if (answer.success) {
        this.setState({ isLoading: false, error_message: "" });
      } else {
        console.log();
        this.setState({ error_message: answer.message, isLoading: false });
      }
    } catch (err) {
      console.log("error", err);
      this.setState({ error_message: err.message, isLoading: false });
    }
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  toggleEdit = () => {
    this.setState({
      modalEdit: !this.state.modalEdit
    });
  };

  render() {
    return (
      <>
        <table className="table">
          <thead className="pink white-text">
            <tr>
              <th scope="col">User ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Username</th>
              <th scope="col">Role</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Password</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(user => {
              return (
                <tr>
                  <th scope="row">{user.User_ID}</th>
                  <td>{user.FirstName}</td>
                  <td>{user.LastName}</td>
                  <td>{user.Email}</td>
                  <td>{user.UserName}</td>
                  <td>{user.Role}</td>
                  <td>{user.PhoneNumber}</td>
                  <td>{user.Password}</td>
                  <td>
                    <i
                      className="far fa-trash-alt"
                      onClick={this.toggle}
                      style={{ marginRight: "10%" }}
                    ></i>
                  </td>
                  <td>
                    <i className="far fa-edit" onClick={this.toggleEdit}></i>
                  </td>
                  <MDBContainer>
                    <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                      <MDBModalBody>
                        Are you sure you want to delete this User?
                      </MDBModalBody>
                      <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={this.toggle}>
                          Cancel
                        </MDBBtn>
                        <MDBBtn
                          onClick={() => {
                            console.log("user===>", user.User_ID);
                            this.deleteUser(user.User_ID);
                            this.toggle();
                          }}
                        >
                          Delete
                        </MDBBtn>
                      </MDBModalFooter>
                    </MDBModal>
                  </MDBContainer>
                  <MDBContainer>
                    <MDBModal
                      isOpen={this.state.modalEdit}
                      toggle={this.toggleEdit}
                    >
                      <MDBModalBody>
                        <EditFormUser user={user} />
                      </MDBModalBody>
                      <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={this.toggleEdit}>
                          Cancel
                        </MDBBtn>
                      </MDBModalFooter>
                    </MDBModal>
                  </MDBContainer>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default ViewUsers;
