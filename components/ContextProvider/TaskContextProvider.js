import { useState, createContext, useEffect } from "react";
import { useSession } from "next-auth/react";
import {
  collection,
  onSnapshot,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { database } from "../../firebaseConfig";

export const TaskContext = createContext();

const TaskProvider = function (props) {
  const [showTask, setShowTask] = useState(false);
  const [showAddTask, setShowAddTask] = useState(false);
  const [data, setData] = useState([]);
  const { data: session, status } = useSession();
  const [taskCount, setTaskCount] = useState({
    pending: 0,
    active: 0,
    completed: 0,
  });

  const tasks = function () {
    onSnapshot(collection(database, session?.user?.email), (snapshot) => {
      setData(
        snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  };

  const pendingTask = async function () {
    const colRef = collection(database, session?.user?.email);

    // Create a query against the collection.
    const q = query(colRef, where("status", "==", "pending"));
    const querySnapshot = await getDocs(q);
    setData(() => {
      let docs = [];
      querySnapshot.forEach((doc) => {
        return docs.push({ ...doc.data(), id: doc.id });
      });
      return docs;
    });
  };

  const activeTask = async function () {
    const colRef = collection(database, session?.user?.email);

    // Create a query against the collection.
    const q = query(colRef, where("status", "==", "active"));
    const querySnapshot = await getDocs(q);
    setData(() => {
      let docs = [];
      querySnapshot.forEach((doc) => {
        return docs.push({ ...doc.data(), id: doc.id });
      });
      return docs;
    });
  };

  const completedTask = async function () {
    const colRef = collection(database, session?.user?.email);

    // Create a query against the collection.
    const q = query(colRef, where("status", "==", "completed"));
    const querySnapshot = await getDocs(q);
    setData(() => {
      let docs = [];
      querySnapshot.forEach((doc) => {
        return docs.push({ ...doc.data(), id: doc.id });
      });
      return docs;
    });
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
        setTaskCount,
        taskCount,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
