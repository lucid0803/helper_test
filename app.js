document.addEventListener("DOMContentLoaded", function () {
    // 네이버 지도 API 초기화
    const map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(37.5665, 126.9780),
        zoom: 10,
    });

    // 매물 위치를 나타내는 마커 생성
    const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.5665, 126.9780),
        map: map,
    });

    // 매물에 대한 정보 창 생성
    const infoWindow = new naver.maps.InfoWindow({
        content: "<h2>매물 정보</h2><p>이곳은 매물입니다.</p>",
    });

    // 마커를 클릭하면 정보 창을 열기
    naver.maps.Event.addListener(marker, "click", function (e) {
        if (infoWindow.getMap()) {
            infoWindow.close();
        } else {
            infoWindow.open(map, marker);
        }
    });
});