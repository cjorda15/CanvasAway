var ctx = document.getElementById('canvas').getContext('2d')

ctx.beginPath()
ctx.moveTo(25,25)
ctx.lineTo(35,25)
ctx.lineTo(35,95)
ctx.arc(35,95,25,0,Math.PI*2,false);
ctx.strokeStyle= "purple"
ctx.stroke()
ctx.fillStyle = "red"
ctx.fill()


for(var l = 0;l< 10;l++){
  for(let j = 0; j<20;j++){
ctx.beginPath()
ctx.arc(200+j*20,200+l*15,20,0,Math.PI*2)
ctx.strokeStyle= 'rgb('+10+l*20+','+234-l*30+','+180+')'
ctx.fillStyle = 'rgb('+9+l*10+','+15+l*5+','+200+')'
ctx.fill()
ctx.stroke()



 }
}
