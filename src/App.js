import React, { Component } from 'react'
import "./App.css"

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {activeClass: ""}
    // this.handleScroll = this.handleScroll.bind(this)
  }
  
  componentDidMount(){
    window.addEventListener('scroll', () => {
       let activeClass = 'top';
       if(window.scrollY === 0){
           activeClass = '';
       }
       this.setState({ activeClass });
    });
}

componentWillUnmount() { window.removeEventListener('scroll'); }

// handleScroll(event) {
//   window.addEventListener('scroll', () => {
//     let activeClass = '';
//     if(window.scrollY === 0){
//         activeClass = 'top';
//     } else {
//       activeClass = ""
//     }
//     this.setState({ activeClass: "top" });
//  });
// }

  render() {
 

    
    return (
      <>
      <header className={this.state.activeClass}>
      <a href="#" className="logo">Logo</a>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </header>
      <section className="banner"></section>
      </>
    )
  }
}
