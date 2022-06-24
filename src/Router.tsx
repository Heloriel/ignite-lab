import { Route, Routes } from "react-router-dom";
import { ClassRoomPage } from "./pages/ClassRoom";

export const Router = () => {
  return (
    <Routes>
      <Route path="/classroom/:slug" element={<ClassRoomPage />} />
    </Routes>
  );
};
