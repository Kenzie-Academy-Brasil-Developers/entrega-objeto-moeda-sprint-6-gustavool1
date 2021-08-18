
const coin = {
    state: 0,
    flip: function () {
      let headsOrTails = Math.floor(Math.random()*2)
      this.state = headsOrTails
    },
  
    toString: function () {
      if(this.state === 0){
          return "Heads"
      }if(this.state === 1){
          return "Tails"
      }
    },
  
    toHTML: function () {
      const image = document.createElement("img");
      if(this.toString() === 'Tails'){
        image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbfu-wEUqDQUksaFlvWYuD4ud3uwCdI_RlDuRLs6rNZ36dXcoOl8yCT7FFqh9WG7RGh0E&usqp=CAU'
        image.alt = 'Tails'
      }
      if(this.toString() === 'Heads'){
          image.src = 'https://images-na.ssl-images-amazon.com/images/I/81%2B37SxRZfL.png'
          image.alt ='Heads'
      }
      return image;
    },
  };

 for(let i=0; i<20; i++){
     coin.flip()
     console.log(coin.toString())
 }
  

  