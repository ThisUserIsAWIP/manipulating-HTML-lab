window.addEventListener('DOMContentLoaded', function (){
    let alertBtn = document.createElement('button');
    document.body.appendChild(alertBtn);
    alertBtn.addEventListener('click', function () {
        alert("I hope you have a great day")
    })
    let btnSubmit = document.getElementById("btnSubmit")
    btnSubmit.addEventListener('click', function () {
        let txt = document.getElementById('input').Value;
        alert(txt);
    });
    let colorDiv = document.getElementById('colorDiv')
    colorDiv.style.backgroundColor = 'red'
    colorDiv.style.width = '100px'
    colorDiv.style.height = '100px'
    colorDiv.addEventListener('mouseover', function () {
        colorDiv.style.backgroundColor = 'blue'
    });
    colorDiv.addEventListener('mouseout', function () {
        colorDiv.style.backgroundColor = 'red'
    });
    let p = document.createElement('p');
    let ptxt = document.createTextNode('I am some text in a paragraph');
    p.appendChild(ptxt);
    document.body.appendChild(p);
    let colors = ['blue', 'peach', 'pink', 'red', 'orange', 'green', 'yellow', 'purple']
        p.addEventListener('click', function () {
            let randomnumber = Math.floor(Math.random() * colors.length)
            p.style.color = colors[randomnumber]
        });
    let spanBtn = document.createElement('button')
    let spanDiv = document.createElement('div')
    document.body.appendChild(spanBtn)
    document.body.appendChild(spanDiv)
    spanDiv.style.backgroundColor = 'white'
    spanDiv.style.width = '100px'
    spanDiv.style.height = '100px'
    spanBtn.addEventListener('click', function () {
        let span = document.createElement('span');
        let spantxt = document.createTextNode('Colter Crockett');
        span.appendChild(spantxt);
        spanDiv.appendChild(span);
    })
    let ulBtn = document.getElementById('ulBtn');
    let ul = document.getElementById('ul');
    document.body.appendChild(ulBtn);
    document.body.appendChild(ul)
    let friends = ['john','jacob','sarah','steve', 'ryan', 'shelly', 'rob', 'bill', 'michael', 'alice']
    ulBtn.addEventListener('click', function () {
        for (let friendName of friends) {
            let li = document.createElement('li')
            let litxt = document.createTextNode(friendName)
            li.appendChild(litxt)
            ul.appendChild(li)
        }
    })  
});