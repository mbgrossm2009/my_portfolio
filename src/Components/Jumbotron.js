import React, {Component} from "react"


class Jumbotron extends Component {
    render(){
        return (
            
            <div className="jumbotron">
            <h1 className="display-4">Welcome to my Portfolio!</h1>
            <p className="lead">Strong understanding of software engineering concepts and application development. A fast learner with analytical skills and a dedicated work ethic targeting an entry-level opportunity in Software Engineering.</p>
            <hr className="my-4"/>
            <p>JavaScript | ReactJS | Ruby on Rails | HTML | CSS</p>
            <p className="lead">
              <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
           
          </div>
        )
    }
}

export default Jumbotron

