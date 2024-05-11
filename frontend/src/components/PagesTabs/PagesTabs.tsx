import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { pushToRoute } from "../../utils/next";
import Tabs from "../Tabs/Tabs";

export const TabsId = {
  INPUT: "input",
  OUTPUT: "output",
};


const tabs = [
  { route: "/", id: TabsId.INPUT, name: "Input", content: <></> },
  { route: "/output", id: TabsId.OUTPUT, name: "Output", content: <></> },
];

const PagesTabs = ({ initialSelectedTab }) => {
  const [selectedTabId, setSelectedTabId] = useState(initialSelectedTab);
  const router = useRouter();

  useEffect(() => {
    setSelectedTabId(initialSelectedTab);
  }, [initialSelectedTab]);

  const onTabChange = (tab) => {
    setSelectedTabId(tab.id);
    pushToRoute(router, tab.route);
  };

  return (
    <Tabs
      className="mt-2"
      tabs={tabs}
      selectedTab={selectedTabId}
      onTabChange={onTabChange}
    />
  );
};

export default PagesTabs;
