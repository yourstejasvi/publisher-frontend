import React from "react";
import Navigation from "./components/navigation";
import Links from "./components/links";
import Latest from "./components/latest";
import Trending from "./components/trending";
import TopCreators from "./components/top_creators";
import SuccessStories from "./components/success_stories";
import Footer from "./components/footer";
import Popup from "./components/popup";

function App() {
  return (
    <div>



      < Popup />
      < Navigation />
      < Links />
      < Latest />
      < Trending />
      < TopCreators />
      < SuccessStories />
      < Footer />
      

    </div>
  );
}

export default App;
