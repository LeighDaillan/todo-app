import ViewTask from "../TaskFunction/View-Task";
import { useState, useContext } from "react";
import { TaskContext } from "../ContextProvider/TaskContextProvider";
import { BiMenuAltRight } from "react-icons/bi";

const Tasks = function () {
  const TEST = [
    {
      date: "July 12, 2001",
      description: "Things that need to do!",
      status: "pending",
      title: "Testing Pending",
    },
    {
      date: "July 12, 2001",
      description: "Things that need to do!",
      status: "pending",
      title: "Testing Pending V2",
    },
    {
      date: "July 12, 2001",
      description: "Things that need to do!",
      status: "pending",
      title: "Testing Pending V3",
    },
    {
      date: "July 12, 2001",
      description: "Things that need to do!",
      status: "active",
      title: "Testing Active",
    },
    {
      date: "July 12, 2001",
      description: "Things that need to do!",
      status: "completed",
      title: "Testing Completed",
    },
  ];

  const { show, setShow } = useContext(TaskContext);

  const [taskData, setTaskData] = useState();

  const viewTask = function (data) {
    setShow(!show);
    return setTaskData(data);
  };

  return (
    <>
      <section className="m-5">
        <h1 className="text-4xl ml-5 mb-3">All</h1>
        {TEST.map((data) => {
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
        {show ? <ViewTask data={taskData} /> : false}
      </section>
    </>
  );
};

export default Tasks;
