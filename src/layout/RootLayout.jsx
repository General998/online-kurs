import { Footer, Header } from "../section/index";
import { Outlet, NavLink } from "react-router";

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
} from "../page/index";
import BreadCrumps from "../components/BreadCrumps";
function RootLayout() {
  return (
    <>
      <header>
        <Header className="header"></Header>
      </header>
      <main className="main">
        <Outlet></Outlet>
        {/* <BreadCrumps></BreadCrumps> */}
      </main>
      <footer>
        <Footer className="footer"></Footer>
      </footer>
    </>
  );
}
export default RootLayout;
