const showMsg = ['My name is  Asibur Rahman and I am a Programmer. ','Hope you are enjoying in this typing test application','All the best!','Keep it up!'];
const massege = document.getElementById('massege');
const box = document.getElementById('box');
const btn = document.getElementById('btn');
let startTime, endTime;
const playGame=()=>{
    let ranmdomNumber = Math.floor(Math.random()*showMsg.length);
    massege.innerText = showMsg[ranmdomNumber];
    let date = new Date();
    startTime= date.getTime();
    btn.innerText="Done!";
}
const endGame=()=>{
       let date= new Date();
       endTime= date.getTime();
         let totalTime= ((endTime-startTime)/1000);
    let totatStr= box.value;
    let wordCount = wordCounter(totatStr);
    let speed = Math.round((wordCount/totalTime)*60);
    let wronWord =`Your total speed ${speed} letter per minutes`;
    wronWord += conmpare(massege.innerText, totatStr);
    massege.innerText= wronWord;
}


const wordCounter=(str)=>{
    let response = str.split(" ").length;
    return response;
}

const conmpare = (str1, str2)=>
{
   var word1 = str1.split(" ");
   var word2 = str2.split(" ");
   let cnt = 0;
   word1.forEach((item, index) => {
       if(item===word2[index])
       {
           cnt++;
       }
       
   });
   let errorWords = (word1.length-cnt);
   return ` ${cnt} correct out of ${word1.length} words and the total number of error are ${errorWords}`

}

btn.addEventListener('click', function(){
    if(this.innerText=='Start'){
        box.Disabled=true;
        playGame();
    }else if(this.innerText=="Done!"){
        box.Disabled=false;
        btn.innerText="Start";
        endGame();
        
       
    }
})
