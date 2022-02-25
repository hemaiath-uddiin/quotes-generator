

const searchFood = ()=>{ 
    const input = document.getElementById('input-field');
    const inputValue = input.value ; 
      input.value = ""
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue} ` 
    
    fetch(url) 
    .then(res=>res.json()) 
    .then(data=>getMeals(data.meals)) 
    
  } 
const getMeals =(data)=>{ 
        const rows = document.getElementById('rows') 
           rows.textContent =""
        for(item of data){ 
             console.log(item);
            const div = document.createElement('div'); 
              
            div.classList.add('col') 
            div.innerHTML = ` 
            <div onclick='getInformation(${item.idMeal})' class="card h-100">
            <img  src='${item.strMealThumb}' class= img-fluid"card-img-top" alt="..." >
            <div class="card-body">
              <h5 class="card-title"> ${item.strMeal} </h5>
              <p class="card-text"> ${item.strInstructions.slice(0,100)} </p>
            </div>
          </div>
            
            
            ` 
            rows.appendChild(div)

          }
      
      }
    //single card
      const getInformation =(mealId)=>{ 
      const url =  fetch( `https://www.themealdb.com/api/json/v1/1/lookup.php? i=${mealId}`) 
      .then(res=> res.json()) 
      .then(data => displayInfor(data.meals[0]))
           
        
      } 
      const displayInfor =(id)=>{ 
         const details = document.getElementById('details')
           details.innerHTML =""
         const card = document.createElement('div') ;
            card.classList.add('card') ;
            card.innerHTML =` 
            <img  src=" ${id.strMealThumb}" class= img-fluid"card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${id.strInstructions.slice(0,100)}</h5>
              <p ${id.strInstructions}</p>
              <a href="${id.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>
            
            
            `
            details.appendChild(card)
      }
