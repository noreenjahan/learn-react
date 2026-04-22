import React from 'react'
import {Heart} from 'lucide-react'
const Card = (props) => {
    return (
        <div className='card'>
             <div className="top">
                <img src={props.img} alt="" />
                <Heart className='icon' color='beige'/>
            </div>

                <div className="center">
                    
                    <div className='ctags'>
                        <div className="tag1"><h4>{props.tag1}</h4></div>
                        <div className="tag2"><h4>{props.tag2}</h4></div>
                        
                    </div>
                    <h2>{props.name}</h2>
                    <div className='desp'><p>{props.desp}</p></div>
                </div>

                <div className="bottom">
                    <div className='price'>
                    <span>Price</span>
                    <span className='dtag'>{props.price}</span>
                    </div>
                    <button>Add to cart</button>
                </div>
                
            </div>
    )
}

export default Card
