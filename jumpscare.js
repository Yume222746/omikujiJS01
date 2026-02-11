'use stirct';
const uranauButtom = document.getElementById(`uranau`)
const resultDivision = document.getElementById(`result-area`)
const otoriDivision = document.getElementById(`otori-area`)

//おみくじのリスト
let unsei = ["大吉", "小吉", "凶", "大凶"]

//おみくじ機能
function omikuji(){
  let mikujiNum = Math.floor(Math.random() * unsei.length);
  return unsei[mikujiNum]
}
//ボタンの機能
uranauButtom.addEventListener(
  `click`,
  function() {
    //おみくじの結果を5秒後に表示
    let img_element2 = document.createElement('img');
    img_element2.src = 'Circus-Tent2.jpg'
    img_element2.width = 300
    img_element2.height = 300
    resultDivision.appendChild(img_element2)
    window.setTimeout(resultDisp, 5000)
    const mikujiResult = omikuji()
    function resultDisp() {
      img_element2.remove()
      resultDivision.innerText=`${mikujiResult}`
    }
    //ボタンを削除
    uranauButtom.remove()

    //大吉なら怖い画像を表示
    const music = new Audio('kowaioto.mp3');

    let img_element = document.createElement('img');
    img_element.src = '26263095_s.jpg'
    img_element.width = 400
    img_element.height = 400
    if(mikujiResult === '大吉') {
      window.setTimeout(resultDisp, 5000)
      function resultDisp() {
        resultDivision.appendChild(img_element)
        music.currentTime = 0;
        music.play();
      }
    }

    //矢印を表示
    const tyuumokuDivision = document.createElement(`h2`)
    tyuumokuDivision.innerText=`注目`
    const yajirusiDivision = document.createElement(`h2`)
    yajirusiDivision.innerText=`↓`
    otoriDivision.appendChild(tyuumokuDivision)
    otoriDivision.appendChild(yajirusiDivision)
  }
)









