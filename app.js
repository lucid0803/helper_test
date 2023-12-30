document.addEventListener("DOMContentLoaded", function () {
    const map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(37.5665, 126.9780),
        zoom: 12,
    });

    // 매물 데이터 (예제에서는 하나의 매물만 표시)
    const propertyData = [
        { id: 1, latlng: new naver.maps.LatLng(37.5665, 126.9780), title: "매물 1", description: "이 매물은 테스트용입니다." }
    ];

    // 매물 마커 표시
    const markers = propertyData.map((property) => {
        const marker = new naver.maps.Marker({
            position: property.latlng,
            map: map,
            title: property.title,
        });

        // 클릭 시 정보 패널 업데이트
        naver.maps.Event.addListener(marker, "click", function (e) {
            updateInfoPanel(property);
        });

        return marker;
    });

    // 정보 패널 업데이트 함수
    function updateInfoPanel(property) {
        const infoPanel = document.getElementById("info-panel");
        infoPanel.innerHTML = `<h2>${property.title}</h2><p>${property.description}</p>`;
    }

    // 매물 개수 표시
    const markerCount = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.5665, 126.9780),
        map: map,
        icon: {
            content: '<div class="marker-count">1</div>',
            size: new naver.maps.Size(30, 30),
            anchor: new naver.maps.Point(15, 15),
        },
    });

    // 클릭 시 정보 패널 업데이트
    naver.maps.Event.addListener(markerCount, "click", function (e) {
        updateInfoPanel(propertyData[0]); // 예제에서는 첫 번째 매물 정보 표시
    });
});