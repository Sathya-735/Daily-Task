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