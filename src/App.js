import React, {useState, useEffect} from 'react'
import './App.css'
import ProductList from './components/ProductList'
import Cart from './components/Cart'


function App() {
  const [products]  = useState([
    {id: 1, name: 'egg', price: 50, instock: 2},
    {id: 2, name: 'fish', price: 60, instock: 3},
    {id: 3, name: 'rice', price: 70, instock: 3},
  ])
  const [cartItems, setCartItems] = useState([

  ])
    const [eggs, seteggs] = useState(0)
    const [eggsinstock, seteggsinstock] = useState(2)
    const [fishs, setfishs] = useState(0)
    const [fishsinstock, setfishsinstock] = useState(3)
    const [rices, setrices] = useState(0)
    const [ricesinstock, setricesinstock] = useState(2)

  const [total, settotal] = useState(0) 


  
 const quantities = {eggs:eggs, fishs:fishs, rices:rices}
 const instock = {eggs:eggsinstock, fishs:fishsinstock, rices:ricesinstock}

const LOCAL_STORAGE_KEY = "product.cart"
const LOCAL_STORAGE_KEY_EGGS = "eggs"
const LOCAL_STORAGE_KEY_FISHS = "fishs"
const LOCAL_STORAGE_KEY_RICES = "rices"
const LOCAL_STORAGE_KEY_EGGSINS = "eggs.ins"
const LOCAL_STORAGE_KEY_FISHSINS = "fishs.ins"
const LOCAL_STORAGE_KEY_RICESINS = "rices.ins"

 useEffect(()=>{
  const storedCartItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  const storedEggs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_EGGS))
  const storedFishs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_FISHS))
  const storedRices = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_RICES))
  const storedEggsIns = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_EGGSINS))
  const storedFishsIns = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_FISHSINS))
  const storedRicesIns = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_RICESINS))

  if (storedCartItems) setCartItems(storedCartItems)
  if (storedEggs) seteggs(storedEggs)
  if (storedFishs) setfishs(storedFishs)
  if (storedRices) setrices(storedRices)
  if (storedEggsIns) seteggsinstock(storedEggsIns)
  if (storedFishsIns) setfishsinstock(storedFishsIns)
  if (storedRicesIns) setricesinstock(storedRicesIns)
}, [])


  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartItems))
    localStorage.setItem(LOCAL_STORAGE_KEY_EGGS, JSON.stringify(eggs))
    localStorage.setItem(LOCAL_STORAGE_KEY_EGGSINS, JSON.stringify(eggsinstock))
    localStorage.setItem(LOCAL_STORAGE_KEY_FISHS, JSON.stringify(fishs))
    localStorage.setItem(LOCAL_STORAGE_KEY_FISHSINS, JSON.stringify(fishsinstock))
    localStorage.setItem(LOCAL_STORAGE_KEY_RICES, JSON.stringify(rices))
    localStorage.setItem(LOCAL_STORAGE_KEY_RICESINS, JSON.stringify(ricesinstock))
  }, [cartItems, eggs,eggsinstock,fishs,fishsinstock,rices,ricesinstock])




//Add to cart
  function addToCart(id, itemType) {
    const newItem = products.find((product)=> product.id === id)
    if(instock[itemType+"s"] === 0) return


    if (cartItems.includes(newItem)) {
      
      if (itemType === "egg") {seteggs((prev)=> prev+1); seteggsinstock((prev)=> prev-1);}
      if (itemType === "fish") {setfishs((prev)=> prev+1); setfishsinstock((prev)=> prev-1);}
      if (itemType === "rice") {setrices((prev)=> prev+1); setricesinstock((prev)=> prev-1);}

      return // don't go further if item already in cart
    }

    if (itemType === "egg") {seteggs((prev)=> prev+1);seteggsinstock((prev)=> prev-1);}
    if (itemType === "fish") {setfishs((prev)=> prev+1); setfishsinstock((prev)=> prev-1);}
    if (itemType === "rice") {setrices((prev)=> prev+1); setricesinstock((prev)=> prev-1);}

    
    setCartItems((prev)=>{
      return [...prev, newItem]
    })

  }

//Remove from cart
  function removeFromCart(id, cartItem) {
    // const item = products.find((product)=> product.id === id)

    function updateCart() {
      setCartItems((prev)=> {
        return prev.filter((items)=>{
          return items.id !== id
        })
      })
      return 0//dont go further
    }

    if (cartItem.name === "egg"){seteggsinstock((prev)=> prev+1); seteggs((prev)=> {if(prev === 1){updateCart()}  return prev-1})}
    if (cartItem.name === "fish"){setfishsinstock((prev)=> prev+1); setfishs((prev)=> {if(prev === 1){updateCart()} return prev-1})}
    if (cartItem.name === "rice"){setricesinstock((prev)=> prev+1); setrices((prev)=> {if(prev === 1){updateCart()} return prev-1})}


    //SETTERS
    // if (cartItem.name === "egg"){
      // seteggsinstock((prev)=> prev-1)
    //   seteggs((prev)=>{ 
    //     if (prev === 1) {
    //      set()
    //     }
    //     return prev-1})
    // } 
    // else if (cartItem.name === "fish") {
    //   setfishs((prev)=>{ 
    //     if (prev === 1) {
    //       set()
    //     }
    //     return prev-1})
    // }
    
    //UPDATE CART
    // if (cartItem) {
    //   setCartItems((prevCartItems)=> {
    //     return prevCartItems.filter((items)=>{
    //       return items.id !== id
    //     })
    //   })
    //   return
    // }
   
  }



  return (
    <div className="App">
      <ProductList products={products} addToCart={addToCart} instock={instock}/>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} quantities={quantities} total={total} settotal={settotal}/>
    </div>
  );
}

export default App;
