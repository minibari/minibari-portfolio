import { useState } from "react";
import { tabsData } from "../tabsData.js"
import TabButton from "./TabButton.jsx";

export default function Tabs() {
    const [selectedTab, setSelectedTab] = useState(tabsData[0]);

    return (
        <section>
            <nav>
            {/* asi bych mohl/měl použít fci map()... použiju u karet */}
            <TabButton  isSelected={selectedTab.title === tabsData[0].title} onClick={() => setSelectedTab(tabsData[0])}><strong>{tabsData[0].title}</strong></TabButton>
            <TabButton  isSelected={selectedTab.title === tabsData[1].title} onClick={() => setSelectedTab(tabsData[1])}><strong>{tabsData[1].title}</strong></TabButton>
            <TabButton  isSelected={selectedTab.title === tabsData[2].title} onClick={() => setSelectedTab(tabsData[2])}><strong>{tabsData[2].title}</strong></TabButton>
            <TabButton  isSelected={selectedTab.title === tabsData[3].title} onClick={() => setSelectedTab(tabsData[3])}><strong>{tabsData[3].title}</strong></TabButton>
            </nav>
            <div className="mt-5">
            {selectedTab.description}
            </div>
        </section>
    );
}