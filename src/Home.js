import React from 'react'
import {Link} from 'react-router-dom'

export default class Home extends React.Component{

	  constructor(props){
	    super(props);
	    this.state={
	      data:[]
	    }
	  }


	componentDidMount(){

		fetch('http://local-www.d8withreactjs.com/api/sessions/all',
            {
                method: 'get'
            }).then(res => {
            return res.json()
            }).then((response) => {
            this.setState({data: response})
        })
	}

	render(){
		return(
			<div>
		        <h1>Session List</h1>
		        <ul>
		        {
		          this.state.data.map((item,i)=>
		           <li><p>
				       <Link to={'/sessions/'+item.nid} key={i} >
			              {item.title}			   
		               </Link> 
			           <small> {item.session_date}</small></p>
		            </li>
		          )
		        }
		        </ul>
			</div>
			)
	}
}