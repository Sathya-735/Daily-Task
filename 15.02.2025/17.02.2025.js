// 1. How would you change the text content of a specific element on the page using
// JavaScript?


const head2=document.querySelector('h2')

console.log(head2);

head2.innerText=`hello`

console.log(head2);

// 2. How can you change the background color of a <div> element when a button is
// clicked?
const container=document.querySelector('.container')
const btn=document.createElement('button')
const box=document.createElement('div')
btn.textContent=`click`
function Click_action(){
    box.style.backgroundColor="black";
}

btn.addEventListener('click',Click_action)


container.append(btn)
container.append(box)
console.log(container);

// 4. How can you dynamically add a new list item to an unordered list using
// JavaScript?

const ullist=document.createElement('ul')
ullist.innerHTML=`<li>hii</li>
<li>heloo</li>
<li>how are you</li>`

container.append(ullist)

// 6.How would you modify the src attribute of an <img> element to display a
// different image when a button is clicked?

const bttn=document.createElement('button')
bttn.textContent=`click to see next image`

const image_container=document.querySelector('.image_container')

const image=document.createElement('img')
const setat=image.setAttribute('src','https://i.pinimg.com/736x/ef/20/39/ef2039a1f8e7936c64c2ab5e20484827.jpg')
image_container.append(bttn)
image_container.append(image)

function change_image(){
    image.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQATSZE5T6d68dwd0kKIho1LH-ffiVtTEkjyA&s')  
}
bttn.addEventListener('click',change_image) 

// 5. What approach would you use to remove a specific list item from an unordered
// list when a button next to it is clicked?

// const list_container=document.querySelector('.list_container')
// const list_and_button=document.createElement('ul')

// list_and_button.innerHTML=`<li>first</li>
// <li>second</li>
// <li>third</li>
// <button>x</button>
// <button>x</button>
// `


// list_container.append(list_and_button)
// function removeusingbutton(button)
// {
   
          
// }

// list_and_button.addEventListener('click',removeusingbutton)


// 3. What steps would you take to toggle the visibility of a <p> element by adding and
// removing a CSS class using JavaScript?








