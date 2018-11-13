import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Banner from '../elements/banners/Banner';
import titleImage from '../../assets/images/title-image.jpg';
import DefaultForm from "../elements/forms/DefaultForm";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Calendar from "../calendar/Calendar";
import Footer from "./Footer";
import { searchFilter } from './../../utils/search.filter';
import { setFilteredArticles } from './../../actions/actions';

class Main extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      isSearch: false
    }
  }
  
  componentDidMount() {
    this.props.setFilteredArticles(searchFilter(this.props.articles, ''))
  }
  
  onSearchEventHandler(event) {
    event.target.value ? this.setState({isSearch: true}) : this.setState({isSearch: false});
    this.props.setFilteredArticles(searchFilter(this.props.articles, event.target.value));
  }
  
  render() {
    return (
      <main className={'content'}>
        <Banner
          position={'title'}
          image={titleImage}
          titleText={`
          Торжественная
          церемония награждения лидеров
          рейтинга юридических компаний России
          "Право.ru-300" и юбилей портала «Право.ru»`
          }
          date={'5 декабря'}
        />
        <DefaultForm>
          <input type={'text'} onKeyUp={this.onSearchEventHandler.bind(this)} placeholder={'Пойск мероприятий'}/>
        </DefaultForm>
        <HashRouter>
          <Switch>
            <Route exact path={'/'} component={
              () => <Calendar articles={this.props.filteredArticles}
                              activePage={1}
                              articlesOnPage={5}
                              reverse={false}
                              search={this.state.isSearch}
              />
            }/>
          <Route path={'/2'} component={
              () => <Calendar articles={this.props.filteredArticles}
                              activePage={2}
                              articlesOnPage={5}
                              reverse={true}
                              search={this.state.isSearch}
              />
            }/>
          </Switch>
        </HashRouter>
        <Footer/>
      </main>
    )
  }
}

export function mapStateToProps(store) {
  return {
    articles: store.mainReducer.articles,
    filteredArticles: store.mainReducer.filteredArticles
  }
}

export const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setFilteredArticles }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);