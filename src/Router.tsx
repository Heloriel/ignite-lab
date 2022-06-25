import { Layout } from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { ClassRoomPage } from "./pages/ClassRoom";
import { Index } from "./pages/Index";

export const Router = () => {
  return (
    <Routes>
      <Route
        path="/classroom/:slug"
        element={
          <Layout>
            <ClassRoomPage />
          </Layout>
        }
      />
      <Route
        path="/classroom/"
        element={
          <Layout>
            <ClassRoomPage />
          </Layout>
        }
      />
      <Route path="/" element={<Index />} />
    </Routes>
  );
};
