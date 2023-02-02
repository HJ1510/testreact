import { Routes, Route } from "react-router-dom";
import Main from "./component/main";
import Community from "./component/community";
import Meeting from "./component/meeting";
import Note from "./component/note";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/community" element={<Community />} />
      <Route path="/meeting" element={<Meeting />} />
      <Route path="/note" element={<Note />} />
    </Routes>
  );
}

export default App;
