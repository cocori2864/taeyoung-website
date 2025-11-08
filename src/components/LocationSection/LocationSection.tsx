import React, { useEffect } from 'react';
import './LocationSection.css';

declare global {
  interface Window {
    naver: any;
    initNaverMap: () => void;
  }
}

const LocationSection: React.FC = () => {
  const officeInfo = {
    address: '서울 강남구 개포로 670 (일원동) 원일빌딩 6층'
  };

  useEffect(() => {
    // 네이버맵 스크립트 동적 로드
    const script = document.createElement('script');
    // 네이버 클라우드 플랫폼에서 발급받은 Client ID
    script.src = 'https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=hsd6dmy6o9&submodules=geocoder';
    script.async = true;
    script.defer = true;

    // 맵 초기화 함수
    window.initNaverMap = () => {
      const mapOptions = {
        center: new window.naver.maps.LatLng(37.4934, 127.0754), // 원일빌딩 좌표
        zoom: 17,
        mapTypeControl: true,
        mapTypeControlOptions: {
          style: window.naver.maps.MapTypeControlStyle.BUTTON,
          position: window.naver.maps.Position.TOP_RIGHT
        },
        zoomControl: true,
        zoomControlOptions: {
          style: window.naver.maps.ZoomControlStyle.SMALL,
          position: window.naver.maps.Position.TOP_RIGHT
        },
        scaleControl: true,
        scaleControlOptions: {
          position: window.naver.maps.Position.BOTTOM_LEFT
        }
      };

      const map = new window.naver.maps.Map('naverMap', mapOptions);

      // 마커 추가
      const marker = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(37.4934, 127.0754),
        map: map,
        title: '태영설비기술사사무소'
      });

      // 정보창 추가
      const infoWindow = new window.naver.maps.InfoWindow({
        content: `
          <div style="padding: 10px; min-width: 200px; line-height: 1.5;">
            <h4 style="margin: 0 0 5px 0; color: #003c7b;">태영설비기술사사무소</h4>
            <p style="margin: 0; font-size: 13px; color: #666;">서울 강남구 개포로 670 (일원동) 원일빌딩 6층</p>
          </div>
        `
      });

      // 마커 클릭 시 정보창 열기
      window.naver.maps.Event.addListener(marker, 'click', () => {
        if (infoWindow.getMap()) {
          infoWindow.close();
        } else {
          infoWindow.open(map, marker);
        }
      });
    };

    script.onload = () => {
      if (window.naver && window.naver.maps) {
        window.initNaverMap();
      }
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup
      const scriptElement = document.querySelector('script[src*="openapi.map.naver.com"]');
      if (scriptElement) {
        scriptElement.remove();
      }
    };
  }, []);

  return (
    <section id="location" className="location-section">
      <div className="location-section__container">
        {/* Section Header */}
        <div className="location-section__header">
          <span className="location-section__label">03</span>
          <h2 className="location-section__title">
            <span className="location-section__title-en">LOCATION</span>
            <span className="location-section__title-ko">오시는 길</span>
          </h2>
          <p className="location-section__subtitle">
            태영설비기술사사무소를 찾아오시는 길을 안내해드립니다
          </p>
        </div>

        {/* Map Container */}
        <div className="location-section__map-container">
          <div className="location-map" id="naverMap">
            {/* 네이버맵 Container - Script로 로드 */}
            <div className="map-loading">
              <p>지도를 불러오는 중입니다...</p>
            </div>
          </div>
          {/* Map Overlay with Address */}
          <div className="location-map__overlay">
            <div className="location-map__address">
              <h4>태영설비기술사사무소</h4>
              <p>{officeInfo.address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;