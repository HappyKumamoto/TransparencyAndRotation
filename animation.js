//回転して裏を向いた瞬間にclassを変更する場合
let header = document.getElementById('header');
let degree = 0;
function rotateHeader() {
degree = degree + 6;
  degree = degree % 360;
  if ((0 <= degree && degree < 90) || (270 <= degree && degree < 360)) {
    header.className = 'face';
 } else {
   header.className = 'back';
  }
  header.style.transform = 'rotateX(' + degree + 'deg)';
}
setInterval(rotateHeader, 200);



//var header = document.getElementById('header');
//var degree = 0;  //角度を入れる変数の宣言
//function rotateHeader() {   //roteteHeaderという関数を呼び出す毎に
//  degree = degree + 6;      //その角度を6ずつ足し、それをcssのスタイルとして設定
 // header.style.transform = 'rotateX(' + degree + 'deg)';
  //rotateX(という文字列+変数degreeの数値+deg)という文字列
  // JSでは数値は文字列と連結した場合、自動的に文字列に変換される
//}
//setInterval(rotateHeader, 100);
//rotateHeader関数を100ミリ秒ごとに繰り返し実行


