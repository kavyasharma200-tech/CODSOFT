let string="";
let buttons= document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
button.addEventListener('click',(e)=>{
    if(e.target.innerHTML=='='){
        string=string.replace("^","**");
        string=eval(string);
        document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML=='AC'){
        string="";
        document.querySelector('input').value=string;
    }
    
     else if(e.target.innerHTML=='DEL'){
        string=string.substring(0,string.length-1);
        document.querySelector('input').value=string;
    }
    
    else{
console.log(e.target)
string=string+e.target.innerHTML;
document.querySelector('input').value=string;}
})
})
const card = document.querySelector('.container');
card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;   
    const y = e.clientY - rect.top;   

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const percentX = (x - centerX) / centerX;
    const percentY = (y - centerY) / centerY;

    const rotateY = percentX * 15; 
const rotateX = -percentY * 15; 
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  });
// const box = document.querySelector('.container');
// box.addEventListener('mousemove', (e) => {
//   const boxRect = box.getBoundingClientRect();

//   const centerX = boxRect.left + boxRect.width / 2;
//   const centerY = boxRect.top + boxRect.height / 2;
//   const deltaX = e.clientX - centerX;
//   const deltaY = e.clientY - centerY;

//   const rotateZ = deltaX * 0.1; 
// box.style.transform = `rotateZ(${rotateZ}deg)`;
// });

// box.addEventListener('mouseleave', () => 
//    {
//  box.style.transform = `rotateZ(0deg)`;
// });
// const cursor = document.querySelector('.misu');

//   document.addEventListener('mousemove', (e) => {
//     const x = e.clientX;
//     const y = e.clientY;
//     cursor.style.transform = `translate(${x}px, ${y}px)`;
//   });
  