import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, { loader as homeLoader } from "./routes/Root/Root";
import ViewAllCategories, {
    loader as categoriesLoader,
} from "./routes/ViewAllCategories/ViewAllCategories";
import CategoryHome, {
    loader as categoryLoader,
} from "./routes/CategoryHome/CategoryHome";
import Events, { loader as eventsLoader } from "./routes/Events/Events";
import Venues, { loader as venuesLoader } from "./routes/Venues/Venues";
import EventDetails, {
    loader as eventDetailsLoader,
} from "./routes/EventDetails/EventDetails";
import VenueDetails, {
    loader as venueDetailsLoader,
} from "./routes/VenueDetails/VenueDetails";
import ErrorPage from "./routes/ErrorPage/ErrorPage";
import About from "./routes/About/About";
import Terms from "./routes/Terms/Terms";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: homeLoader,
    },
    {
        path: "/categories",
        element: <ViewAllCategories />,
        loader: categoriesLoader,
    },
    {
        path: "/categories/:categorySlug",
        element: <CategoryHome />,
        errorElement: <ErrorPage />,
        loader: categoryLoader,
    },
    {
        path: "/events",
        element: <Events />,
        errorElement: <ErrorPage />,
        loader: eventsLoader,
    },
    {
        path: "/events/:eventID",
        element: <EventDetails />,
        errorElement: <ErrorPage />,
        loader: eventDetailsLoader,
    },
    {
        path: "/venues",
        element: <Venues />,
        errorElement: <ErrorPage />,
        loader: venuesLoader,
    },
    {
        path: "/venues/:venueID",
        element: <VenueDetails />,
        errorElement: <ErrorPage />,
        loader: venueDetailsLoader,
    },
    {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/terms",
        element: <Terms />,
        errorElement: <ErrorPage />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
