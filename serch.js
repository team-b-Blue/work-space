'use strict';

// 現在地取得中のメッセージを表示/非表示にする関数
function toggleLocationMessage(show) {
    const locationElement = document.getElementById('getting-location');
    if (locationElement) {
        locationElement.textContent = show ? '現在地取得中....' : '';
    }
}

// 位置情報を取得し、Google Maps検索を行う関数
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

// ボタンのクリックイベントを設定する関数
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
