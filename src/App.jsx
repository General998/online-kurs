import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  HomePage,
  AboutUsPage,
  BlogPage,
  ContactsPage,
  CoursePage,
  CoursesPage,
  EventsGridViewPage,
  EventsListViewPage,
  SignInPage,
  SignUpPage,
  EventPage,
} from "./page/index.js";
import RootLayout from "./layout/RootLayout.jsx";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: `/about`,
          element: <AboutUsPage />,
        },
        {
          path: `/blog`,
          element: <BlogPage />,
        },
        {
          path: `/contacts`,
          element: <ContactsPage />,
        },
        {
          path: `/course`,
          element: <CoursePage />,
        },
        {
          path: `/courses`,
          element: <CoursesPage />,
        },
        {
          path: `/events`,
          element: <EventPage />,
        },
        {
          path: `/eventGrid`,
          element: <EventsGridViewPage />,
        },
        {
          path: `/eventList`,
          element: <EventsListViewPage />,
        },
        {
          path: `/signIn`,
          element: <SignInPage />,
        },
        {
          path: `/signUp`,
          element: <SignUpPage />,
        },
      ],
    },
  ]);
  return (
    <div className="wrap">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
