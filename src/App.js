import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home";
import List from "./pages/products/List";
import Update from "./pages/products/Update";
import Create from "./pages/products/Create";
import Detail from "./pages/products/Detail";
function App() {
  return (
      <div className="container-fluid">
        <Routes>
            <Route path={'/'} element={<Home/>}>
                <Route path={'/'} element={<List/>}/>
                <Route path={'/update/:id'} element={<Update/>}/>
                <Route path={'/create'} element={<Create/>}/>
                <Route path={'/detail/:id'} element={<Detail/>}/>
            </Route>
        </Routes>
      </div>
  );
}

export default App;
