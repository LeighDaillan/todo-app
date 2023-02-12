import { TaskContext } from "../ContextProvider/TaskContextProvider";
import { useContext, useState, useEffect } from "react";
import ViewTask from "../TaskFunction/View-Task";
import { BiMenuAltRight } from "react-icons/bi";
import { collection, query, where, getDocs } from "firebase/firestore";
import { database } from "../../firebaseConfig";

const Pending = function () {
  const { showTask, setShowTask, session } = useContext(TaskContext);
  const [taskData, setTaskData] = useState();
  const [data, setData] = useState();

  useEffect(() => {
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
    if (session) pendingTask();
  }, []);

  const viewTask = function (data) {
    setShowTask(!showTask);
    return setTaskData(data);
  };

  return (
    <section className="m-5">
      <h1 className="text-4xl ml-5 mb-3">Pending</h1>
      {data?.map((data) => {
        const status =
          data.status.charAt(0).toUpperCase() + data.status.slice(1);
        return (
          <div
            key={data.title}
            className="ml-5 mb-2 border-b-2 flex justify-between"
          >
            <div>
              <h2
                className={`font-bold text-xl border-l-4 task-${data.status} pl-2`}
              >
                {data.title}
              </h2>
              <div className="flex gap-2 my-2  ">
                <p>Status: {status}</p>
                <p className="opacity-75 text-sm">{data.date}</p>
              </div>
            </div>

            <BiMenuAltRight
              onClick={() => viewTask(data)}
              size={25}
              className="opacity-60 hover:opacity-100 cursor-pointer mt-5"
            />
          </div>
        );
      })}
      {showTask ? <ViewTask data={taskData} /> : false}
    </section>
  );
};

export default Pending;
