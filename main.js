const spaces = document.querySelectorAll(".space")
let winner = document.querySelector(".win")
const btns = document.querySelectorAll(".btn")
let spans = document.querySelectorAll("span")
const gameOver = document.querySelector(".gameOver")

let matriz = [
    [2,3,4],
    [5,6,7],
    [8,9,10]
]

let turn = false;
let cont = 0

spaces.forEach((space)=>{
        let x = space.querySelector(".x")
        let o = space.querySelector(".o")
        
        space.addEventListener("click", ()=>{
        let nums = space.id.split("_").map(Number)
        console.log(nums[0], nums[1])
        if(turn){
            if(matriz[nums[0]][nums[1]] !== 0 || matriz[nums[0]][nums[1]] !== 1){
                matriz[nums[0]][nums[1]] = 0
                o.style.display = "block"
                win()
                turn = false
                cont ++
            }
        }else{
            if(matriz[nums[0]][nums[1]] !== 0 || matriz[nums[0]][nums[1]] !== 1){
                matriz[nums[0]][nums[1]] = 1
                x.style.display = "block"
                turn = true
                cont++
                win()
            }
        }
        console.log(space.id)
    })
})

btns.forEach((btn)=>{
  btn.addEventListener("click", ()=>{
    winner.style.display = "none"
    gameOver.style.display = "none"
    spans.forEach((span) =>{
      span.style.display = "none"
    })
  })
})

function win(){
    if(
        matriz[0][0] == matriz[0][1] && matriz[0][0] == matriz[0][2]
    ){
      congratulations(matriz[0][0])  
    }else if(
        matriz[1][0] == matriz[1][1] && matriz[1][0] == matriz[1][2]
    ){
      congratulations(matriz[1][0])  
    }
    else if(
        matriz[2][0] == matriz[2][1] && matriz[2][0] == matriz[2][2]
    ){
      congratulations(matriz[2][0])  
    }


    else if(
        matriz[0][0] == matriz[1][0] && matriz[0][0] == matriz[2][0]
    ){
      congratulations(matriz[0][0])  
    }
    else if(
        matriz[0][1] == matriz[1][1] && matriz[0][1] == matriz[2][1]
    ){
      congratulations(matriz[0][1])
    }
    else if(
        matriz[0][2] == matriz[1][2] && matriz[0][2] == matriz[2][2]
    ){
      congratulations(matriz[0][2])  
    }


    else if(
        matriz[0][0] == matriz[1][1] && matriz[0][0] == matriz[2][2]
    ){
      congratulations(matriz[0][0])   
    }
    else if(
        matriz[0][2] == matriz[1][1] && matriz[0][2] == matriz[2][0]
    ){
      congratulations(matriz[0][2])   
    }
    else if(cont > 8){
      gameOver1()
    }
}
function congratulations(number){
  let h1 = document.querySelector("h1")
  if(number == 0){
    h1.textContent = `Parabéns "O", você ganhou!!`
  }else{
    h1.textContent = `Parabéns "X", você ganhou!!`
  }
  winner.style.display = "flex"

  matriz = [
    [2,3,4],
    [5,6,7],
    [8,9,10]
]
cont = 0
}
function gameOver1(){
  gameOver.style.display = "flex"
  matriz = [
    [2,3,4],
    [5,6,7],
    [8,9,10]
]
  cont = 0
}