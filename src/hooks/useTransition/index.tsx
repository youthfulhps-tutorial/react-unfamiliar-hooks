import { useState } from "react";
import TabButton from "./TabButton";
import About from "./About";
import Contact from "./Contact";
import PostsTab from "./Posts";

function Navigator() {
  const [tab, setTab] = useState("about");

  return (
    <div style={{ marginLeft: "16px" }}>
      <nav>
        <TabButton isActive={tab === "about"} onClick={() => setTab("about")}>
          About
        </TabButton>
        <TabButton isActive={tab === "posts"} onClick={() => setTab("posts")}>
          Posts (slow)
        </TabButton>
        <TabButton
          isActive={tab === "contact"}
          onClick={() => setTab("contact")}
        >
          Contact
        </TabButton>
        <hr />
      </nav>
      {tab === "about" && <About />}
      {tab === "posts" && <PostsTab />}
      {tab === "contact" && <Contact />}
    </div>
  );
}

export default Navigator;
