import React,{useState,useEffect} from 'react'

function Fetch(){
const[quotes,setQoutes]=useState([])




useEffect(()=>{
    const fetchQuote =async() => {
try {
    const response =await fetch("https://dummyjson.com/quotes")
    const jsonData= await response.json()
    console.log(jsonData);
    setQoutes([jsonData.quotes[Math.floor(Math.random()*jsonData.quotes.length)]])
}
catch(e){
    console.error("error")
}
}
fetchQuote()
},[])




  return (
    <div>
<ul>
{quotes.map(quote => (<li key={quote.id}><h1>"{quote.quote}"</h1></li>))}
</ul>


    </div>
  )
}

export default Fetch