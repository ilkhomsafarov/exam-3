const formEl=document.querySelector("#form")
const cardPrice=document.querySelector("#cardPrice")
const cardName=document.querySelector("#cardName")
const cardLists=document.querySelector("#cardLists")
const image = document.querySelector("#image")
const submitButton=document.querySelector("#submitButton")
const cardShef=document.querySelector("#cardShef")
const cardPlace=document.querySelector("#cardPlace")


function subFun(e){
    e.preventDefault();
    if(cardPrice.value.replace(/ /g, "").length>=1 && cardName.value.replace(/ /g, "").length>=5 &&  image.value.replace(/ /g, "").length>=5 && cardPlace.value.replace(/ /g, "").length>=5){
        const cardItemEl = document.createElement("div");
        cardItemEl.className = "cardItemEl"
        cardLists.prepend(cardItemEl);


        const cardItemWrapper = document.createElement("div")
        cardItemWrapper.className = "cardItemWrapper"
        cardItemEl.prepend(cardItemWrapper)

        const cardComplateEl = document.createElement("button")
        cardComplateEl.className = "cardComplateEl"
        cardComplateEl.innerHTML ="Taom tugadi"
        cardItemWrapper.prepend(cardComplateEl)
        cardComplateEl.addEventListener("click",()=>{
            cardItemEl.style.backgroundColor ="#C9F4A7"
            cardComplateEl.style.display ="none"
            cardComlateRemove.style.display ="block"
        })

        const cardComlateRemove = document.createElement("button")
        cardComlateRemove.className = "cardComlateRemove"
        cardComlateRemove.innerHTML ="Taom tugadi"
        cardItemWrapper.prepend(cardComlateRemove)
        cardComlateRemove.addEventListener("click",()=>{
            cardComplateEl.style.display ="block"
            cardItemEl.style.backgroundColor =""
            cardComlateRemove.style.display ="none"
        })


        const cardDateTime = document.createElement("button")
        cardDateTime.className = "cardDateTime"
        cardItemWrapper.prepend(cardDateTime)
        const date= new Date()
        cardDateTime.innerHTML=date.getMonth() + 1 +"/"+date.getDate()+"/"+date.getFullYear()


        const CardRemoveEl = document.createElement("button")
        CardRemoveEl.className = "CardRemoveEl"
        cardItemWrapper.prepend(CardRemoveEl)
        CardRemoveEl.innerHTML ="Taomni o’chirish"
        CardRemoveEl.addEventListener("click",()=>{
            let check = confirm("Are you sure to delete ?")
            if(check){
                cardItemEl.remove()
            }
        })


        const cardDescriptionEl = document.createElement("div")
        cardDescriptionEl.className = "cardDescriptionEl"
        cardItemEl.prepend(cardDescriptionEl)

        const cardPlaceWrapEl = document.createElement("div")
        cardPlaceWrapEl.className ="cardPlaceWrapEl"
        cardDescriptionEl.prepend(cardPlaceWrapEl)

        const cardPlaceEl = document.createElement("p")
        cardPlaceEl.className = "cardPlaceEl"
        cardPlaceWrapEl.prepend(cardPlaceEl)
        cardPlaceEl.appendChild(document.createTextNode(cardPlace.value))


        const cardPlaceStrong = document.createElement("strong")
        cardPlaceStrong.className ="cardPlaceStrong"
        cardPlaceWrapEl.prepend(cardPlaceStrong)
        cardPlaceStrong.appendChild(document.createTextNode("Taom restorani: "))

        const cardShefWrapEl = document.createElement("div")
        cardShefWrapEl.className ="cardShefWrapEl"
        cardDescriptionEl.prepend(cardShefWrapEl)

        const cardSehfNameEl = document.createElement("p")
        cardSehfNameEl.className ="cardSehfNameEl"
        cardShefWrapEl.prepend(cardSehfNameEl)
        cardSehfNameEl.appendChild(document.createTextNode(" " +cardShef.value))
        const cardShefStrongEl=document.createElement("strong")
        cardShefStrongEl.className ="cardShefStrongEl"
        cardShefWrapEl.prepend(cardShefStrongEl)
        cardShefStrongEl.appendChild(document.createTextNode("Taom oshpazi: "+" "))



        const cardPriceWrapEl = document.createElement("div")
        cardPriceWrapEl.className = "cardPriceWrapEl"
        cardDescriptionEl.prepend(cardPriceWrapEl)
        
        const cardPriceStrongEl = document.createElement("strong")
        cardPriceStrongEl.className ="cardPriceStrongEl"
        cardPriceWrapEl.prepend(cardPriceStrongEl)
        cardPriceStrongEl.appendChild(document.createTextNode("Taom narxi: $"+ cardPrice.value))

 
        const cardNameEl = document.createElement("div")
        cardNameEl.className = "cardNameEl"
        cardDescriptionEl.prepend(cardNameEl)

        const cardNamePEl = document.createElement("p");
        cardNamePEl.className = "cardNamePEl"
        cardNameEl.prepend(cardNamePEl);
        cardNamePEl.appendChild(document.createTextNode(" " +cardName.value))

        const cardNameStrongEl = document.createElement("strong")
        cardNameStrongEl.className ="cardNameStrongEl"
        cardNameEl.prepend(cardNameStrongEl);
        cardNameStrongEl.appendChild(document.createTextNode("Taom nomi: "+ " "))

        
        const cardImage = document.createElement("img")
        cardImage.className ="cardImage"
        cardItemEl.prepend(cardImage)
        cardImage.src = image.value
        
        cardName.value ='';
        cardPrice.value =''
        image.value =''
        cardPlace.value =''
        cardShef.value =''
    }
}

formEl.addEventListener("submit",subFun)