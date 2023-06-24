import { LeftSidebar } from "../../component/LeftSidebar/LeftSidebar";
import { RightSidebar } from "../../component/RightSidebar/RightSidebar";
import { MainPane } from "./component/MainPane";

import "./landing.layout.css";

export const Landing = () => {
  return (
    <div className="homefeed-container">
      <LeftSidebar />
      <MainPane />
      <RightSidebar/>
    </div>
  );
};
