import React from 'react';
import './NewsSection.css';

const NewsSection: React.FC = () => {
  const newsCategories = [
    { id: 'notice', label: '공지사항', count: 156 },
    { id: 'news', label: '보도자료', count: 342 },
    { id: 'recruitment', label: '채용소식', count: 28 },
    { id: 'award', label: '수상소식', count: 45 }
  ];

  const newsItems = [
    {
      id: 1,
      category: '보도자료',
      title: '태영설비기술사사무소, 대형 복합시설 설비설계 수주',
      content: '태영설비기술사사무소가 서울 강남구 대형 복합시설 기계 및 소방설비 설계를 수주하였습니다. 이번 프로젝트는 연면적 10만㎡ 규모의 대형 사업으로...',
      date: '2024.11.15',
      views: 1234,
      thumbnail: 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 2,
      category: '공지사항',
      title: '2025년 신입사원 공개채용 안내',
      content: '태영설비기술사사무소에서 미래를 함께 만들어갈 인재를 모집합니다. 건축설비 설계 분야의 전문가를 양성할 열정 있는 신입사원을 찾고 있습니다.',
      date: '2024.11.10',
      views: 5678,
      thumbnail: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80'
    },
    {
      id: 3,
      category: '수상소식',
      title: '대한민국 녹색경영대상 대통령 표창 수상',
      content: '태영설비기술사사무소가 친환경 설비설계 우수기업으로 선정되어 국토교통부 장관 표창을 수상하였습니다.',
      date: '2024.11.08',
      views: 892,
      thumbnail: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 4,
      category: '보도자료',
      title: '친환경 제로에너지 빌딩 설비설계 완료',
      content: '태영설비기술사사무소가 설계한 서울 지속가능 친환경 빌딩 프로젝트가 완료되어 본격 가동에 들어갔습니다.',
      date: '2024.11.05',
      views: 2341,
      thumbnail: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?ixlib=rb-4.0.3&auto=format&fit=crop&w=1092&q=80'
    }
  ];

  return (
    <section id="news" className="news-section">
      <div className="news-section__container">
        {/* Section Header */}
        <div className="news-section__header">
          <span className="news-section__label">03</span>
          <h2 className="news-section__title">
            <span className="news-section__title-en">NEWS</span>
            <span className="news-section__title-ko">뉴스 & 소식</span>
          </h2>
          <p className="news-section__subtitle">
            태영설비기술사사무소의 최신 소식을 전해드립니다
          </p>
        </div>

        {/* News Categories */}
        <div className="news-section__categories">
          {newsCategories.map((category) => (
            <div key={category.id} className="news-category">
              <div className="news-category__info">
                <span className="news-category__label">{category.label}</span>
                <span className="news-category__count">{category.count}</span>
              </div>
              <div className="news-category__bar">
                <div className="news-category__progress" style={{width: `${(category.count / 350) * 100}%`}}></div>
              </div>
            </div>
          ))}
        </div>

        {/* News Grid */}
        <div className="news-section__grid">
          {newsItems.map((item) => (
            <article key={item.id} className="news-card">
              <div className="news-card__image">
                <img src={item.thumbnail} alt={item.title} />
                <div className="news-card__overlay">
                  <button className="news-card__read-btn">자세히 읽기</button>
                </div>
              </div>
              <div className="news-card__content">
                <div className="news-card__meta">
                  <span className="news-card__category">{item.category}</span>
                  <time className="news-card__date">{item.date}</time>
                </div>
                <h3 className="news-card__title">{item.title}</h3>
                <p className="news-card__excerpt">{item.content}</p>
                <div className="news-card__footer">
                  <span className="news-card__views">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M1 8C1 8 3.5 3 8 3C12.5 3 15 8 15 8C15 8 12.5 13 8 13C3.5 13 1 8 1 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                    {item.views.toLocaleString()}
                  </span>
                  <button className="news-card__share">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M12 5.5C12.8284 5.5 13.5 4.82843 13.5 4C13.5 3.17157 12.8284 2.5 12 2.5C11.1716 2.5 10.5 3.17157 10.5 4C10.5 4.82843 11.1716 5.5 12 5.5Z" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M4 9.5C4.82843 9.5 5.5 8.82843 5.5 8C5.5 7.17157 4.82843 6.5 4 6.5C3.17157 6.5 2.5 7.17157 2.5 8C2.5 8.82843 3.17157 9.5 4 9.5Z" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M5.5 7.5L10.5 4.5M5.5 8.5L10.5 11.5" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="news-section__footer">
          <button className="news-section__view-all">
            모든 소식 보기
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;