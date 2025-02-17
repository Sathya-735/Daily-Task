const box1=document.createElement('div')
const box2=document.createElement('div')
box1.classList.add('image')
box2.classList.add('content')

const parent=document.querySelector('.parent')

box1.innerHTML=`<img src="./assets/images/ecti.jpg" alt="">`
box2.innerHTML=`<h1>How Jobpath Works</h1>
<p>From entry-level positions to executive roles browse through.</p>
<div class="icon_content">
    <div class="icons">
    <img src="https://html.themewant.com/jobpath/template/assets/img/icon/create.svg"  alt="">
</div>
<div class="content">
    <h2>
        Create a Free Account
    </h2>
    <p>Consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit mollitia eum ipsum.</p>
</div>
</div>
<div class="icon_content">
    <div class="icons">
    <img src="https://html.themewant.com/jobpath/template/assets/img/icon/khata.svg"  alt="">
</div>
<div class="content">
    <h2>
        Make Your Resume Amazing
    </h2>
    <p>Consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit mollitia eum ipsum.</p>
</div>
</div>
<div class="icon_content">
    <div class="icons">
    <img src="https://html.themewant.com/jobpath/template/assets/img/icon/apply.svg" alt="" >
</div>
<div class="content">
    <h2>
        Apply job
    </h2>
    <p>Consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit mollitia eum ipsum.</p>
</div>
</div>`

parent.append(box1)
parent.append(box2) 