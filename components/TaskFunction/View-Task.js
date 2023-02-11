import { useState, useContext } from "react";
import { TaskContext } from "../ContextProvider/TaskContextProvider";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { database } from "../../firebaseConfig";

const ViewTask = function ({ data }) {
  const [title, setTitle] = useState(data.title);
  const [date, setDate] = useState(data.date);
  const [status, setStatus] = useState(data.status);
  const [description, setDescription] = useState(data.description);

  const { showTask, setShowTask, session } = useContext(TaskContext);

  const submitHandler = async function (event) {
    event.preventDefault();
    const colRef = doc(database, session.user.email, data.id);

    // Set the "capital" field of the city 'DC'
    await updateDoc(colRef, {
      title,
      date,
      status,
      description,
    }).then(() => {
      alert("Updated Successfully");
      setShowTask(!showTask);
    });
  };

  const deleteHandler = async function () {
    const colRef = doc(database, session.user.email, data.id);
    await deleteDoc(colRef).then(() => {
      alert("Deleted Successfully");
      setShowTask(!showTask);
    });
  };

  return (
    <>
      <div
        onClick={() => setShowTask(!showTask)}
        className="bg-black fixed opacity-80 inset-0 max-h-full bg-coverbg-center z-80 "
      ></div>
      <form className=" top-0 left-0 right-0 fixed bg-slate-200  z-90 h-auto rounded-lg p-5  gap-2 text-xl w-5/12 mx-auto mt-20 flex flex-col">
        <label>Title:</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2"
          type="text"
          name="Title"
          placeholder="Task Title"
        />
        <label>Date:</label>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2"
          type="text"
        />
        <label>Status:</label>
        <select
          onChange={(e) => setStatus(e.target.value)}
          className="p-2"
          name="status"
          value={status}
        >
          <option value="pending">Pending</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
        <label>Description:</label>
        <textarea
          value={description}
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
        <input
          onClick={deleteHandler}
          type="button"
          value="Delete"
          className="rounded-md py-2 border-2 border-red-600 text-black hover:bg-red-600 hover:text-white cursor-pointer"
        />
      </form>
    </>
  );
};

export default ViewTask;
