'use strict';

// button.html の処理
const btn = document.getElementById('btn');
if (btn) {
    btn.addEventListener('click', () => {
        const results = ['大吉', '中吉', '凶', '小吉'];
        const languages = ['Python', 'JavaScript', 'Go', 'Java'];
        
        const n = Math.floor(Math.random() * results.length);
        const m = Math.floor(Math.random() * languages.length);
        
        const result = results[n];
        const luckyLang = languages[m];
        
        // 結果をURLパラメータとしてindex.htmlに渡す
        window.location.href = `index.html?result=${encodeURIComponent(result)}&lang=${encodeURIComponent(luckyLang)}`;
    });
}


// index.html の処理
const resultElement = document.getElementById('result');
if (resultElement) {
    const params = new URLSearchParams(window.location.search);
    const result = params.get('result');
    if (result) {
        resultElement.textContent = result;
    } else {
        resultElement.textContent = '結果がありません';
    }

    // ラッキー言語を表示する処理
    const luckyLangElement = document.getElementById('lucky_lang');
    const luckyLang = params.get('lang');
    if (luckyLangElement) {
        if (luckyLang) {
            luckyLangElement.textContent = luckyLang;
        } else {
            luckyLangElement.textContent = 'ラッキー言語がありません';
        }
    }

    // 「もう一度おみくじを引く」ボタンの処理
    const retryBtn = document.getElementById('retryBtn');
    if (retryBtn) {
        retryBtn.addEventListener('click', () => {
            window.location.href = 'button.html';
        });
    }
}
