import React, {useState} from 'react'
import carts from '@/pages/api/Carts'
import {AiFillStar} from 'react-icons/ai'
import {BsStarHalf} from 'react-icons/bs'

const Cart = () => {
    const  filterCart = (cartItem) => {
        const result = carts.filter((curdata) => {
            return curdata.name === cartItem

           
        })
        setData(result)

    }

    const [data, setData] = useState(carts)
  return (
    <div className='cart-section'>
<h2>Popular Collections</h2>
<div className="button-section">
    <button onClick={() => setData(carts)}>ALL T-SHIRTS  /</button>
    <button onClick={() => filterCart("ALL POLOS")}>All POLOS</button>
</div>

<div className="carts-section md-8">
    <div className="row">
        {data.map((values) => {
            const {id, url, title, heading, price, available, } = values
            return(
                <>
                 <div className="col-12 col-md-2 col-lg-2">
                    <div className="card mt-4">
                        <img src={url} alt="" className='img-top' />
                        <div className="card-body">
                            <h6>{title}</h6>
                            <p>{heading}</p>
                            <div className="icons">
                                <AiFillStar className=' starIcon' />
                                <AiFillStar  className='starIcon'/>
                                <AiFillStar  className='starIcon'/>
                                <AiFillStar  className='starIcon'/>
                                <BsStarHalf className='starIcon'/>
                            </div>

                        </div>

                    </div>
                 </div>
                </>
            )
        })}

    </div>
</div>
    </div>
  )
}

export default Cart