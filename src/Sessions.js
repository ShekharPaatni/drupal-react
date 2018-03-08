import React from 'react'
import {Link} from 'react-router-dom'

export default class Sessions extends React.Component{

	  constructor(props){
	    super(props);
	    this.state={
	      details:{}
	    }
	  }

	componentDidMount(){
		let {match} = this.props;
		let id = match.params.id;

		fetch('http://local-www.d8withreactjs.com/api/sessions/'+id,
            {
                method: 'get'
            }).then(res => {
            return res.json()
            }).then((response) => {
            this.setState({details: response[0]})
        })
	}

	render(){
		return(
			<div>
			<Link to='/'>Back</Link>

			<div>
					<h4>Title</h4>
					<p>{this.state.details.title}</p>
					<h4>Presenter</h4>
					<p>{this.state.details.speaker}</p>
					<h4>Prerequisite</h4>
					<p>{this.state.details.prerequisite}</p>				
					<h4>Overview</h4>
					<div dangerouslySetInnerHTML={{__html:this.state.details.overview}} />
			</div>
			</div>
			)
	}
}