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
const dish3Element = document.getElementById('dish3');
const textElement = document.getElementById('text');
const serchGenreElement = document.getElementById('searchRestaurantBtnGenre')
const serchdish1Element = document.getElementById('searchRestaurantBtn1')
const serchdish2Element = document.getElementById('searchRestaurantBtn2')
const serchdish3Element = document.getElementById('searchRestaurantBtn3')
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

    const messages = {
        '和食': '和食は、クセのない味付けのものが多く、万人に愛されるジャンルです。ヘルシーな料理が多いので、健康志向の方にもおすすめです。カジュアルに楽しめる定食屋や居酒屋から、特別な日に訪れたい高級料亭まで、さまざまなシーンで利用できるのも和食の魅力です。家で自分好みの味付けの和食を作ってみるのも良いですね！',
        '中華': '中華は、蒸し料理や炒め物、揚げ物など、様々なメニューを幅広く楽しめるジャンルです。大皿でシェアしながら楽しんでも良いですし、一人ひとりが好きなメニューを選ぶのも良いですね。お店での食事だけでなく、テイクアウトして家でゆっくりと楽しむのもおすすめです。家で中華料理作りに挑戦してみるのもいいですね！',
        '韓国料理': '韓国料理は、ピリッと辛い味付けが特徴で、ご飯との相性が抜群です。野菜をたくさん使った料理も多いので、健康を意識した食事としてもおすすめです。食欲をそそる辛さが、一日の疲れを吹き飛ばしてくれることでしょう！自分で作ってみて、自分好みの辛さを見つけてみるのもいいですね！',
        'イタリアン': 'イタリアンは、気軽に楽しめるカジュアルな食事から、特別な日のディナーまで幅広く楽しめるジャンルです。ピザやパスタでしっかりとした満足感を得るのも良いですし、色々な一品料理を楽しむのもおすすめです。お気に入りのお店を見つけてみるのはいかがですか？自分で作って、家でゆっくりとイタリアンを楽しむのも良いですね！',
        '洋食': '洋食は、家庭料理やレストランの定番メニューとして広く親しまれています。米料理、煮込み料理、グリル、揚げ物など、さまざまなメニューの中からお好みの一品を選べるのが魅力です。自分のお気に入りの味を見つけてみるのはいかがですか？'
    };
    
    if (genre && messages[genre]) {
        textElement.innerHTML = messages[genre];
    } else {
        textElement.textContent = 'おいしい食事をお楽しみください！';
    }

    const addStr = "のお店を探す"
    serchGenreElement.textContent = genre + addStr;
    serchdish1Element.textContent = dish1 + addStr;
    serchdish2Element.textContent = dish2 + addStr;
    serchdish3Element.textContent = dish3 + addStr;

    window.sharedData = {
        share_genre: genre,
        share_dish1: dish1,
        share_dish2: dish2,
        share_dish3: dish3
    };

    // 「もう一度トライする」ボタンの処理
    const retryBtn = document.getElementById('retryBtn');
    if (retryBtn) {
        retryBtn.addEventListener('click', () => {
            window.location.href = 'button.html';
        });
    }

}


// index.htmlで、現在地取得中のメッセージを表示/非表示にする関数
function toggleLocationMessage(show) {
    const locationElement = document.getElementById('getting-location');
    if (locationElement) {
        locationElement.textContent = show ? '現在地取得中....' : '';
    }
}

// index.htmlで、位置情報を取得し、Google Maps検索を行う関数
function searchNearbyRestaurants(dishName) {
    if (navigator.geolocation) {
        toggleLocationMessage(true); // 現在地取得中のメッセージを表示
        navigator.geolocation.getCurrentPosition(function(position) {
            toggleLocationMessage(false); // メッセージを非表示に
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            // Google Maps検索のクエリを生成
            const googleMapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(dishName)}/@${latitude},${longitude},15z`;
            // 新しいタブでGoogle Mapsの検索結果を開く
            window.open(googleMapsUrl, '_blank');
        }, function(error) {
            toggleLocationMessage(false); // エラー時もメッセージを非表示に
            console.error('位置情報の取得に失敗しました:', error);
            alert('位置情報を取得できませんでした。');
        });
    } else {
        alert('このブラウザでは位置情報の取得がサポートされていません。');
    }
}

// index.htmlのお店を探すボタンのクリックイベントを設定する関数
function setupSearchButton(containerId, dishName) {
    const container = document.getElementById(containerId);
    if (container) {
        container.addEventListener('click', function(event) {
            // クリックされた要素がボタン自体でない場合にのみ実行
            if (event.target !== this.querySelector('button')) {
                searchNearbyRestaurants(dishName);
            }
        });

        // ボタン自体のクリックイベントも設定
        const button = container.querySelector('button');
        if (button) {
            button.addEventListener('click', function(event) {
                event.stopPropagation(); // バブリングを防止
                searchNearbyRestaurants(dishName);
            });
        }
    }
}

// 各ボタンコンテナに対して関数を呼び出し、イベントリスナーを設定
document.addEventListener('DOMContentLoaded', function() {
    setupSearchButton('searchRestaurantContainerGenre', window.sharedData.share_genre);
    setupSearchButton('searchRestaurantContainer1', window.sharedData.share_dish1);
    setupSearchButton('searchRestaurantContainer2', window.sharedData.share_dish2);
    setupSearchButton('searchRestaurantContainer3', window.sharedData.share_dish3);
});



// index.htmlの背景画像を、画面の一番上からRETRYボタンの下200pxもしくは300pxまでに設定する
// 背景画像の高さを画面の高さによって調整する
function adjustBackgroundHeight() {
    const background = document.querySelector('.background');
    const retryButton = document.querySelector('#retryBtn');
    const retryButtonBottom = retryButton.offsetTop + retryButton.offsetHeight;
    
    let newHeight;

    if (window.innerWidth >= 750 && window.innerHeight >= 1350) {
        newHeight = retryButtonBottom + 300;
    } else {
        newHeight = retryButtonBottom + 200;
    }

    background.style.height = `${newHeight}px`;
}

window.addEventListener('load', adjustBackgroundHeight);
window.addEventListener('resize', adjustBackgroundHeight);
