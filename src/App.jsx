import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SpotList from "./pages/SpotList";
import SpotDetailsPage from "./pages/SpotDetailsPage";
// import EventList from "./pages/EventList";
// import EventDetailPage from "./pages/EventDetailPage";
import LoginPage from "./pages/LoginPage";
// import AddEvent from "./pages/AddEvent";
// import EditEvent from "./pages/EditEvent";
import EditSpot from "./pages/EditSpot";
// import ConsumableDetailsPage from "./pages/ConsumableDetailsPage";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import AddSpot from "./pages/AddSpot";
import Footer from "./pages/Footer";
// import SignupPage from "./pages/SignupPage";
import AlternativeNavbar from "./components/AlternativeNavbar";
import ToplistList from "./pages/ToplistList";

function App() {
  return (
    <div className="App">
      <AlternativeNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/spots/:spotId" element={<SpotDetailsPage />} />
        <Route path="/spots" element={<SpotList />} />
        <Route
          path="/spots/create"
          element={
            <IsPrivate>
              <AddSpot />
            </IsPrivate>
          }
        />
        <Route
          path="/spots/:spotId/edit"
          element={
            <IsPrivate>
              <EditSpot />
            </IsPrivate>
          }
        />
        <Route path="/toplists" element={<ToplistList />} />
        {/* <Route path="/events" element={<EventList />} />
        <Route path="/events/:eventId" element={<EventDetailPage />} />
        <Route
          path="/events/:spotId/create"
          element={
            <IsPrivate>
              <AddEvent />
            </IsPrivate>
          }
        />
        <Route
          path="/events/:eventId/edit"
          element={
            <IsPrivate>
              <EditEvent />
            </IsPrivate>
          } */}
        {/* /> */}

        {/* <Route
          path="/consumable/:consumableId"
          element={<ConsumableDetailsPage />}
        /> */}
        {/* <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }/> */}
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;