function display(Data){
    Data.forEach(function (elem) {
        var container = document.createElement("div");
        var image = document.createElement("img");
        image.setAttribute("src", elem.image);
            
        var course_name = document.createElement("h2");
        course_name.innerText = elem.name;
    
        var course_desc = document.createElement("p");
        course_desc.innerText = elem.description;
    
        let div1 = document.createElement("div")
        div1.setAttribute("id","Course_details")
        div1.append(course_name,course_desc)
    
        var dicount = document.createElement("p")
        dicount.innerText ="₹"+elem.dicount
    
        var price = document.createElement("h5");
        price.innerText ="₹"+elem.price;
    
        var EMI = document.createElement("button")
        EMI.innerText = elem.EMI
    
    
        let div2 = document.createElement("div")
        div2.setAttribute("id","price_details")
        div2.append(dicount,price,EMI)
    
        var more = document.createElement("a")
        more.href = "google.com"
        more.innerText = "KNOW MORE"
    
        let button = document.createElement("button")
        button.innerText = "ADD TO CART"
        button.addEventListener("click",function(){
            addToCart(elem)
          })
    
        let div3 = document.createElement("div")
        div3.setAttribute("id","Functionality")
        div3.append(more,button)
    
        container.append(image, div1,div2, div3);
        document.querySelector("section").append(container);
      });
    
      var cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    
      function addToCart(elem){
        let isDuplicate = false
        if(cart.length==0)
        {
          cart.push(elem);
          localStorage.setItem("cart",JSON.stringify(cart))
          alert("Item added to cart")
        }
        else{
          for (let i=0; i<cart.length; i++){
            console.log(cart)
            if(elem.name==cart[i].name){
              isDuplicate =true;
              alert("Item already present in the cart")
              break
            }
          }
          if(!isDuplicate ){
            cart.push(elem);
            localStorage.setItem("cart",JSON.stringify(cart))
            alert("Item added to cart")
    
         }
        }
        
      }
}
  export {display}


  