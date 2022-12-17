let bag=[];
let lipsticksProduct=[] ;
let url= "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish";
fetch(url)
.then((res)=> res.json())
.then((data)=>{
    bag=data;
    console.log (data)
    displayProduct(data);
})

function displayProduct(data){
    document.querySelector("#products").innerHTML="";
    data.forEach((elem)=>{
        let div= document.createElement("div");

        let productImg= document.createElement("img");
        productImg.setAttribute("src", elem.api_featured_image)

        let productTitle= document.createElement("h2");
        productTitle.innerText=elem.name;

        let productType= document.createElement("p");
        productType.innerText=elem.product_type;
        
        let productPrice=document.createElement("h3");
        productPrice.innerText=elem.price_sign+elem.price;

        let productRating=document.createElement("p");
        productRating.innerText= "Rating:- "+elem.rating;

        div.addEventListener("click" ,function(){
            lipsticksProduct.push(elem);
            localStorage.setItem("productDetail", JSON.stringify(lipsticksProduct));
        })
        div.append(productImg, productTitle, productType, productRating, productPrice);

        document.querySelector("#products").append(div);
    })
}
