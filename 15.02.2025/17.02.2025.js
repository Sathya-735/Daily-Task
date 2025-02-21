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
// 3. What steps would you take to toggle the visibility of a <p> element by adding and
// removing a CSS class using JavaScript?
const listcontainer=document.querySelector('.toodolistbox')
const bton=document.querySelector('#bton')
const input=document.querySelector('#name') 
const listhead=document.querySelector('.listhead')

bton.addEventListener('click',()=>{
    actionlist=document.createElement('li')
    const removebutton=document.createElement('button')
    removebutton.innerText='x'
    userinput=input.value
    actionlist.innerText=userinput
    listhead.append(actionlist)
    actionlist.append(removebutton)
    removebutton.addEventListener('click',()=>{
        removebutton.parentNode.remove()
    })
})

// 4. How can you dynamically add a new list item to an unordered list using
// JavaScript?

const ullist=document.createElement('ul')
ullist.innerHTML=`<li>hii</li>
<li>heloo</li>
<li>how are you</li>`

container.append(ullist)

 

// 5. What approach would you use to remove a specific list item from an unordered
// list when a button next to it is clicked?

let para=document.querySelector('.myParagraph')
let bn=document.querySelector('#btn')
function visibility()
{
    para.classList.toggle('show')
}
bn.addEventListener('click',visibility)


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

// 7. How can you update the text content of a <p> element based on user input from a
// text field when a button is clicked?

const updatepara=document.querySelector('.updatepara')
const inputbox=document.querySelector('#content')
const updatebutton=document.querySelector('#updatebutton')

const mypara=document.querySelector('.mypara')

updatebutton.addEventListener('click',()=>{
    mypara.innerText=`your input-value is:${inputbox.value}`

})














