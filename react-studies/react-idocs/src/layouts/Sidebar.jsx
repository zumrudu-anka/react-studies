import { NavLink } from "react-router";
import { sidebarMenuContent } from "../data/sidebarMenuContent"

const Sidebar = ({ navigationClass }) => {
    
    const containerStyle = {
        width: '280px',
        height: '100vh',
        overflowY: 'auto',
        backgroundColor: '#ffffff',
        borderRight: '1px solid #e2e8f0',
        padding: '2rem 1.25rem',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        boxShadow: '4px 0 15px rgba(0, 0, 0, 0.02)'
    };

    const listStyle = {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.25rem'
    };

    const subListStyle = {
        listStyle: 'none',
        paddingLeft: '1rem',
        marginLeft: '0.75rem',
        borderLeft: '2px solid #f1f5f9',
        marginTop: '0.25rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.25rem'
    };

    const getNavLinkStyle = ({ isActive }) => ({
        display: 'block',
        borderRadius: '8px',
        textDecoration: 'none',
        fontSize: '0.95rem',
        fontWeight: isActive ? '600' : '500',
        color: isActive ? '#2563eb' : '#475569', // Aktifken belirgin mavi, değilken arduvaz gri
        backgroundColor: isActive ? '#eff6ff' : 'transparent', // Aktifken açık mavi arka plan
        transition: 'all 0.2s ease',
    });

    const listSidebarMenu = menu => {
        return menu.map((menuItem, index) => (
            <li key={`sidebarItem${menuItem.title}_${index}`} className="nav-item">
                <NavLink 
                    className="nav-link" 
                    to={`${menuItem.href}`}
                    style={getNavLinkStyle}
                >
                    {menuItem.title}
                </NavLink>
                
                {menuItem.subMenu ? 
                    <ul className="nav flex-column " style={subListStyle}>
                        {listSidebarMenu(menuItem.subMenu)}
                    </ul>
                    : null
            }
            </li>
        ));
    }
    
    return (
        <div className={`idocs-navigation bg-light ${navigationClass}`} style={containerStyle}>
            <ul className="nav flex-column" style={listStyle}>
                {
                    listSidebarMenu(sidebarMenuContent)
                }
                
                {/* <li className="nav-item"><a className="nav-link active" href="#idocs_start">Getting Started</a>
                    <ul className="nav flex-column">
                        <li className="nav-item"><a className="nav-link" href="#idocs_installation">Installation</a></li>
                        <li className="nav-item"><a className="nav-link" href="#idocs_html_structure">HTML Structure</a></li>
                        <li className="nav-item"><a className="nav-link" href="#idocs_sass">Sass</a></li>
                        <li className="nav-item"><a className="nav-link" href="#idocs_color_schemes">Color Schemes</a></li>
                        <li className="nav-item"><a className="nav-link" href="#idocs_theme_customization">Customization</a></li>
                        <li className="nav-item"><a className="nav-link" href="#idocs_logo_settings">Logo Settings</a></li>
                    </ul>
                </li>
                <li className="nav-item"><a className="nav-link" href="#idocs_layout">Layout</a>
                    <ul className="nav flex-column">
                        <li className="nav-item"><a className="nav-link" href="#idocs_header">Header</a></li>
                        <li className="nav-item"><a className="nav-link" href="#idocs_navbar">Navbar</a></li>
                        <li className="nav-item"><a className="nav-link" href="#idocs_sidebar">Sidebar</a></li>
                        <li className="nav-item"><a className="nav-link" href="#idocs_footer">Footer</a></li>
                        <li className="nav-item"><a className="nav-link" href="#idocs_box_layout">Box Layout</a></li>
                    </ul>
                </li>
                <li className="nav-item"><a className="nav-link" href="#idocs_content">Content</a>
                    <ul className="nav flex-column">
                        <li className="nav-item"><a className="nav-link" href="#idocs_typography">Typography</a></li>
                        <li className="nav-item"><a className="nav-link" href="#idocs_code">Code</a></li>
                        <li className="nav-item"><a className="nav-link" href="#idocs_table">Table</a></li>
                        <li className="nav-item"><a className="nav-link" href="#idocs_icons">Icons</a></li>
                        <li className="nav-item"><a className="nav-link" href="#idocs_image">Image</a></li>
                        <li className="nav-item"><a className="nav-link" href="#idocs_video">Video</a></li>
                    </ul>
                </li>
                <li className="nav-item"><a className="nav-link" href="#idocs_components">Components</a>
                    <ul className="nav flex-column">
                        <li className="nav-item"><a className="nav-link" href="#idocs_accordion">Accordion</a></li>
                        <li className="nav-item"><a className="nav-link" href="#idocs_tabs">Tabs</a></li>
                        <li className="nav-item"><a className="nav-link" href="#idocs_social_icon">Social Icon</a></li>
                        <li className="nav-item"><a className="nav-link" href="#idocs_helper_classNamees">Helper classNamees</a></li>
                    </ul>
                </li>
                <li className="nav-item"><a className="nav-link" href="#idocs_faq">FAQ</a></li>
                <li className="nav-item"><a className="nav-link" href="#idocs_source_credits">Source & Credits</a></li>
                <li className="nav-item"><a className="nav-link" href="#idocs_support">Support</a></li>
                <li className="nav-item"><a className="nav-link" href="#idocs_templates">More Templates</a></li>
                <li className="nav-item"><a className="nav-link" href="#idocs_changelog">Changelog</a>
                    <ul className="nav flex-column">
                        <li className="nav-item"><a className="nav-link" href="#v1-1">v1.1</a></li>
                        <li className="nav-item"><a className="nav-link" href="#v1-0">v1.0</a></li>
                    </ul>
                </li> */}
            </ul>
        </div>
    )
}

export default Sidebar