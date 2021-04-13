import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import spinner from './spinner';
import Spinner from './spinner';



// How this works: -

// when the page loads, construction function executes,then super, the state is null ,then 
//requests for geolocation this time(waiting time) page renders latitude as null.
// after geting resuts setState updates latitude value and page renders with updated value.



class App extends React.Component {
    constructor(props){
        super(props);

      }

 state ={lat:null, errorMessage:''};

 componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position =>this.setState({lat:position.coords.latitude}), //callback function
            err =>this.setState({errorMessage:err.message})
        );
    }
   
//Hlper function

renderComponent(){
    if((this.state.lat)&& (!this.state.errorMessage)){
        return <SeasonDisplay lat = {this.state.lat} />;
         }
     if((!this.state.lat) && (this.state.errorMessage)){
               return <div> Message :{this.state.errorMessage}</div>
         }
     return <Spinner message = "Please accept the request..."/>
    }

    render(){
        return <div className ="border red">{this.renderComponent()}</div>
    }
    
}


reactDom.render(
    <App />,
    document.querySelector('#root')
);