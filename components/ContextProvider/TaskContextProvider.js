import { useState, createContext } from "react";

export const TaskContext = createContext();

const TaskProvider = function (props) {
  const [show, setShow] = useState(false);

  return (
    <TaskContext.Provider value={{ show, setShow }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
