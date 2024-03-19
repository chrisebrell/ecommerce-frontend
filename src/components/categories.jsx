import React from 'react';
import '../categories.style.scss'

const Categories = () => {
    const categories = [
        {
          "id": 1,
          "title": "Home & Living",
          "imageUrl": "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZSUyMGRlY29yfGVufDB8fDB8fHww"
        },
        {
          "id": 2,
          "title": "Clothing",
          "imageUrl": "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D"
        },
        {
          "id": 3,
          "title": "Electronics & Accessories",
          "imageUrl": "https://images.unsplash.com/photo-1593344484962-796055d4a3a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww"
        },
        {
          "id": 4,
          "title": "Art & Collectibles",
          "imageUrl": "https://images.unsplash.com/photo-1695142258314-180ea86bdb48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFydCUyMGNvbGxlY3RpYmxlc3xlbnwwfHwwfHx8MA%3D%3D"
        },
        {
          "id": 5,
          "title": "Toys & Games",
          "imageUrl": "https://media.istockphoto.com/id/667108156/photo/colorful-plastic-toys-in-childrens-room.webp?b=1&s=170667a&w=0&k=20&c=GUWvypsmaA369EL5uCdGjo5TKxCw98hP-_6rgwHmJUI="
        }
      ]

      return (
        <div className="categories-container">
            {
                categories.map((category) => {
                    return (
                    <div key={category.id} className="category-container">
                        <div className='background-image' style={{backgroundImage: `url(${category.imageUrl})`}}  />
                        <div className='category-body-container'>
                            <h2>{category.title}</h2>
                            <p>Shop Now</p>
                        </div>    
                    </div>
                    )
                })
            }
        </div>
      )
}

export default Categories;