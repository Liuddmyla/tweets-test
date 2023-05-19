import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Loader } from "./Loader";

const Layout = lazy(() => import('./layout/Layout'));
const Home = lazy(() => import('pages/Home'));
const Tweets = lazy(() => import('pages/Tweets'));

export const App = () => {
  return (
    <div>     
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<><Loader/></>}>
            <Layout />
          </Suspense>}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          
          <Route path="*" element={<Home />} />
        </Route>        
      </Routes>
    </div>
  );
};


