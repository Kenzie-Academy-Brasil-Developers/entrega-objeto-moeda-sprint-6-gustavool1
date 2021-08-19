let main = document.createElement("main")
document.body.appendChild(main)
let btn = document.createElement('button')
btn.innerHTML =' Jogar'
main.appendChild(btn)
let sectionImgs = document.createElement("section")
let pResults = document.createElement('p')
main.appendChild(pResults)
main.appendChild(sectionImgs)

function display20Flips() {
    const results = [];
    for(let i=0; i<20; i++){
        coin.flip()
        results.push(coin.toString())
    }
    pResults.innerHTML = results.join(', ') 
    return results
  }

  function display20Images() {
    sectionImgs.innerHTML = ''
    const results = [];
    for(let i=0; i<20;i++){
        coin.flip()
        results.push(coin.toString())
        let faceImg = ''
        let CoinFace = coin.toString()
        if( CoinFace === "Heads"){
            faceImg = coin.toHTML()
        }if(CoinFace === 'Tails'){
            faceImg = coin.toHTML()
        }
        let img = document.createElement('img')
        img.classList.add("coins")
        img.src = `${faceImg.src}`
        sectionImgs.appendChild(img)
    }
    return results
  }
  function play(){
    display20Flips()
    display20Images()
  }
 
  btn.addEventListener('click', play)