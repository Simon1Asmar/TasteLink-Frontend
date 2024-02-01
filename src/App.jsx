import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AvailableJobsPage from "./pages/AvailableJobsPage";
import SignInOrUpPage from "./pages/SignInOrUpPage";
import CurrentOrdersPage from "./pages/CurrentOrdersPage";
import OrdersHistoryPage from "./pages/OrdersHistoryPage";
import OwnedRestaurantsPage from "./pages/OwnedRestaurantsPage";
import SettingsPage from "./pages/SettingsPage";
import { UserAuthProvider } from "./contexts/UserAuthContext";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <UserAuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Header>
                <HomePage />
              </Header>
            }
          />
          <Route
            path="/user-authentication"
            element={
              <Header>
                <SignInOrUpPage />
              </Header>
            }
          />
          <Route
            path="/sign-up"
            element={
              <Header>
                <SignUpPage />
              </Header>
            }
          />
          <Route
            path="/current-orders"
            element={
              <Header>
                <CurrentOrdersPage />
              </Header>
            }
          />
          <Route
            path="/orders-history"
            element={
              <Header>
                <OrdersHistoryPage />
              </Header>
            }
          />
          <Route
            path="/available-jobs"
            element={
              <Header>
                <AvailableJobsPage />
              </Header>
            }
          />
          <Route
            path="/owned-restaurants"
            element={
              <Header>
                <OwnedRestaurantsPage />
              </Header>
            }
          />
          <Route
            path="/settings"
            element={
              <Header>
                <SettingsPage />
              </Header>
            }
          />
        </Routes>
      </UserAuthProvider>
    </BrowserRouter>
  );
}

export default App;
