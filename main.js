'use strict';

// button.html の処理
const btn = document.getElementById('btn');
if (btn) {
    btn.addEventListener('click', () => {
        const genres = ['和食', '中華', '韓国料理', 'イタリアン', '洋食'];
        const dishes = ['寿司', '天ぷら', 'うどん', '蕎麦', '鍋', '丼もの', 'とんかつ', '焼き鳥', '定食', 'おでん'];
        
        // ジャンルリストからランダムに1つ選ぶ
        const genre = genres[Math.floor(Math.random() * genres.length)];

        // メニューリストからランダムに2つ選ぶ
        const dish1Index = Math.floor(Math.random() * dishes.length);
        const dish1 = dishes[dish1Index];
        dishes.splice(dish1Index, 1); // 選ばれた要素をリストから削除

        const dish2 = dishes[Math.floor(Math.random() * dishes.length)];

        // 結果をURLパラメータとしてindex.htmlに渡す
        window.location.href = `index.html?genre=${encodeURIComponent(genre)}&dish1=${encodeURIComponent(dish1)}&dish2=${encodeURIComponent(dish2)}`;
    });
}

// index.html の処理
const genreElement = document.getElementById('genre');
const dish1Element = document.getElementById('dish1');
const dish2Element = document.getElementById('dish2');

if (genreElement && dish1Element && dish2Element) {
    const params = new URLSearchParams(window.location.search);
    const genre = params.get('genre');
    const dish1 = params.get('dish1');
    const dish2 = params.get('dish2');

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
}

// 「もう一度トライする」ボタンの処理
const retryBtn = document.getElementById('retryBtn');
if (retryBtn) {
    retryBtn.addEventListener('click', () => {
        window.location.href = 'button.html';
    });
}


