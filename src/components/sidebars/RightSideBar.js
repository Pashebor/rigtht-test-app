import React from 'react';
import Banner from '../elements/banners/Banner';
import sideBarImage from '../../assets/images/sidebar-image.jpg'
import DefaultForm from "../elements/forms/DefaultForm";

const RightSideBar = () => (
  <aside className={'sidebar sidebar-right'}>
    <Banner
      position={'sidebar'}
      image={sideBarImage}
    />
    <section className={'sidebar__advertisement'}>
      <h3>Реклама</h3>
      <p>
        <a href="#"><strong>Юридическая компания РКТ</strong></a>
        специализируется на сопровождении процедур банкротства юридических лиц,
        разрешении споров, 
        реструктуризации задолженности и антикризисном управлении активами <a href="#"><strong>>>></strong></a>
      </p>
    </section>
    <section className={'sidebar__forms'}>
      <h3>Подписаться на новости</h3>
      <DefaultForm>
        <input type={'text'} placeholder={'Введите email'}/>
        <button className={'button'}>Подписаться</button>
      </DefaultForm>
      <h3>План мероприятий - 2018</h3>
      <a href="#" className="button">Скачать</a>
    </section>
  </aside>
)

export default RightSideBar;