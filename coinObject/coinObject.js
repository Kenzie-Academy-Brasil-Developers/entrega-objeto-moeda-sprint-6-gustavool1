
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
        image.src = 'imagens/queen.jpeg'
        image.alt = 'Tails'
      }
      if(this.toString() === 'Heads'){
          image.src = 'imagens/heads.png'
          image.alt ='Heads'
      }
      return image;
    },
  };

 
  

  