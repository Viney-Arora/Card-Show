
const firstbtn=document.querySelector('.a');
const secondbtn=document.querySelector('.b');
const thirdbtn=document.querySelector('.c');
const crossbtn=document.querySelectorAll('.cross');

const overlay=document.querySelector('.overlay')
const firstbox =document.querySelector('.first')
const secondbox= document.querySelector('.second')
const thirdbox= document.querySelector('.third')



function disappear()
{
    console.log('disappear all')
    if(firstbox.classList.contains('box'))
        firstbox.classList.add('hidden');
        overlay.classList.add('hidden');
    
    if(secondbox.classList.contains('box'))
        secondbox.classList.add('hidden');
        overlay.classList.add('hidden');
    
    if(thirdbox.classList.contains('box'))
        thirdbox.classList.add('hidden');
        overlay.classList.add('hidden');
    
}

function appear1()
{
    firstbox.classList.remove('hidden')
    overlay.classList.remove('hidden')

}

function appear2()
{
    secondbox.classList.remove('hidden')
    overlay.classList.remove('hidden')

}

function appear3()
{
    thirdbox.classList.remove('hidden')
    overlay.classList.remove('hidden')

}

function disappear_on_key(e){
    console.log(e);
    if(e.code=='Escape')
    {
        disappear();
    }

}

firstbtn.addEventListener('click',appear1)
secondbtn.addEventListener('click',appear2)
thirdbtn.addEventListener('click',appear3)
overlay.addEventListener('click',disappear)
document.addEventListener('keydown',disappear_on_key)


for (let i=0; i<3; i++)
{
    crossbtn[i].addEventListener('click',disappear);
}


