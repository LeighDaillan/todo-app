import { useState, createContext, useEffect } from "react";
import { useSession } from "next-auth/react";
import { collection, onSnapshot } from "firebase/firestore";
import { database } from "../../firebaseConfig";

export const TaskContext = createContext();

const TaskProvider = function (props) {
  const [showTask, setShowTask] = useState(false);
  const [showAddTask, setShowAddTask] = useState(false);
  const [data, setData] = useState([]);
  const { data: session, status } = useSession();

  const tasks = function () {
    return onSnapshot(
      collection(database, session?.user?.email),
      (snapshot) => {
        setData(
          snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      }
    );
  };

  const pendingTask = function () {
    return onSnapshot(
      collection(database, session?.user?.email),
      (snapshot) => {
        const data = snapshot.docs
          .map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
          .filter((doc) => doc.status === "pending");
        return setData(data);
      }
    );
  };

  const activeTask = function () {
    return onSnapshot(
      collection(database, session?.user?.email),
      (snapshot) => {
        const data = snapshot.docs
          .map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
          .filter((doc) => doc.status === "active");
        return setData(data);
      }
    );
  };

  const completedTask = function () {
    return onSnapshot(
      collection(database, session?.user?.email),
      (snapshot) => {
        const data = snapshot.docs
          .map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
          .filter((doc) => doc.status === "completed");
        return setData(data);
      }
    );
  };

  return (
    <TaskContext.Provider
      value={{
        showTask,
        setShowTask,
        showAddTask,
        setShowAddTask,
        session,
        status,
        data,
        setData,
        tasks,
        pendingTask,
        activeTask,
        completedTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
