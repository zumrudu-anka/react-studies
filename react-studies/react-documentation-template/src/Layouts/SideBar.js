/**
*   @author Osman DURDAĞ
*   @version 0.0.1
*   @since 05.12.2020
*   @copyright Osman DURDAĞ
*/

import React from 'react'

export default function SideBar(id) {
    
    let getList = () => {
        return(
            this.props.menuContent.map(
                menuSection => <>
                                <div
                                    className = {
                                        this.props.chosenMenu === menuSection.id ? `sideBarTitleItem active` : `sideBarTitleItem`
                                    }
                                    key = {menuSection.id}
                                    onClick = {() => this.props.selectMenu(menuSection.id)}
                                >
                                    {menuSection.title}
                                </div>
                                <div className = {"sideBarMenuSection"}>
                                {menuSection.content.map(
                                    menuItem => <div
                                                    className = {
                                                        this.props.chosenMenu === menuItem.id ? `sideBarItem active` : `sideBarItem`
                                                    }
                                                    key = {menuItem.id}
                                                    onClick = {() => this.props.selectMenu(menuItem.id)}
                                                >
                                                    {menuItem.title}
                                                </div>
                                )}
                                </div>
                            </>
            )
        );
    }
    
    return (
        <div className = {"sideBar"}>
                <div
                    className = {
                        this.props.chosenMenu === this.props.id ? `sideBarIntroItem active` : `sideBarIntroItem`
                    }
                    onClick = {() => this.props.selectMenu(this.props.id)}
                >
                    {this.props.title}
                </div>
                {this.getList()}
            </div>
    )
}
