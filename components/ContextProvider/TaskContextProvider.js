import { useState, createContext, useEffect } from "react";
import { useSession } from "next-auth/react";

export const TaskContext = createContext();

const TaskProvider = function (props) {
  const [showTask, setShowTask] = useState(false);
  const [showAddTask, setShowAddTask] = useState(false);
  const { data: session, status } = useSession();
  const [taskCount, setTaskCount] = useState({
    activeCount: 0,
    pendingCount: 0,
    completedCount: 0,
  });

  return (
    <TaskContext.Provider
      value={{
        showTask,
        setShowTask,
        showAddTask,
        setShowAddTask,
        session,
        status,
        setTaskCount,
        taskCount,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
