import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Chisiamo from "./pages/Chisiamo/Chisiamo";
import NoleggioDiBarche from "./pages/NoleggioDiBarche/NoleggioDiBarche";
import EscursioniInBarcaSalento from "./pages/EscursioniInBarcaSalento/EscursioniInBarcaSalento";
import Servizi from "./pages/Servizi/Servizi";
import Contatti from "./pages/Contatti/Contatti";

import Reservations from "./Admin/Pages/Reservations/Reservations";
import Messages from "./Admin/Pages/Messages/Messages";
import Excursions from "./Admin/Pages/Excursions/Excursions";
import Boats from "./Admin/Pages/Boats/Boats";

import ManagerReservations from "./Manager/Pages/managerReservations/ManagerReservations";

import DetailsBoats from "./Admin/Pages/Boats/DetailsBoats";
import DetailsExcursions from "./Admin/Pages/Excursions/DetailsExcursions";
import ManagerPromotions from "./Manager/Pages/managerPromotions/ManagerPromotions";
import DetailsManagerPromotions from "./Manager/Pages/managerPromotions/DetailsManagerPromotions";
import Promotions from "./pages/Promotions/Promotions";

import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import NoAccess from "./pages/NoAccess";
import ForceRedirect from "./components/ForceRedirect";
import ManagerRouter from "./components/ManagerRouter";
import AdminRouter from "./components/AdminRouter";
import store from "./redux/store";
import { setUser } from "./redux/actions/authActions";
import jwt_decode from "jwt-decode";
import { useSelector } from "react-redux";
import BoatComponent from "./components/BoatComponent/BoatComponent";
import EscursioneComponent from "./pages/EscursioniInBarcaSalento/EscursioneComponent";
import { setAuth } from "./util/setAuth";

if (localStorage.jwt) {
  const decode = jwt_decode(localStorage.jwt);
  store.dispatch(setUser(decode));
  setAuth(window.localStorage.jwt);
}

function App() {
  const auth = useSelector((state) => state.auth);
  const user = {
    isConnected: auth.isConnected,
    role: auth.user.role,
  };

  return (
    <>
      <div>
        <Routes>
          {/* login */}

          <Route
            path="/login"
            element={
              <ForceRedirect user={user}>
                <Login />
              </ForceRedirect>
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route path="/noaccess" element={<NoAccess />} />

          <Route path="/" element={<Home />} />
          <Route path="/chisiamo" element={<Chisiamo />} />
          <Route path="/noleggiodibarche" element={<NoleggioDiBarche />} />
          <Route path="/noleggiodibarche/:id" element={<BoatComponent />} />
          <Route
            path="/escursioniinbarcasalento"
            element={<EscursioniInBarcaSalento />}
          />
          <Route
            path="/escursioniinbarcasalento/:id"
            element={<EscursioneComponent />}
          />
          <Route path="/servizi" element={<Servizi />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/promotions" element={<Promotions />} />

          {/* Admin */}
          <Route
            path="/admin"
            element={
              <AdminRouter user={user}>
                <Reservations />
              </AdminRouter>
            }
          />

          <Route
            path="/admin/messages"
            element={
              <AdminRouter user={user}>
                <Messages />
              </AdminRouter>
            }
          />

          <Route
            path="/admin/excursions"
            element={
              <AdminRouter user={user}>
                <Excursions />
              </AdminRouter>
            }
          />
          <Route
            path="/admin/excursions/:id"
            element={
              <AdminRouter user={user}>
                <DetailsExcursions />
              </AdminRouter>
            }
          />

          <Route
            path="/admin/boats"
            element={
              <AdminRouter user={user}>
                <Boats />
              </AdminRouter>
            }
          />
          <Route
            path="/admin/boats/:id"
            element={
              <AdminRouter user={user}>
                <DetailsBoats />
              </AdminRouter>
            }
          />

          {/* Manager */}

          <Route
            path="/manager"
            element={
              <ManagerRouter user={user}>
                <ManagerReservations />
              </ManagerRouter>
            }
          />

          <Route
            path="/manager/promotions"
            element={
              <ManagerRouter user={user}>
                <ManagerPromotions />
              </ManagerRouter>
            }
          />
          <Route
            path="/manager/promotions/:id"
            element={
              <ManagerRouter user={user}>
                <DetailsManagerPromotions />
              </ManagerRouter>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
