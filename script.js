const questionArray = [
    {
        'question' : 'Who is Prime Minister of India ?',
        'a': 'Ram Prasad',
        'b' : 'Bismil Khan',
        'c' : 'Gulban Sheikh',
        'd' : 'Narendra Modi',
        'correct' : 'd',
    },
    {
        'question' : 'Who is Cheif Minister of Madhya Pradesh ?',
        'a': 'Ram Prasad',
        'b' : 'Shivraj Singh Chuahan',
        'c' : 'Gulban Sheikh',
        'd' : 'Narendra Modi',
        'correct' : 'b',
    },
    {
        'question' : 'Who is President of India ?',
        'a': 'Ram Prasad',
        'b' : 'Bismil Khan',
        'c' : 'Draupadi murmur',
        'd' : 'Narendra Modi',
        'correct' : 'c',
    },
    {
        'question' : 'Who is Cheif Minister of Uttar Pradesh ?',
        'a': 'Yogi Aditynath',
        'b' : 'Bismil Khan',
        'c' : 'Gulban Sheikh',
        'd' : 'Narendra Modi',
        'correct' : 'a'
    }

]
let index =0;
let correct =0 , incorrect = 0;
const total = questionArray.length;
let quizQuestion = document.getElementById("questionBox");
let allInput = document.querySelectorAll("input");
const load = (index) =>{
    if(index === total){
        return endQuiz()
    }
    const data = questionArray[index];
    
    
    quizQuestion.innerHTML = `${index+1})  ${data.question}`;
    allInput[0].nextElementSibling.innerText =`${data.a}`
    allInput[1].nextElementSibling.innerText =`${data.b}`
    allInput[2].nextElementSibling.innerText =`${data.c}`
    allInput[3].nextElementSibling.innerText =`${data.d}`
}
const submit = () =>{
    const data = questionArray[index];
    let answ = inputAns();
    if(answ === data.correct){
        correct++;
    }
    else{
        incorrect++;
    }
    
    reset();
    index++;
    load(index);
    // inputAns();
    
}
const inputAns = () => {
    let ans;
    allInput.forEach( 
        (y) => {
            if(y.checked){
                ans = y.value;
            }
        }
    )
    return ans;
}
const reset =() => {
    allInput.forEach(
        (x) => {
          x.checked =false;  
        }
    )
}
load(index)

const endQuiz = () => {
    document.getElementsByClassName("container")[0].innerHTML =`
    <h3> Thanks for giving Quiz <h3>
    <p>Your score is ${correct}/${total}</p>`;
}