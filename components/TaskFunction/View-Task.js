import { useState, useContext } from "react";
import { TaskContext } from "../ContextProvider/TaskContextProvider";

const ViewTask = function ({ data }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");

  const { show, setShow } = useContext(TaskContext);

  const submitHandler = function (event) {
    event.preventDefault();
    return console.log(title, status, description, date);
  };

  return (
    <>
      <div
        onClick={() => setShow(!show)}
        className="bg-black opacity-80 inset-0 max-h-screen bg-coverbg-center z-80 absolute"
      ></div>
      <form className=" top-0 left-0 right-0 bg-slate-200 absolute z-90 h-auto rounded-lg p-5 gap-5 text-xl w-5/12 mx-auto mt-20 flex flex-col">
        <label>Title:</label>
        <input
          value={data.title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2"
          type="text"
          name="Title"
          placeholder="Task Title"
        />
        <label>Date:</label>
        <input
          value={data.date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2"
          type="text"
        />
        <label>Status:</label>
        <select
          onChange={(e) => setStatus(e.target.value)}
          className="p-2"
          name="status"
          value={data.status}
        >
          <option disabled>Choose Status:</option>
          <option value="pending">Pending</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
        <label>Description:</label>
        <textarea
          value={data.description}
          onChange={(e) => setDescription(e.target.value)}
          className="resize-none p-2 text-sm h-28"
          name="description"
          maxLength={200}
        ></textarea>
        <input
          onClick={submitHandler}
          type="submit"
          value="Submit"
          className="rounded-md py-2 bg-blue-600 text-white"
        />
      </form>
    </>
  );
};

export default ViewTask;
