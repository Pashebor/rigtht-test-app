import { FILTERED_ARTICLES } from '../actions/constants';

const initialState = {
    articles: [{
        month: 'Ноябрь',
        list: [{
          id: 1,
          title: 'Банкротство – 2018: поиск баланса',
          date: '16 ноября',
          preview_text: 'Ararat Park Hyatt, зал Саргсян',
          preview_image: 'images/1.jpg'
        }, {
          id: 2,
          title: 'LITIGATION SKILLS',
          date: '20 ноября',
          preview_text: 'Конференц-центр Newsroom',
          preview_image: 'images/2.jpg'
        }, {
          id: 3,
          title: 'Круглый стол "Арбитражная практика — 2017-2018',
          date: '23 ноября',
          preview_text: 'Марриотт Роял Аврора',
          preview_image: 'images/3.png'
        }, {
          id: 4,
          title: 'Комплаенс – 2018: тенденции и лучшие практики',
          date: '28 ноября',
          preview_text: 'Марриотт Роял Аврора',
          preview_image: 'images/4.jpg'
        } ],
    }, {
      month: 'Декабрь',
      list: [
        {
          id: 5,
          title: 'Торжественная церемония награждения лидеров рейтинга юридических компаний России "Право.ru-300" и юбилей портала «Право.ru»',
          date: '5 декабря',
          preview_text: 'The Ritz Carlton',
          preview_image: 'images/5.jpg'
        }, {
          id: 6,
          title: 'Уголовно-правовая ответственность бизнеса - 2018',
          date: '12 декабря',
          preview_text: 'Ararat Park Hyatt, зал Саргсян',
          preview_image: 'images/6.jpg'
        }, {
          id: 7,
          title: 'Экономика юридического бизнеса: перезагрузка',
          date: '19 декабря',
          preview_text: 'Ararat Park Hyatt, зал Саргсян',
          preview_image: 'images/7.jpg'
        }, {
          id: 8,
          title: 'Экономика юридической фирмы',
          date: '19 декабря',
          preview_text: 'Ararat Park Hyatt, зал Саргсян',
          preview_image: 'images/8.jpg'
        }
      ]
    }],
  filteredArticles: []
};

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
      case FILTERED_ARTICLES:
        return Object.assign({}, state, {filteredArticles: action.payload})
    }
    return state;
};