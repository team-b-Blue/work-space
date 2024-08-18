'use strict';

// button.html の処理
const btn = document.getElementById('btn');
if (btn) {
    btn.addEventListener('click', () => {
        // チェックボックスの選択状態を取得
        let genres = [];
        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        
        checkboxes.forEach((checkbox) => {
            genres.push(checkbox.value);
        });

        const defaultGenres = ['和食', '中華', '韓国料理', 'イタリアン', '洋食'];
        const dishes = {
            '和食': ['寿司', '天ぷら', 'うどん', '蕎麦', '鍋', '丼もの', 'とんかつ', '焼き鳥', '定食', 'おでん'],
            '中華': ['餃子', '麻婆豆腐', '炒飯', '春巻き', '酢豚'],
            '韓国料理': ['キムチ', 'ビビンバ', 'サムゲタン', 'チヂミ', 'プルコギ'],
            'イタリアン': ['ピザ', 'パスタ', 'リゾット', 'カルパッチョ', 'ティラミス'],
            '洋食': ['ハンバーグ', 'オムライス', 'ステーキ', 'シチュー', 'グラタン']
        };

        // ジャンルが何も選択されなかった場合はすべてのジャンルを選択
        if(genres.length === 0){
            genres = defaultGenres.slice(0, defaultGenres.length);
        }

        // ジャンルリストからランダムに1つ選ぶ
        const genre = genres[Math.floor(Math.random() * genres.length)];

        // メニューリストからランダムに2つ選ぶ
        const dish1Index = Math.floor(Math.random() * dishes[genre].length);
        const dish1 = dishes[genre][dish1Index];
        dishes[genre].splice(dish1Index, 1); // 選ばれた要素をリストから削除

        const dish2Index = Math.floor(Math.random() * dishes[genre].length);
        const dish2 = dishes[genre][dish2Index];
        dishes[genre].splice(dish2Index, 1);

        const dish3Index = Math.floor(Math.random() * dishes[genre].length);
        const dish3 = dishes[genre][dish3Index];
        // 結果をURLパラメータとしてindex.htmlに渡す
        window.location.href = `index.html?genre=${encodeURIComponent(genre)}&dish1=${encodeURIComponent(dish1)}&dish2=${encodeURIComponent(dish2)}&dish3=${encodeURIComponent(dish3)}`;
    });
}

// index.html の処理
const genreElement = document.getElementById('genre');
const dish1Element = document.getElementById('dish1');
const dish2Element = document.getElementById('dish2');
const dish3Element = document.getElementById('dish3')
if (genreElement && dish1Element && dish2Element&& dish3Element) {
    const params = new URLSearchParams(window.location.search);
    const genre = params.get('genre');
    const dish1 = params.get('dish1');
    const dish2 = params.get('dish2');
    const dish3 = params.get('dish3');
    

    if (genre) {
        genreElement.textContent = genre;
    } else {
        genreElement.textContent = 'ジャンルがありません';
    }

    if (dish1) {
        dish1Element.textContent = dish1;
    } else {
        dish1Element.textContent = 'メニューがありません';
    }

    if (dish2) {
        dish2Element.textContent = dish2;
    } else {
        dish2Element.textContent = 'メニューがありません';
    }

    if (dish3) {  
        dish3Element.textContent = dish3;
    } else {
        dish3Element.textContent = 'メニューがありません';
}

// 「もう一度トライする」ボタンの処理
const retryBtn = document.getElementById('retryBtn');
if (retryBtn) {
    retryBtn.addEventListener('click', () => {
        window.location.href = 'button.html';
    });
}

}
