console.log("!!!")


var ctx = document.getElementById('canvas').getContext('2d')

ctx.fillStyle ="red"
ctx.strokeStyle = "blue"
ctx.fillRect(0,0,100,100)
ctx.strokeRect(100,100,50,50)


ctx.fillStyle = "black"
ctx.beginPath()
ctx.arc(50,50,30,0,Math.PI/2,true)
ctx.moveTo(25,25)
ctx.fillStyle = "green"
ctx.arc(25,25,15,0,Math.PI*2)
ctx.fill()


ctx.beginPath()
ctx.arc(75,75,25,0,Math.PI,true)
ctx.strokeStyle ="red"
ctx.stroke()

ctx.beginPath()
ctx.arc(75,75,25,0,Math.PI,false)
ctx.strokeStyle ="blue"
ctx.stroke()

for(let i=0;i<6;i++){
  ctx.beginPath()
  ctx.arc(50+i*2,90+i*2,25,0,Math.PI,false)
  ctx.strokeStyle ="green"
  ctx.stroke()
}

for(let i=0;i<230;i++){
  for(let j=0; j<20;j++){

  ctx.beginPath()
  ctx.arc(100+i*2,90+j*4,25,0,Math.PI,false)
  ctx.strokeStyle ='rgb('+Math.floor(100+i*3)+','+ Math.floor(255-42.5 *j)+',0)'
  ctx.stroke()
  }
}


for(let i=0;i<2;i++){
  for(let j=0; j<3;j++){

  ctx.beginPath()
  ctx.arc(0+i*5,0+j*2,25,0,Math.PI*2,false)
  ctx.fillStyle ='rgb('+Math.floor(1+i*2)+','+ Math.floor(100*j-45)+',0)'
  ctx.fill()
  }
}


for(let i=0;i<100;i++){
  for(let j=0; j<100;j++){

  ctx.beginPath()
  ctx.arc(90+i*5,180+j*2,25,0,Math.PI*2,false)
  ctx.fillStyle ='rgb('+Math.floor(90+i*2)+','+ Math.floor(j*3)+',0)'
  ctx.fill()
  }
}


ctx.beginPath()
ctx.arc(10,90,5,0,Math.PI*2)
ctx.fillStyle = "black"
ctx.fill()

ctx.beginPath()
ctx.arc(10,45,55,0,Math.PI*2)
ctx.strokeStyle = "orange"
ctx.stroke()
