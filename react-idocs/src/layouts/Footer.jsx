const Footer = () => {
    return (
        <footer id="footer" className="section bg-dark footer-text-light">
            <div className="container">
                <ul className="social-icons social-icons-lg social-icons-muted justify-content-center mb-3">
                    <li><a data-toggle="tooltip" href="https://twitter.com/harnishdesign/" target="_blank" title="" data-original-title="Twitter"><i className="fab fa-twitter"></i></a></li>
                    <li><a data-toggle="tooltip" href="http://www.facebook.com/harnishdesign/" target="_blank" title="" data-original-title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a data-toggle="tooltip" href="http://www.dribbble.com/harnishdesign/" target="_blank" title="" data-original-title="Dribbble"><i className="fab fa-dribbble"></i></a></li>
                    <li><a data-toggle="tooltip" href="http://www.github.com/" target="_blank" title="" data-original-title="GitHub"><i className="fab fa-github"></i></a></li>
                </ul>
                <p className="text-center">Copyright &copy; 2020 <a href="http://www.harnishdesign.net/idocs-one-page-documentation-html-template/">iDocs</a>. All Rights Reserved.</p>
                <p className="text-2 text-center mb-0">Design &amp; Develop by <a className="btn-link" target="_blank" href="http://www.harnishdesign.net/">HarnishDesign</a>.</p>
            </div>
        </footer>
    )
}

export default Footer