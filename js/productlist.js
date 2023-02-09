// https://kea-alt-del.dk/t7/api/products/

fetch("https://kea-alt-del.dk/t7/api/products/")
.then(res=>res.json())
.then (showProducts);

function showProducts(products){
    //looper og kalder showProduct
    products.forEach(showProduct)
}

function showProduct(product){
    console.log(product);
    // fang template
const template = document.querySelector("#smallProductTemplate").content;
    // lav kopi
const copy = template.cloneNode(true);
    // ændre indhold
copy.querySelector("h3").textContent = product.productdisplayname;
copy.querySelector(".price").textContent = product.price;
copy.querySelector(".brand").textContent = product.brandname;
copy.querySelector(".img").src=`https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`
if(product.soldout){
    //produktet er udsolgt
    copy.querySelector("article").classList.add("soldOut");
}
copy.querySelector(".read-more").setAttribute("href", `product.html?id=${product.id}`);  
    //append
    document.querySelector("main").appendChild(copy);

}

/*
     <article class="smallProduct">
            <img src="https://kea-alt-del.dk/t7/images/webp/1000/1163.webp" alt="Sahara Team India Fanwear Round Neck Jersey">
            <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
            <p class="subtle">Tshirts | Nike</p>
            <p class="price"><span>Prev.</span> DKK 1595,-</p>
            <div class="discounted">
              <p>Now DKK 1560,-</p>
              <p>-34%</p>
            </div>
            <a class="read-more" href="product.html">Read More</a>
        </article>
*/

/* 
{
  "id": 1525,
  "gender": "Unisex",
  "category": "Accessories",
  "subcategory": "Bags",
  "articletype": "Backpacks",
  "basecolour": "Navy Blue",
  "season": "Fall",
  "productionyear": 2010,
  "usagetype": "Casual",
  "productdisplayname": "Deck Navy Blue Backpack",
  "parsed": 1,
  "soldout": 0,
  "relid": 1525,
  "price": 1299,
  "discount": 55,
  "variantname": "Deck Backpack",
  "brandname": "Puma",
  "brandbio": "PUMA is the World's Fastest Sports Brand",
  "brandimage": "http://assets.myntassets.com/assets/images/2015/11/17/11447736932686-113016-3ff8sf.jpg",
  "agegroup": "Adults-Unisex",
  "colour1": "NA",
  "colour2": "NA",
  "fashiontype": "Fashion",
  "materialcaredesc": null,
  "sizefitdesc": null,
  "description": "<p>asfafaf<br> kasjhdkashd</p>",
  "styledesc": null
}

*/

