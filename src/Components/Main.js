
import React, { Component } from "react";
import Navbar from './Navbar'
import Jumbotron from './Jumbotron'
import ProfessionalExperience from './ProfessionalExperience'

class Main extends Component {
    render(){
        return (
            <div>
        <Navbar/>
   
        <Jumbotron/>

        <ProfessionalExperience/>
        </div>
        )

    }
}



export default Main;