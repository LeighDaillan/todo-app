import Tasks from "./Tasks";
import Active from "./Active";
import Pending from "./Pending";
import Completed from "./Completed";

const Display = function ({ status }) {
  if (status === "pending") {
    return <Pending></Pending>;
  } else if (status === "active") {
    return <Active></Active>;
  } else if (status === "completed") {
    return <Completed></Completed>;
  } else {
    return <Tasks></Tasks>;
  }
};

export default Display;
