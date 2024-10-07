import React, { useState } from "react";
import "./Form.css";
import Comments from "./Comments";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form({ display }) {
  let [userData, setUserData] = useState([]);
  let [commentData, setCommentData] = useState({
    uname: "",
    uaddress: "",
    ucomment: "",
    index: "",
  });
  let getData = (event) => {
    let inputName = event.target.name;
    let inputValue = event.target.value;
    setCommentData({ ...commentData, [inputName]: inputValue });
  };
  let isAlready = userData.some((value) => value.uname === commentData.uname);

  let saveData = (event) => {
    event.preventDefault();

    if (commentData.index === "") {
      if (
        commentData.uname !== "" &&
        commentData.uaddress !== "" &&
        commentData.ucomment !== ""
      ) {
        if (!isAlready) {
          let newUserData = [...userData, commentData];
          setUserData(newUserData);
          setCommentData({
            uname: "",
            uaddress: "",
            ucomment: "",
            index: "",
          });
          toast.success("Successfully Added");
        } else {
          toast.error("This Name Already Exists ");
        }
      } else {
        toast.error("Fill the full Form");
      }
    } else {
      let updateIndex = commentData.index;
      let oldData = userData;
      let isAlreadyUpdate = userData.filter(
        (value, i) => value.uname == commentData.uname && i != updateIndex
      );
      if (isAlreadyUpdate.length == 0) {
        oldData[updateIndex]["uname"] = commentData.uname;
        oldData[updateIndex]["uaddress"] = commentData.uaddress;
        oldData[updateIndex]["ucomment"] = commentData.ucomment;
        setUserData(oldData);
        setCommentData({
          uname: "",
          uaddress: "",
          ucomment: "",
          index: "",
        });
        toast.success("Comment Update Successfully");
      } else {
        toast.error("This Name Already Exists ");
      }
    }
  };

  let deleteComment = (ind) => {
    let aftrDelete = userData.filter((v, index) => ind !== index);
    setUserData(aftrDelete);
    toast.success("Comment Delete Successfully");
  };
  let updateComment = (indexNumber) => {
    let updtData = userData.filter((v, i) => i === indexNumber)[0];
    updtData["index"] = indexNumber;
    setCommentData(updtData);
  };

  return (
    <div className="form-page">
      <h1>Leave a comment</h1>
      <ToastContainer />
      <form onSubmit={saveData}>
        <div className="element">
          <label>Name </label>
          <input
            name="uname"
            type="text"
            onChange={getData}
            value={commentData.uname}
          />
        </div>
        <div className="element">
          <label>Address</label>
          <input
            type="text"
            name="uaddress"
            onChange={getData}
            value={commentData.uaddress}
          />
        </div>
        <div className="element textArea">
          <label>Comment</label>
          <textarea
            onChange={getData}
            name="ucomment"
            value={commentData.ucomment}
          ></textarea>
        </div>
        <div>
          <button>{commentData.index === "" ? "Save" : "Update"}</button>
        </div>
      </form>
      <div>
        <h1 className="heading">Comments</h1>
        <div className="comment">
          {userData.map((value, i) => (
            <div className="comment-box" key={i}>
              <h1 className="name">{value.uname}</h1>
              <h2>{value.uaddress}</h2>
              <p>{value.ucomment}</p>
              <button className="btnNew" onClick={() => deleteComment(i)}>
                Delete
              </button>
              <button className="btnNew" onClick={() => updateComment(i)}>
                Update
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
