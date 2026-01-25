import { useState } from "react";
import { TABS_DATA } from "../tabsData.js"
import TabButton from "./TabButton.jsx";

export default function Tabs() {
    const [selectedTab, setSelectedTab] = useState(TABS_DATA[0]);

    return (
        <section>
            <nav>
            {/* COULD PROBABLY use map() */}
            <TabButton isSelected={selectedTab === TABS_DATA[0]} onClick={() => setSelectedTab(TABS_DATA[0])}><strong>About Me</strong></TabButton>
            <TabButton isSelected={selectedTab === TABS_DATA[1]} onClick={() => setSelectedTab(TABS_DATA[1])}><strong>Projects</strong></TabButton>
            <TabButton isSelected={selectedTab === TABS_DATA[2]} onClick={() => setSelectedTab(TABS_DATA[2])}><strong>Hobbies</strong></TabButton>
            <TabButton isSelected={selectedTab === TABS_DATA[3]} onClick={() => setSelectedTab(TABS_DATA[3])}><strong>This site</strong></TabButton>
            </nav>
            <div className="mt-5">
            {selectedTab}
            </div>
        </section>
    );
}