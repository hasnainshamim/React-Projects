import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
    return (
        <Link to={`/product/${1}`} key={1} >
            <div className="card bg-base-100 w-72 mb-5 h-96  overflow-hidden" key={1}>
                <figure>
                    <img
                        src="https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-8-1.jpg"
                        className='h-80 w-full'
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h3 className="card-title">Card Title</h3>
                </div>
            </div>
        </Link>
    )
}

export default Card