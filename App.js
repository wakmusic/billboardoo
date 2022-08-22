import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Charts from "./pages/charts";
import Main from "./pages/main";
import NewsPage from "./pages/news";
import NewChart from "./pages/new";
import MontlyChart from "./pages/montly";
import AnnualChart from "./pages/annual";
import Credit from "./pages/credit";
import ChartsHour from "./pages/chartsHour";
import ChartsDay from "./pages/chartsDay";
import ChartsWeek from "./pages/chartsWeek";
import ChartsMonth from "./pages/chartsMonth";
import Graphs from "./pages/graph";
import GraphHour from "./pages/graphHour";
import GraphDay from "./pages/graphDay";
import GraphWeek from "./pages/graphWeek";
import GraphMonth from "./pages/graphMonth";
import Artist from "./pages/artist";
import MusicPlayer from "./pages/player";
import ArtistLanding from "./pages/artistLanding";
import LilpaEasterEgg from "./pages/lilpaEasterEgg";
import JururuEasterEgg from "./pages/jururuEasterEgg";
import Company from "./pages/company";
import NotFound from "./pages/notFound";
import Lyrics from "./components/lyrics";


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/charts" element={<Charts/>}/>
                        <Route path="/charts/hourly" element={<ChartsHour/>}/>
                        <Route path="/charts/daily" element={<ChartsDay/>}/>
                        <Route path="/charts/weekly" element={<ChartsWeek/>}/>
                        <Route path="/charts/monthly" element={<ChartsMonth/>}/>
                        <Route path="/graphs" element={<Graphs/>}/>
                        <Route path="/graphs/hourly" element={<GraphHour/>}/>
                        <Route path="/graphs/daily" element={<GraphDay/>}/>
                        <Route path="/graphs/weekly" element={<GraphWeek/>}/>
                        <Route path="/graphs/monthly" element={<GraphMonth/>}/>
                        <Route path="/news" element={<NewsPage/>}/>
                        <Route path="/credit" element={<Credit/>}/>
                        <Route path="/albums" element={<NewChart/>}/>
                        <Route path="/albums/monthly" element={<MontlyChart/>}/>
                        <Route path="/albums/annual" element={<AnnualChart/>}/>
                        <Route exact path="/player" element={<Main/>}/>
                        <Route path="/player/zhxmsxms" element={<JururuEasterEgg/>}/>
                        <Route path="/player/:id" element={<MusicPlayer/>}/>
                        <Route path="/artists" element={<ArtistLanding/>}/>
                        <Route path="/artist/:artist" element={<Artist/>}/>
                        <Route path="/ee/jeon2maid" element={<LilpaEasterEgg/>}/>
                        <Route path="/company" element={<Company/>}/>
                        <Route path="/lyrics" element={<Lyrics/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </Router>
            </div>
        );
    }
}

export default App;
