import { useState } from 'react'
import Document from '../Layouts/Document';
import SideBar from '../Layouts/SideBar';
import X from "./X";
import Y from "./Y";

export default function XDocs() {

    const [defaultChosenMenu, setDefaultChosenMenu] = useState("intro");
    const [defaultChosenContent, setDefaultChosenContent] = useState((<X/>));
    const [contents, setContents] = useState({
        intro : (<X/>),
        otherContent : (<Y/>), 
    });
    const [sideBarMenu, setSideBarMenu] = useState([
        {
            "id" : "otherContent",
            "title" : "Other Content",
            "content" : [
                {
                    "id" : "otherContent1",
                    "title" : "Other Content 1"
                },
                {
                    "id" : "otherContent2",
                    "title" : "Other Content 2"
                }
            ]
        },
        {
            "id" : "otherContent2",
            "title" : "Other Content 2",
            "content" : [
                {
                    "id" : "otherContent21",
                    "title" : "Other Content 2.1"
                },
                {
                    "id" : "otherContent22",
                    "title" : "Other Content 2.2"
                }
            ]
        }
    ]);
    const [chosenMenu, setChosenMenu] = useState(defaultChosenMenu);
    const [chosenContent, setChosenContent] = useState(defaultChosenContent);

    let selectMenu = (selectedMenu) => {
        setChosenMenu(selectedMenu);
        setChosenContent(contents[`${selectedMenu}`]);
    }

    return (
        <Document>
            <SideBar
                id = {"intro"}
                title = {"X"}
                menuContent = {sideBarMenu}
                selectMenu = {selectMenu}
                chosenMenu = {chosenMenu}
            />
            <div className = {"pageContent"}>
                {chosenContent}
            </div>
        </Document>
    )
}
