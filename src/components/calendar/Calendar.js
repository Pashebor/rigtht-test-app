import React from 'react';
import {Link} from "react-router-dom";


class Calendar extends React.Component{
  
  
  render() {
    const { articlesOnPage, reverse, search } = this.props;
    let articlesCount = 0;
    
    return(
      <section className={'articles-list'}>
        {this.props.articles.map((article, key) => (
          <React.Fragment key={key}>
            {article.list.length !== 0 ? <h3>{article.month}</h3> : null}
            {article.list.map((item, key) => {
              articlesCount += 1;
              if (!reverse && !search) {
                if (articlesCount <= articlesOnPage) {
                  return (
                    <article key={key} className={'articles-list__item'}>
                      <img src={item.preview_image} alt={item.preview_image}/>
                      <div className={'article-desc'}>
                        <time>{item.date}</time>
                        <a href={'#'}><b>{item.title}</b></a>
                        <p>{item.preview_text}</p>
                      </div>
                    </article>
                  );
                }
              } else if (reverse && !search) {
                if (articlesCount > articlesOnPage) {
                  return (
                    <article key={key} className={'articles-list__item'}>
                      <img src={item.preview_image} alt={item.preview_image}/>
                      <div className={'article-desc'}>
                        <time>{item.date}</time>
                        <a href={'#'}><b>{item.title}</b></a>
                        <p>{item.preview_text}</p>
                      </div>
                    </article>
                  )
                }
              } else {
                return (
                  <article key={key} className={'articles-list__item'}>
                    <img src={item.preview_image} alt={item.preview_image}/>
                    <div className={'article-desc'}>
                      <time>{item.date}</time>
                      <a href={'#'}><b>{item.title}</b></a>
                      <p>{item.preview_text}</p>
                    </div>
                  </article>
                )
              }
            })}
          </React.Fragment>
        ))}
        { !search
          ? <ul className="pagination">
            <li className={`pagination__item ${
              this.props.activePage === 1 ? 'pagination__item--active' : ''}`
            }><Link to={'/'}>1</Link></li>
            <li className={`pagination__item ${
              this.props.activePage === 2 ? 'pagination__item--active' : ''}`}>
              <Link to={'/2'}>2</Link>
            </li>
          </ul>
          : null
        }
        
      </section>
    )
  }
}

export default Calendar;