  
  const getData = ()=>{ 
      fetch('https://api.kanye.rest/') 
      .then(res=> res.json()) 
      .then(data=> displayed(data))
  }
const displayed =(data)=>{ 
      const p = document.getElementById("p") ;
       const {quote} = data 
       p.innerText = quote
     } 
     
