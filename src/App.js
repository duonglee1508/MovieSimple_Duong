import { Fragment, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/scss";
import Banner from "./components/banner/Banner";

import Main from "./components/layout/Main";

// import MovieDetailPage from "./pages/MovieDetailPage";
// import MoviePage from "./pages/MoviePage";

const HomePage = lazy(() => import("./pages/HomePage"));
const MovieDetailPage = lazy(() => import("./pages/MovieDetailPage"));
const MoviePage = lazy(() => import("./pages/MoviePage"));
// const MoviePageV2 = lazy(() => import("./pages/MoviePageV2"));
function App() {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
        <Routes>
          <Route element={<Main></Main>}>
            <Route
              path="/"
              element={
                <>
                  <Banner></Banner>
                  <HomePage></HomePage>
                </>
              }
            ></Route>
            <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
            <Route
              path="/movie/:Id"
              element={<MovieDetailPage></MovieDetailPage>}
            ></Route>
          </Route>
          <Route
            path="*"
            element={
              <div className="text-[150px] flex justify-center items-center text-white w-screen h-screen  opacity-50">
                Not Found Page
              </div>
            }
          ></Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
