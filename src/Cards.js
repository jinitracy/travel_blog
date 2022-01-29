import React from "react";

export default function Cards(props){
    return(
        <>
        <div className="cards">
        <table>
           <tr className="row">
               <td>
               <img src={props.img} className="img"></img>
               </td>
               <td className="content">
            <img src="./images/location_icon.png" className="location_icon"></img>
            <p className="country">{props.country}</p>
            <a href="www.google.com" className="maps">{props.location_link}</a>
            <h1 className="place">{props.place}</h1>
            <h5 className="date-span">{props.location}</h5>
            <p className="description">{props.description}</p>
             </td>
           </tr>
           </table>
        </div>
        <hr/>
        </>
    )
}