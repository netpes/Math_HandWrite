let answer = 0;
let score = 0
let backgroundImages = []

function nextQuestion() {
    let n1 = Math.round(Math.random() * 5)
    document.getElementById('n1').innerHTML = n1
    const n2 = Math.round(Math.random() * 5)
    document.getElementById('n2').innerHTML = n2
    answer =  n1 + n2
}
async function checkAnswer(){
    const prediction =await predictImage()
    if (answer === prediction){
        nextQuestion()
        score++
        if (score < 7) {
            backgroundImages.push(`url('images/background${score}.svg')`)
        } else {
            alert("Well done, Restart?")
            score = 0
            backgroundImages = []
        }
        document.body.style.backgroundImage = backgroundImages
    } else {
        if (score > 0){
        score--
            backgroundImages.pop()
            document.body.style.backgroundImage = backgroundImages
        }
    }

    // console.log(`url('images/background${score}')`)

    clearCanvas()
}