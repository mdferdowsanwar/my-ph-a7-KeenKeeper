import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/homePage/HomePage";
import Timeline from "../pages/timeline/Timeline";
import Stats from "../pages/stats/Stats";
import NotFound from "../pages/notFound/NotFound";
import FriendDetails from '../pages/friends/FriendDetails';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: "/friendDetails/:id",
                Component: FriendDetails
            },
            {
                path: "/timeline",
                Component: Timeline
            },
            {
                path: "/stats",
                Component: Stats
            },
        ],
        errorElement: <NotFound></NotFound>
    },
]);