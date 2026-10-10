import { useRef } from "react"

const Header = ({navigationActive, setNavigationActive}) => {

    const thirdSpanInSidebarCollapse = useRef(null);
    
    const sidebarToggle = () => {
        thirdSpanInSidebarCollapse.current.classList.toggle("w-50");
        setNavigationActive(!navigationActive);
    }

    return (
        <header id="header" className="sticky-top">
            <nav className="primary-menu navbar navbar-expand-lg navbar-dropdown-dark">
                <div className="container-fluid">
                    <button id="sidebarCollapse" className="navbar-toggler d-block d-md-none" type="button" onClick={() => sidebarToggle()}><span></span><span className="w-75"></span><span ref={thirdSpanInSidebarCollapse} className="w-50"></span></button>

                    <a className="logo ml-md-3" href="index.html" title="iDocs Template"> <img src="assets/images/logo.png" alt="iDocs Template" /> </a>

                    {/* <ul className="social-icons social-icons-sm ml-lg-2 mr-2">
                        <li className="social-icons-twitter"><a data-toggle="tooltip" href="http://www.twitter.com/harnishdesign/" target="_blank" title="" data-original-title="Twitter"><i className="fab fa-twitter"></i></a></li>
                        <li className="social-icons-facebook"><a data-toggle="tooltip" href="http://www.facebook.com/harnishdesign/" target="_blank" title="" data-original-title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                        <li className="social-icons-dribbble"><a data-toggle="tooltip" href="http://www.dribbble.com/harnishdesign/" target="_blank" title="" data-original-title="Dribbble"><i className="fab fa-dribbble"></i></a></li>
                    </ul> */}
                </div>
            </nav>
        </header>
    )
}

export default Header