import {useState} from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import {Link} from "@inertiajs/react";
import LeftSidebar from "@/Components/LeftSidebar";
import Navbar from "@/Components/Navbar";
// react tab
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ChatPerson from "@/Components/ChatPerson";
export default function Authenticated({children}) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  console.log(tabIndex);
  return (
    <div className="h-screen w-full">
      {/* <Tabs> */}
      <Tabs className="grid grid-cols-8" selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className=" col-span-2   flex">
          <div className="bg-[#232323] text-slate-50 p-2 w-[20%] h-screen">
                        ok
          </div>
          <div className=" w-[80%] h-screen ">
            <LeftSidebar>
              <TabList>
                {[...Array(24)].map((item, index) => (
                  <Tab key={index} className={`w-full outline-none`}>
                    <ChatPerson active={tabIndex == index ? true : false}/>
                  </Tab>
                ))}
              </TabList>
            </LeftSidebar>
          </div>
        </div>
        <div className=" col-span-6  bg-gray-100">
          <Navbar></Navbar>
          {[...Array(24)].map((item, index) => (
            <TabPanel key={index}>
              <h2>Any content {index}</h2>
            </TabPanel>
          ))}
        </div>
      </Tabs>
    </div>
  );
}
