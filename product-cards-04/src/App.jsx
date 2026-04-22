import React from 'react'
import Card from './components/Card'


const App = () => {

const products = [
  {
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=400&fit=crop&q=80",
    name: "MacBook Pro",
    tag1: "Laptop",
    tag2: "Space Gray",
    description: "Powerful laptop with M-series chip, Retina display, and all-day battery life.",
    price: "$1,299"
  },
  {
    image: "https://helios-i.mashable.com/imagery/articles/06p5PGAjzDSZysaktotmIwr/hero-image.fill.size_1200x1200.v1699805275.jpg",
    name: "Apple AirPods Pro",
    tag1: "Wireless",
    tag2: "White",
    description: "Active noise cancellation with transparency mode. Spatial audio for immersive listening.",
    price: "$249"
  },
  {
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop&q=80",
    name: "Premium Watch",
    tag1: "Smart Watch",
    tag2: "Silver",
    description: "Elegant timepiece with precision movement, sapphire crystal glass, and leather strap.",
    price: "$350"
  },
  {
    image: "https://i.ytimg.com/vi/0AHVQL01KPs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD3YaqDjq6ZoFmgOG3sdpjDhlhOxQ",
    name: "iPhone 15 Pro",
    tag1: "Smartphone",
    tag2: "Gray",
    description: "Pro-grade camera system, A17 Pro chip, and titanium design for ultimate performance.",
    price: "$999"
  },
  {
    image: "https://cdn2.fptshop.com.vn/unsafe/828x0/filters:format(webp):quality(75)/tai_nghe_bluetooth_choang_dau_wh_1000xm5_den_3_a07aebc1c8.jpg",
    name: "Sony WH-1000XM5",
    tag1: "Headphones",
    tag2: "black",
    description: "Industry-leading noise cancellation with 30-hour battery and crystal-clear audio.",
    price: "$350"
  },
  {
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&h=400&fit=crop&q=80",
    name: "Polaroid Camera",
    tag1: "Camera",
    tag2: "White",
    description: "Classic instant film camera that prints photos on the spot. Perfect for memories.",
    price: "$89"
  },
  {
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=400&fit=crop&q=80",
    name: "MacBook Air",
    tag1: "Laptop",
    tag2: "Silver",
    description: "Ultra-thin and light with all-day battery and stunning Liquid Retina display.",
    price: "$1,099"
  },
  {
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=400&fit=crop&q=80",
    name: "iPad Pro",
    tag1: "Tablet",
    tag2: "Space Gray",
    description: "Superfast M2 chip, stunning Liquid Retina display, and all-day battery in a thin design.",
    price: "$799"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Canon_EOS_R50_%2852694437103%29.jpg/500px-Canon_EOS_R50_%2852694437103%29.jpg",
    name: "Canon EOS R50",
    tag1: "Camera",
    tag2: "White",
    description: "Compact mirrorless camera with 24.2MP sensor, 4K video, and fast autofocus system.",
    price: "$679"
  },
  {
    image: "https://i.rtings.com/assets/products/y8VC5NUj/bose-soundlink-flex/design-medium.jpg?format=auto",
    name: "Bose SoundLink",
    tag1: "Bluetooth",
    tag2: "Black",
    description: "360-degree sound with deep bass, water-resistant build, and 12-hour playtime.",
    price: "$199"
  }
];
  return (
    <div className='parent'>
      {products.map(function(elem,idx){
        return <div key={idx}>
          <Card img={elem.image} name={elem.name} tag1={elem.tag1}
                tag2={elem.tag2} desp={elem.description} price={elem.price} />
        </div>
      })}
    </div>
  )
}

export default App
