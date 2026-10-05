/**
*   Created By Osman DURDAG
*/

import { Component } from 'react'
import Card from './Card';
import leftArrow from "../assets/images/left-arrow.png";
import rightArrow from "../assets/images/right-arrow.png";
import Strings from "../lang/lang";

export default class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pageNumber : 0,
            assignmentList : [],
            pageCount : 0
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.assignmentList !== nextProps.assignmentList) {
            let pageCount = Math.trunc(nextProps.assignmentList.length / 3) * 3 < nextProps.assignmentList.length ? Math.trunc(nextProps.assignmentList.length / 3) + 1 : Math.trunc(nextProps.assignmentList.length / 3);
            return { 
                assignmentList: nextProps.assignmentList,
                pageCount,
                pageNumber : 0
            };
        }
    
        return null;
    }

    handleSaveToPC(jsonData) {
        const fileData = JSON.stringify(jsonData, null, 4);
        const blob = new Blob([fileData], {type: "text/plain"});
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = 'assignmentList.json';
        link.href = url;
        link.click();
    }

    render() {
        return (
            <main>
                <button
                    disabled={this.state.pageNumber === 0 || this.state.pageCount === 0}
                    onClick={()=>{
                        this.setState({
                            pageNumber : this.state.pageNumber > 0 ? this.state.pageNumber - 1 : 0
                        });
                    }}
                >
                    <img
                        className="arrow"
                        src={leftArrow}
                        alt="left-arrow"
                    />
                </button>
                <div className={"cardArea"}>
                    {
                        this.state.pageCount === 0 ? Strings.noContent :
                        this.props.assignmentList.slice(this.state.pageNumber * 3, this.state.pageNumber * 3 + 3).map((item, index) => {
                            let backgroundColor = "";
                            let backgroundHoverColor = "";
                            if(item.enContent.status === "Not Responded"){
                                backgroundColor = "--not-responded-face-color";
                                backgroundHoverColor = "--not-responded-face-hover-color";
                            }
                            else if(item.enContent.status === "Under Review"){
                                backgroundColor = "--under-review-face-color";
                                backgroundHoverColor = "--under-review-face-hover-color";
                            }
                            else if(item.enContent.status === "Success"){
                                backgroundColor = "--success-face-color";
                                backgroundHoverColor = "--success-face-hover-color";
                            }
                            else if(item.enContent.status === "Continues"){
                                if(item.gender === "male"){
                                    backgroundColor = "--man-face-color";
                                    backgroundHoverColor = "--man-face-hover-color";
                                }
                                else{
                                    backgroundColor = "--woman-face-color";
                                    backgroundHoverColor = "--woman-face-hover-color";
                                }
                            }
                            else if(item.enContent.status === "On Assesment"){
                                backgroundColor = "--on-assesment-face-color";
                                backgroundHoverColor = "--on-assesment-face-hover-color";
                            }
                            else if(item.enContent.status === "Denied"){
                                backgroundColor = "--denied-face-color";
                                backgroundHoverColor = "--denied-face-hover-color";
                            }
                            return <Card
                                key={`cardItem${index}`}
                                person={item}
                                background = {backgroundColor}
                                backgroundHover = {backgroundHoverColor}
                                modalToggle = {this.props.modalToggle}
                            />
                        })
                    }
                </div>
                <button 
                    disabled={this.state.pageNumber === this.state.pageCount - 1 || this.state.pageCount === 0}
                    onClick={()=>{
                        this.setState({
                            pageNumber : this.state.pageNumber + 1
                        })
                    }}
                >
                    <img
                        className="arrow"
                        src={rightArrow}
                        alt="right-arrow"
                    />
                </button>
            </main>
        )
    }
}
