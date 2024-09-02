import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            UserInfo : {
                name :'dummy',
                location:'Delhi'
            }
        }
    }
    async componentDidMount(){
        const data = await fetch('https://api.github.com/users/akshaymarch7');
        const jsonData = await data.json();
        console.log(jsonData)        
        this.setState({
            UserInfo : jsonData 
        })
        console.log(this.state.UserInfo)
    }
    
    render(){
        const {name , location} = this.state.UserInfo ;
        return(
            <div>
                <img src={this.state.UserInfo.avatar_url} alt="display-pic"/>
            <h1>{this.state.UserInfo.name}</h1>
            <h2>{this.state.UserInfo.location}</h2>
            </div>
            
        )
    }
}
export default UserClass ;