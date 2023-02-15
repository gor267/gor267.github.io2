import React, { useState } from "react";
import Modal from "./Modal";
import './style.css'


const Card= ({book})=>{
    console.log(book);
       const [show,setShow] = useState(false);
       const [bookItem, setItem] = useState();
   return(
    <>
    {
        book.map((item) => {
            let  thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
            // let  amount = item.seleInfo.country;
                if(thumbnail !== undefined){
                    return(
                        <>
                        <div className="card" onClick={()=>{setShow(true);setItem(item)}}>
                            <img src={thumbnail} alt=""/>
                            <div className="botton">
                                <h3 className="title">{item.volumeInfo.title}</h3>
                                <p className="amount">&#8377;4563</p>
                         </ div>
                        </div> 
                        <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
                        </>     
                    )
                }
                
            
        })
    }   
    </>
   )
}

export default Card
