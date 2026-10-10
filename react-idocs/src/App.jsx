import { useState } from "react";
import Loader from "./components/Loader";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";
import { articles } from "./data/cardData";
import Card from "./components/Card";
import { Route, Routes } from "react-router";
import { sidebarMenuContent } from "./data/sidebarMenuContent";

function App() {

    const [navigationActive, setNavigationActive] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Loader />

            <div id="main-wrapper">

                <Header navigationActive={navigationActive} setNavigationActive={setNavigationActive} />

                <div id="content" role="main">
                    <Sidebar navigationClass={navigationActive ? "active" : ""} />

                    <div className="idocs-content">
                        <div className="container">

                            <section id="idocs_start">
                                <h1>Title</h1>
                                <h2>SubTitle</h2>
                                <h3>SubSubTitle</h3>
                            </section>

                            <hr className="divider" />

                            <section id="articles">
                                <div className="accordion" id="accordionDefault">
                                    {
                                        articles.map((article, index) => (
                                            <Card
                                                key={`article_${index}`}
                                                id={index}
                                                article={article}
                                            />
                                        ))
                                    }
                                </div>
                            </section>

                            <Routes>
                                {
                                    sidebarMenuContent.map((item, index) => (
                                        item.subMenu ?
                                            <Route path = {item.href}>
                                                <Route index element = {item.element} />
                                                {
                                                    item.subMenu.map((subItem, index) => (
                                                        <Route key={`${index}_sub_${index}`} path={subItem.href} element = {subItem.element} />
                                                    ))
                                                }
                                                
                                            </Route>
                                        : 
                                        item.href === "/" ? 
                                            <Route index key={`route_${index}`} path={item.href} element = {item.element}/>
                                        :
                                            <Route key={`route_${index}`} path={item.href} element = {item.element}/>
                                    ))
                                }
                            </Routes>

                        </div>
                    </div>

                </div>



                <Footer />

            </div>
            <button id="back-to-top" data-toggle="tooltip" title="Back to Top" onClick={scrollToTop}><i
                className="fa fa-chevron-up"></i></button>
        </>
    )
};

export default App;