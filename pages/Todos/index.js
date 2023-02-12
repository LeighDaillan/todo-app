import { TaskContext } from "../../components/ContextProvider/TaskContextProvider";
import { useContext, useState } from "react";
import Image from "next/image";
import Display from "../../components/DisplayTasks/Display";
import AddTask from "../../components/TaskFunction/Add-Task";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";

const Todos = function () {
  const { showAddTask, setShowAddTask, session, taskCount } =
    useContext(TaskContext);
  const [status, setStatus] = useState("");
  const addTask = function () {
    setShowAddTask(!showAddTask);
  };

  return (
    <main className="bg-slate-100 h-screen py-10">
      <main className="max-w-5xl mx-auto bg-white rounded-lg p-5 flex">
        {/* Mini Dashboard */}
        <section className="max-w-sm pt-5 pr-10 text-center border-r-2">
          {!session ? (
            <IoPeopleCircleOutline size={50} className="block mx-auto" />
          ) : (
            <Image
              className="rounded-full mx-auto"
              src={session.user.image}
              height="70"
              width="70"
              alt="Profile Photo"
            />
          )}
          <h1 className="my-2 text-xl font-bold">{session?.user?.name}</h1>
          <p className="opacity-75 text-sm">{session?.user?.email}</p>
        </section>

        <div className="flex flex-col w-full">
          {/* Todo Navigation */}
          <section className="px-5 border-b-2 pb-2">
            <header className="flex justify-between ">
              <div className="bg-blue-500 text-white rounded-md p-2 flex content-center ">
                <button onClick={addTask} className="mr-1">
                  Add Tasks
                </button>
                <AiOutlinePlus size={23} />
              </div>
              <nav>
                <ul className="flex flex-row-reverse">
                  <li className="mx-5 text-lg">
                    <button onClick={() => setStatus("completed")}>
                      Completed
                    </button>
                  </li>
                  <li className="mx-5 text-lg">
                    <button onClick={() => setStatus("active")}>Active</button>
                  </li>
                  <li className="mx-5 text-lg">
                    <button onClick={() => setStatus("pending")}>
                      Pending
                    </button>
                  </li>
                  <li className="mx-5 text-lg">
                    <button onClick={() => setStatus("tasks")}>All</button>
                  </li>
                </ul>
              </nav>
            </header>
          </section>

          {/* Display Tasks */}
          <Display status={status} />
        </div>
      </main>
      {showAddTask ? <AddTask /> : false}
    </main>
  );
};

export default Todos;
