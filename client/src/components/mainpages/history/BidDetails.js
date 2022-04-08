import React, {useState, useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'

function BidDetails() {
    const state = useContext(GlobalState)
    const [history] = state.userAPI.history
    const [bidDetails, setbidDetails] = useState([])

    const params = useParams()

    useEffect(() => {
        if(params.id){
            history.forEach(item =>{
                if(item._id === params.id) setbidDetails(item)
            })
        }
    },[params.id, history])


    if(bidDetails.length === 0) return null;

    return (
        <div className="history-page">

            <table style={{margin: "30px 0px"}}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Property</th>
                        <th>Times of Bid</th>
                        <th>Bid payment</th>
                        <th>Bid amount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bidDetails.cart.map(item =>(
                        <tr key={item._id}>
                            <td><img src={item.images.url} alt="" /></td>
                            <td>{item.title}</td>
                            <td>{item.frequency}</td>
                            <td>$ {item.price * 0.02 * item.frequency}</td>
                            <td>$ {item.price + 400 }</td>
                        </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        </div>
    )
}

export default BidDetails