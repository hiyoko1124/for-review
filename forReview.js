'use strict';
const userNameInput = document.getElementById('user-name');
const button = document.getElementById('get-result');
const display = document.getElementById('result');
const tweet = document.getElementById('tweet');

button.onclick = () => {
    const userName = userNameInput.value;
    if (userName.length === 0) {
        return;
    }
    display.innerText = "";
    const header = document.createElement('h3');
    header.innerText = '診断結果';
    display.appendChild(header);

    const paragraph = document.createElement('p');
    const answer = assessment(userName);
    paragraph.innerText = answer;
    display.appendChild(paragraph);
    
    tweet.innerText = "";
    const letTweet = document.createElement('a');
    const hreflink = 'https://twitter.com/intent/tweet?button_hashtag='+
    encodeURIComponent('おすすめの旅行先')+
    '&ref_src=twsrc%5Etfw';

    letTweet.setAttribute('href', hreflink);
    letTweet.setAttribute('class','twitter-hashtag-button');
    letTweet.setAttribute('data-text', answer);
    letTweet.innerText = 'Tweet #おすすめの旅行先';

    tweet.appendChild(letTweet);

    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    tweet.appendChild(script);

};

const answers = [
    '{userName}におすすめの旅行先は沖縄です。海を眺め、心を洗いましょう。',
    '{userName}におすすめの旅行先は金沢です。昔ながらの街並みで落ち着きましょう。',
    '{userName}におすすめの旅行先は仙台です。牛タンやずんだを食べて幸せになりましょう。',
    '{userName}におすすめの旅行先はアメリカです。でっかい肉を食べて、太りましょう。',
    '{userName}におすすめの旅行先は北海道です。乳搾りなどして、自然の恵みを感じましょう。',
    '{userName}におすすめの旅行先は大阪です。街の活気に勇気づけられてください。',
    '{userName}におすすめの旅行先は京都です。和の精神を学び、深い人間になりましょう。',
    '{userName}におすすめの旅行先は静岡です。新鮮な空気を吸い、美味しい水を飲んでデトックスしましょう。',
    '{userName}におすすめの旅行先はハワイです。思いっきりリゾート気分を味わい、浮かれましょう。',
    '{userName}におすすめの旅行先は兵庫です。美人をつかまえましょう。',
    '{userName}におすすめの旅行先は草津です。たまには温泉にでもつかってゆっくりしましょう。',
    '{userName}におすすめの旅行先はありません。自粛しましょう。',
    '{userName}におすすめの旅行先は葉山です。贅沢してランクの高いホテルに泊まってみましょう。',
    '{userName}におすすめの旅行先は箱根です。『星の王子さま』を読んで、星の王子さまミュージアムに行きましょう。',
    '{userName}におすすめの旅行先は栃木です。いちご狩りは想像の倍は楽しいです。'
];

/* @param = userName
   @return = answer
*/

function assessment(userName) {
//　全文字のコードを取得してsumupする
let sum = 0
for (let i = 0; i < userName.length; i++) {
    sum = sum + userName.charCodeAt(i)   
};
//　15で割った余を添字として診断結果を取得する
const result = sum % answers.length;
let answer = answers[result];
//　userNameを名前に置き換える
answer = answer.replaceAll('{userName}', userName);
return answer;
}

userNameInput.onkeydown = event => {
    if (event.key === 'Enter') {
    button.onclick(); 
    }  
}
