document.addEventListener("DOMContentLoaded", () =>{
    fetchMenu()
    createNewRamen()
})

const urlLink = 'http://localhost:3000/ramens'

function fetchMenu(){
    fetch(urlLink)
        .then(res => res.json())
            .then(menu => menu.forEach(item => {
                displayfirstItem(item)
                displayMenuItems(item)

            }))
}

function displayfirstItem(item){
    if(item.id == 1){
        document.querySelector('.detail-image').src = item.image
        document.querySelector('.name').innerHTML = item.name
        document.querySelector('.restaurant').innerHTML = item.restaurant
        document.querySelector('#rating-display').innerHTML = item.rating
        document.querySelector('#comment-display').innerHTML = item.comment
    }
}

function displayMenuItems(item){
    let img = document.createElement('img')
    img.src = item.image
    document.getElementById('ramen-menu').appendChild(img)

    img.addEventListener('click', () => {
        document.querySelector('.detail-image').src = item.image
        document.querySelector('.name').innerHTML = item.name
        document.querySelector('.restaurant').innerHTML = item.restaurant
        document.querySelector('#rating-display').innerHTML = item.rating
        document.querySelector('#comment-display').innerHTML = item.comment

    })
}

let ramen = { }

function postRamen(){
    fetch(urlLink, {
        method:'POST',
        headers:{
            "content-type": "application/json",
            Accept: "application/json"
        },
        body:JSON.stringify(ramen)
    })
}

function createNewRamen(){
    document.querySelector('form').addEventListener('submit', (e)=>{
        e.preventDefault()
        let image = document.querySelector('#new-image').value
        let name = document.querySelector('#new-name').value
        let restaurant = document.querySelector('#new-restaurant').value
        let rating =  document.querySelector('#new-rating').value
        let comment= document.querySelector('#new-comment').value
        // console.log(name, restaurant, rating, comment)
        ramen.image = image
        ramen.name = name
        ramen.restaurant = restaurant
        ramen.rating = rating
        ramen.comment = comment

        postRamen()
        document.querySelector("form").reset()

    })
}
