'use strict';

//○×入力欄
const bord = document.getElementsByTagName('td');

//結果表示
const result = document.getElementById('result');

//ゲームカウント（９からダウンしていく）
let count = bord.length;

//勝ち判定
const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


//クリックで入力
const player1 = [];
const player2 = [];
for (let i = 0; i < count ; i++) {

    bord[i].addEventListener ('click', function(){

        //カウントが奇数のときPlayer１
        if (count % 2 === 1 && 0 < count) {
            bord[i].innerHTML = "○";
            player1.push(i);
            result.innerText = 'Player２の番です';

        //カウントが偶数のときPlayer２
        } else if (count % 2 === 0 && 0 < count) {
            bord[i].innerHTML = "×";
            player2.push(i);
            result.innerText = 'Player１の番です';

        }

        count --;
        judge();

    }, { 
        once: true
    });

}


//勝敗判定
function judge () {

    for(let n = 0; n < 9; n++) { 

        if (player1.includes(wins[n][0]) && player1.includes(wins[n][1]) && player1.includes(wins[n][2])) {
            result.innerText = 'Player１の勝ちです';
            result.style.background = 'pink';
            count = -1;

        } else if (player2.includes(wins[n][0]) && player2.includes(wins[n][1]) && player2.includes(wins[n][2])) {
            result.innerText = 'Player２の勝ちです';
            result.style.background = '#f3f3ed';
            count = -1;
        
        } else if (count===0) {
            result.innerText = '引き分けです';
        }
    
    }

}





