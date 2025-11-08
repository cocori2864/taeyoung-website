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
    address: '서울 강남구 개포로 670, 6층',
    tel: '02-431-1235',
    fax: '02-431-1237',
    email: 'info@taeyoung-eng.com',
    businessHours: {
      weekday: '09:00 - 18:00',
      saturday: '토요일 휴무',
      sunday: '일요일 및 공휴일 휴무'
    }
  };

  const transportInfo = [
    {
      type: '지하철',
      icon: '🚇',
      details: [
        '3호선 대청역 1번 출구 도보 10분',
        '3호선 일원역 2번 출구 도보 12분',
        '수서역 환승 가능'
      ]
    },
    {
      type: '버스',
      icon: '🚌',
      details: [
        '간선: 402, 461',
        '지선: 3412, 3414, 3416',
        '마을: 강남01, 강남05'
      ]
    },
    {
      type: '자가용',
      icon: '🚗',
      details: [
        '건물 내 지하주차장 이용 가능',
        '방문객 2시간 무료주차',
        '네비게이션: "개포로 670" 검색'
      ]
    }
  ];

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
        center: new window.naver.maps.LatLng(37.495906, 127.073893), // 개포로 670 좌표
        zoom: 16,
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
        position: new window.naver.maps.LatLng(37.495906, 127.073893),
        map: map,
        title: '태영설비기술사사무소'
      });

      // 정보창 추가
      const infoWindow = new window.naver.maps.InfoWindow({
        content: `
          <div style="padding: 10px; min-width: 200px; line-height: 1.5;">
            <h4 style="margin: 0 0 5px 0; color: #003c7b;">태영설비기술사사무소</h4>
            <p style="margin: 0; font-size: 13px; color: #666;">서울 강남구 개포로 670, 6층</p>
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
    <section className="location-section">
      <div className="location-section__container">
        {/* Section Header */}
        <div className="location-section__header">
          <span className="location-section__label">05</span>
          <h2 className="location-section__title">
            <span className="location-section__title-en">LOCATION</span>
            <span className="location-section__title-ko">오시는 길</span>
          </h2>
          <p className="location-section__subtitle">
            태영설비기술사사무소를 찾아오시는 길을 안내해드립니다
          </p>
        </div>

        {/* Map and Info Container */}
        <div className="location-section__content">
          {/* Map Area */}
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

          {/* Info Area */}
          <div className="location-section__info">
            {/* Contact Info */}
            <div className="location-info">
              <h3 className="location-info__title">연락처 정보</h3>
              <div className="location-info__items">
                <div className="location-info__item">
                  <span className="location-info__icon">📍</span>
                  <div className="location-info__text">
                    <strong>주소</strong>
                    <p>{officeInfo.address}</p>
                  </div>
                </div>
                <div className="location-info__item">
                  <span className="location-info__icon">📞</span>
                  <div className="location-info__text">
                    <strong>대표전화</strong>
                    <p>{officeInfo.tel}</p>
                  </div>
                </div>
                <div className="location-info__item">
                  <span className="location-info__icon">📠</span>
                  <div className="location-info__text">
                    <strong>팩스</strong>
                    <p>{officeInfo.fax}</p>
                  </div>
                </div>
                <div className="location-info__item">
                  <span className="location-info__icon">✉️</span>
                  <div className="location-info__text">
                    <strong>이메일</strong>
                    <p>{officeInfo.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="location-hours">
              <h3 className="location-hours__title">업무시간</h3>
              <div className="location-hours__content">
                <div className="location-hours__item">
                  <span className="location-hours__label">평일</span>
                  <span className="location-hours__time">{officeInfo.businessHours.weekday}</span>
                </div>
                <div className="location-hours__item">
                  <span className="location-hours__label">토요일</span>
                  <span className="location-hours__time">{officeInfo.businessHours.saturday}</span>
                </div>
                <div className="location-hours__item">
                  <span className="location-hours__label">일요일/공휴일</span>
                  <span className="location-hours__time">{officeInfo.businessHours.sunday}</span>
                </div>
              </div>
            </div>

            {/* Transport Info */}
            <div className="location-transport">
              <h3 className="location-transport__title">교통편 안내</h3>
              <div className="location-transport__grid">
                {transportInfo.map((transport) => (
                  <div key={transport.type} className="transport-card">
                    <div className="transport-card__header">
                      <span className="transport-card__icon">{transport.icon}</span>
                      <h4 className="transport-card__type">{transport.type}</h4>
                    </div>
                    <ul className="transport-card__details">
                      {transport.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact CTA */}
        <div className="location-section__cta">
          <h3>방문 전 상담이 필요하신가요?</h3>
          <p>전문 상담원이 친절하게 안내해드립니다.</p>
          <div className="location-section__cta-buttons">
            <button className="cta-button cta-button--primary">
              <span>📞</span>
              전화 상담하기
            </button>
            <button className="cta-button cta-button--secondary">
              <span>✉️</span>
              이메일 문의하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;