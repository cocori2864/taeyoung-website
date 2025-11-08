import React from 'react';
import './NewsSection.css';

interface NewsItem {
  id: number;
  category: string;
  title: string;
  date: string;
  excerpt: string;
}

const NewsSection: React.FC = () => {
  const news: NewsItem[] = [
    {
      id: 1,
      category: '수상',
      title: '2024 대한민국 일자리 으뜸기업 선정',
      date: '2024.10.15',
      excerpt: '태영엔지니어링이 고용노동부 주관 \'2024 대한민국 일자리 으뜸기업\'에 선정되었습니다.'
    },
    {
      id: 2,
      category: '계약',
      title: '베트남 태양광 발전소 설계 계약 체결',
      date: '2024.10.10',
      excerpt: '베트남 떠이닌성 300MW급 태양광 발전소 설계 용역 계약을 체결했습니다.'
    },
    {
      id: 3,
      category: '공지',
      title: '2025년도 신입사원 공개채용 시작',
      date: '2024.10.05',
      excerpt: '2025년도 대졸 신입사원 공개채용을 시작합니다. 많은 지원 바랍니다.'
    }
  ];

  return (
    <section className="news section">
      <div className="container">
        <div className="news__header">
          <h2 className="news__title">뉴스 & 공지</h2>
          <a href="/pr/news" className="news__more-link">
            더보기
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="news__list">
          {news.map((item) => (
            <article key={item.id} className="news-item">
              <a href={`/pr/news/${item.id}`} className="news-item__link">
                <div className="news-item__content">
                  <span className="news-item__category">{item.category}</span>
                  <h3 className="news-item__title">{item.title}</h3>
                  <p className="news-item__excerpt">{item.excerpt}</p>
                </div>
                <time className="news-item__date">{item.date}</time>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;