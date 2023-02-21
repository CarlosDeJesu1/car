class Player {
  constructor() {
  
  }

  updateCount(count){
    database.ref('/').update({
      playerCount:count
    });

  }
  
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
     playerCount = data.val(); 
    })


  }
}
