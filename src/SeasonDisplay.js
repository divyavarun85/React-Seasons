import './SeasonDisplay.css';
import React from 'react';

const getSeason = (lat,month) =>{
if((month<2) && (month>8)){
   return lat>0 ? 'winter':'summer';
}else{
    return lat>0 ? 'summer':'winter'; 
}

}
 const SeasonConfig = {
     summer:{
         text:'Lets hit the beach!',
         iconName:'sun'
     },
     winter:{
         text:'brr..its cold!!!',
         iconName:'snowflake'
     }
 }

const SeasonDisplay = props =>{
    const season = getSeason(props.lat, new Date().getMonth());
    const {text , iconName} = SeasonConfig[season];
    
  return  (
    <div className = {`season-display ${season}`}>
    <i className ={`${iconName} massive icon-left icon`}   />
      <h1>{text}</h1>
      <i className ={`${iconName} massive icon-right icon`}   />

</div>
  )
};

export default SeasonDisplay;