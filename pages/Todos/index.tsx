import Display from "../../components/DisplayTasks/Display";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

const Todos = function () {
  const [status, setStatus] = useState<string>("");
  return (
    <main className="bg-slate-100 h-screen py-10">
      <main className="max-w-5xl mx-auto bg-white rounded-lg p-5 flex">
        {/* Mini Dashboard */}
        <section className="max-w-sm pt-5 pr-10 text-center border-r-2">
          <IoPeopleCircleOutline size={50} className="block mx-auto" />
          <h1 className="my-2 text-xl font-bold">Admin</h1>
          <p className="opacity-75">sample@gmail.com</p>

          <div className="grid grid-cols-3 mt-10">
            <div>
              <span className="font-bold">2</span>
              <h2>Pending</h2>
            </div>
            <div>
              <span className="font-bold">1</span>
              <h2>Active</h2>
            </div>
            <div>
              <span className="font-bold">1</span>
              <h2>Completed</h2>
            </div>
          </div>
        </section>

        <div className="flex flex-col w-full">
          {/* Todo Navigation */}
          <section className="px-5 border-b-2 pb-2">
            <header className="flex justify-between ">
              <div className="bg-blue-500 text-white flex content-center rounded-md p-2">
                <button className="mr-1">Add Tasks</button>
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
    </main>
  );
};

export default Todos;
