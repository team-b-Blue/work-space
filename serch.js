'use strict';


// ボタンのクリックイベントを設定する関数
function setupSearchButton(buttonId, dishName) {
    document.getElementById(buttonId).addEventListener('click', function() {
        // Geolocation APIでユーザーの位置情報を取得
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                // Google Maps検索のクエリを生成
                const googleMapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(dishName)}/@${latitude},${longitude},15z`;

                // 新しいタブでGoogle Mapsの検索結果を開く
                window.open(googleMapsUrl, '_blank');
            }, function(error) {
                console.error('位置情報の取得に失敗しました:', error);
                alert('位置情報を取得できませんでした。');
            });
        } else {
            alert('このブラウザでは位置情報の取得がサポートされていません。');
        }
    });
}

// 各ボタンに対して関数を呼び出し、イベントリスナーを設定
setupSearchButton('searchRestaurantBtnGenre', window.sharedData.share_genre);
setupSearchButton('searchRestaurantBtn1', window.sharedData.share_dish1);
setupSearchButton('searchRestaurantBtn2', window.sharedData.share_dish2);
setupSearchButton('searchRestaurantBtn3', window.sharedData.share_dish3);
