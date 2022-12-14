//キャンバスの設定
const canvasPaint = document.querySelector("#canvasPaint");
const ctxPaint = canvasPaint.getContext("2d");
canvasPaint.width = 1000;
canvasPaint.height = 220;

//スタンプの設置
//スタンプ画像の設定
const charajyunbi = new Image();
charajyunbi.src = "jyunbi1.png"
const charakaishi = new Image();
charakaishi.src = "kaishi1.png"
const charakanryo = new Image();
charakanryo.src = "kanryo1.png"
const charamin1 = new Image();
charamin1.src = "min1.png"
const charamin2 = new Image();
charamin2.src = "min2.png"
const charamin3 = new Image();
charamin3.src = "min3.png"
const charamin4 = new Image();
charamin4.src = "min4.png"
const charamin5 = new Image();
charamin5.src = "min5.png"
const charamin6 = new Image();
charamin6.src = "min6.png"
const charamin7 = new Image();
charamin7.src = "min7.png"
const charamin8 = new Image();
charamin8.src = "min8.png"
const charamemo1 = new Image();
charamemo1.src = "memo1.png"
const charamemo2 = new Image();
charamemo2.src = "memo2.png"
const charamemo3 = new Image();
charamemo3.src = "memo3.png"
const charamemo4 = new Image();
charamemo4.src = "memo4.png"

//スタンプを選択
let penStatus = "pencil";
const jyunbiButton = document.getElementById("jyunbiButton");
jyunbiButton.addEventListener("click",()=>{
    penStatus = "jyunbi";
})
const kaishiButton = document.getElementById("kaishiButton");
kaishiButton.addEventListener("click",()=>{
    penStatus = "kaishi";
})
const kanryoButton = document.getElementById("kanryoButton");
kanryoButton.addEventListener("click",()=>{
    penStatus = "kanryo";
})
const freeButton = document.getElementById("freeButton");
freeButton.addEventListener("click",()=>{
    penStatus = "none";
})
const min1Button = document.getElementById("min1Button");
min1Button.addEventListener("click",()=>{
    penStatus = "min1";
})
const min2Button = document.getElementById("min2Button");
min2Button.addEventListener("click",()=>{
    penStatus = "min2";
})
const min3Button = document.getElementById("min3Button");
min3Button.addEventListener("click",()=>{
    penStatus = "min3";
})
const min4Button = document.getElementById("min4Button");
min4Button.addEventListener("click",()=>{
    penStatus = "min4";
})
const min5Button = document.getElementById("min5Button");
min5Button.addEventListener("click",()=>{
    penStatus = "min5";
})
const min6Button = document.getElementById("min6Button");
min6Button.addEventListener("click",()=>{
    penStatus = "min6";
})
const min7Button = document.getElementById("min7Button");
min7Button.addEventListener("click",()=>{
    penStatus = "min7";
})
const min8Button = document.getElementById("min8Button");
min8Button.addEventListener("click",()=>{
    penStatus = "min8";
})
const memo1Button = document.getElementById("memo1Button");
memo1Button.addEventListener("click",()=>{
    penStatus = "memo1";
})
const memo2Button = document.getElementById("memo2Button");
memo2Button.addEventListener("click",()=>{
    penStatus = "memo2";
})
const memo3Button = document.getElementById("memo3Button");
memo3Button.addEventListener("click",()=>{
    penStatus = "memo3";
})
const memo4Button = document.getElementById("memo4Button");
memo4Button.addEventListener("click",()=>{
    penStatus = "memo4";
})


let isDrag = false;
//線の色の初期設定
//let penSize = 10;
ctxPaint.fillStyle = "blue";
ctxPaint.strokeStyle = ctxPaint.fillStyle;
//線の太さの初期値
ctxPaint.lineWidth = 2 ;
//線を描く関数
function draw(x2,y2){
    if(isDrag && penStatus == "pencil"){
        ctxPaint.beginPath();
        ctxPaint.arc(x2,y2,2,0,Math.PI * 2);
        ctxPaint.fill();
    //console.log("penSize",penSize);
        ctxPaint.closePath();
         //draw line
        drawLine(x,y,x2,y2);
    }else if(isDrag && penStatus == "eraser"){
        ctxPaint.clearRect(x,y,20,20);
    }
    
    x = x2;
    y = y2;
}
function drawLine(x1,y1,x2,y2){
    ctxPaint.beginPath();
    ctxPaint.moveTo(x1,y1);
    ctxPaint.lineTo(x2,y2);
    ctxPaint.strokeStyle = ctxPaint.fillStyle;
//    ctxPaint.lineWidth = penSize * 2;
    ctxPaint.stroke();
}
canvasPaint.addEventListener("mousedown",(e)=>{
    isDrag = true;
    x = e.offsetX;
    y = e.offsetY;
    // console.log(x,y)
});
canvasPaint.addEventListener("mouseup",()=>{
    isDrag = false;
    x = undefined;
    y = undefined;
});
canvasPaint.addEventListener("mousemove",(event)=>{
    draw(event.offsetX,event.offsetY);
});


//消しゴムボタンの設定
const eraserButton = document.getElementById("eraserButton");
eraserButton.addEventListener("click",() => {
    console.log("Eraser is clicked");
    penStatus = "eraser";
})


//全消去ボタンの設定
const allearseButon = document.getElementById("alleraseButton");
alleraseButton.addEventListener("click",()=>{
  console.log("All Erase is clicked");
  ctxPaint.clearRect(0,0,canvasPaint.width,canvasPaint.height);
})

//canvasをクリックしたときのイベント設定
this.canvasPaint.addEventListener("mousedown",(e) => {
    let x = e.offsetX-25;
    let y = e.offsetY-25;

    console.log("x:",x,"y:",y);
    //penStatusの状態に応じて挙動変更
      if(penStatus == "jyunbi") {
        ctxPaint.drawImage(charajyunbi,x,y);
      } 
      if(penStatus == "kaishi") {
        ctxPaint.drawImage(charakaishi,x,y);
      } 
      if(penStatus == "kanryo") {
        ctxPaint.drawImage(charakanryo,x,y);
      }
      if(penStatus == "min1") {
        ctxPaint.drawImage(charamin1,x,y);
      } 
      if(penStatus == "min2") {
        ctxPaint.drawImage(charamin2,x,y);
      }
      if(penStatus == "min3") {
        ctxPaint.drawImage(charamin3,x,y);
      } 
      if(penStatus == "min4") {
        ctxPaint.drawImage(charamin4,x,y);
      }
      if(penStatus == "min5") {
        ctxPaint.drawImage(charamin5,x,y);
      } 
      if(penStatus == "min6") {
        ctxPaint.drawImage(charamin6,x,y);
      }
      if(penStatus == "min7") {
        ctxPaint.drawImage(charamin7,x,y);
      } 
      if(penStatus == "min8") {
        ctxPaint.drawImage(charamin8,x,y);
      }
      if(penStatus == "memo1") {
        ctxPaint.drawImage(charamemo1,x,y);
      } 
      if(penStatus == "memo2") {
        ctxPaint.drawImage(charamemo2,x,y);
      } 
      if(penStatus == "memo3") {
        ctxPaint.drawImage(charamemo3,x,y);
      } 
      if(penStatus == "memo4") {
        ctxPaint.drawImage(charamemo4,x,y);
      } 

})