/**
*   Created By Osman DURDAG
*/

import { Component } from 'react';
import Footer from './components/Footer';
import Main from './components/Main';
import Modal from './components/Modal';
import Nav from './components/Nav';
import Shared from "./config/Shared";
import Strings from "./lang/lang";
import assignmentList from "./data/assignmentList.json";

Strings.setLanguage(Shared.lang ? Shared.lang : Shared.defaultLang);

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state={
      pageClass : "page",
      modalIsOpened : false,
      profession : "web",
      android : assignmentList.android,
      web : assignmentList.web,
      graphic : assignmentList.graphic,
      selectedList : assignmentList.web
    };

    Shared.root = this;
  }

  closeModal(){
    this.setState({
      pageClass : "page",
      modalIsOpened : false
    });
  }

  selectProfession = (event) => {
    let profession  = event.target.value;
    let selectedList = assignmentList[`${profession}`];
    this.setState({
      profession,
      selectedList
    });
  }

  render() {

    return (
      <>
        <div className={this.state.pageClass}>
          <Nav selectProfession = {this.selectProfession}/>
          <Main
            modalToggle={() => {
                this.setState({
                  pageClass : "page active",
                  modalIsOpened : true
                })
            }}
            assignmentList = {this.state.selectedList}
          />
          <Footer/>
          
        </div>
        <Modal
          modalIsOpened = {this.state.modalIsOpened}
          closeModal = {() => this.closeModal()}
        />
      </>
    )
  }
}
