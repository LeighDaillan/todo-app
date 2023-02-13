import Head from "next/head";
import { TaskContext } from "../../components/ContextProvider/TaskContextProvider";
import { useContext, useState } from "react";
import Image from "next/image";
import Display from "../../components/DisplayTasks/Display";
import AddTask from "../../components/TaskFunction/Add-Task";
import { IoPeopleCircleOutline } from "react-icons/io5";

const Todos = function () {
  const { showAddTask, setShowAddTask, session, taskCount } =
    useContext(TaskContext);
  const [status, setStatus] = useState("");
  const addTask = function () {
    setShowAddTask(!showAddTask);
  };

  return (
    <>
      <Head>
        <title>Todo Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="bg-slate-100 h-screen py-10">
        <main className="md:max-w-5xl sm:max-w-xl max-w-md mx-auto bg-white rounded-lg p-5 md:flex">
          {/* Mini Dashboard */}
          <section className="max-w-sm mx-auto pt-5 pr-10 text-center md:border-r-2 mb-10">
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
              <header className="flex flex-col md:flex-row justify-between ">
                <button
                  className="bg-blue-500 text-white rounded-md my-2 px-2 py-2"
                  onClick={addTask}
                >
                  Add Tasks +
                </button>

                <nav>
                  <ul className="grid grid-cols-2 gap-5 justify-center sm:flex sm:flex-row-reverse mt-5">
                    <li className="mx-5 text-md md:text-lg">
                      <button
                        className="task-completed border-b-4 px-2"
                        onClick={() => setStatus("completed")}
                      >
                        Completed
                      </button>
                    </li>
                    <li className="mx-5 text-md md:text-lg ">
                      <button
                        className="task-active border-b-4 px-2"
                        onClick={() => setStatus("active")}
                      >
                        Active
                      </button>
                    </li>
                    <li className="mx-5 text-md md:text-lg">
                      <button
                        className="task-pending border-b-4 px-2"
                        onClick={() => setStatus("pending")}
                      >
                        Pending
                      </button>
                    </li>
                    <li className="mx-5 text-md md:text-lg">
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
    </>
  );
};

export default Todos;
