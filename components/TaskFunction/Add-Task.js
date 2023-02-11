import { useState, useContext } from "react";
import { TaskContext } from "../ContextProvider/TaskContextProvider";
import { collection, addDoc } from "firebase/firestore";
import { database } from "../../firebaseConfig";

const AddTask = function () {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const { showAddTask, setShowAddTask, session } = useContext(TaskContext);

  const submitHandler = async function (event) {
    event.preventDefault();

    const usersCollectionRef = collection(database, session.user.email);
    const document = await addDoc(usersCollectionRef, {
      title,
      status,
      description,
      date,
    }).then(() => {
      alert("Task Added Successfuly!");
      setShowAddTask(!showAddTask);
    });
  };

  return (
    <>
      <div
        onClick={() => setShowAddTask(!showAddTask)}
        className="bg-black opacity-80 inset-0 max-h-screen bg-coverbg-center z-80 fixed"
      ></div>
      <form className=" top-0 left-0 right-0 bg-slate-200 fixed z-90 h-auto rounded-lg p-5 gap-3 text-xl w-5/12 mx-auto mt-20 flex flex-col">
        <h1 className="text-xl font-bold">Add Task</h1>
        <label>Title:</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          className="p-2"
          type="text"
          name="Title"
          placeholder="Task Title"
        />
        <label>Date:</label>
        <input
          onChange={(e) => setDate(e.target.value)}
          className="p-2"
          type="text"
        />
        <label>Status:</label>
        <select
          defaultValue={"Select"}
          onChange={(e) => setStatus(e.target.value)}
          className="p-2"
          name="status"
        >
          <option value={"Select"} disabled hidden>
            Choose Status:
          </option>
          <option value="pending">Pending</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
        <label>Description:</label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          className="resize-none p-2 text-sm h-28"
          name="description"
          maxLength={200}
        ></textarea>
        <input
          onClick={submitHandler}
          type="submit"
          value="Submit"
          className="rounded-md py-2 cursor-pointer bg-blue-600 text-white"
        />
      </form>
    </>
  );
};

export default AddTask;
