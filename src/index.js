import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';


// How this works: -

// when the page loads, construction function executes,then super, the state is null ,then 
//requests for geolocation this time(waiting time) page renders latitude as null.
// after geting resuts setState updates latitude value and page renders with updated value.



class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {lat:null,errorMessage : ''};

        window.navigator.geolocation.getCurrentPosition(
            position =>{
                this.setState({lat:position.coords.latitude}); //callback function
            },
            err =>{
                this.setState({errorMessage:err.message})
            }
        );

    }
    
    render(){
           if((this.state.lat)&& (!this.state.errorMessage)){
                return <div> lat:{this.state.lat}</div>
            }
            if((!this.state.lat) && (this.state.errorMessage)){
               return <div> Message :{this.state.errorMessage}</div>
            }

            if((!this.state.lat) && (!this.state.errorMessage)){
                return <div>Loading..</div>
            }
        
    }
}

reactDom.render(
    <App />,
    document.querySelector('#root')
);