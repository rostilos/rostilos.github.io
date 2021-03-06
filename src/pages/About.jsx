import React, { useState } from 'react';


function About() {


    return (
        <div className="about-page">
            <section className="about-page__banner banner-about">
                <div className="banner-about__body">
                    <div className="banner-about__content">
                        <div className="banner-about__label">О магазине</div>
                        <h1 className="banner-about__title">Интернет-магазин «Лофт Мебель»: купите хорошую мебель в один клик! </h1>
                        <p>Уникальный формат интернет-магазина позволит вам купить лучшую мебель крупнейших российских фабрик максимально быстро и по выгодной цене!</p>
                        <p>Мы благодарим за доверие более десятка производителей, которые дали нам возможность представлять лучшие образцы их продукции в российском интернет-пространстве. Прямые договоры на поставку мебели с фабрик обеспечивают наиболее привлекательные условия для наших покупателей.</p>
                    </div>
                    <div className="banner-about__image ">
                        <img src="/images/about/banner-img.png" alt="" />
                    </div>
                </div>
            </section>

            <section className="about-page__advantages advantages">
                <div className="advantages__container _container">
                    <h2 className="advantages__title">Покупайте с выгодой!</h2>
                    <ul className="advantages__list">
                        <li className="advantages__item advantage">
                            <div className="advantage__image ">
                                <img src="/images/about/profit.png" alt="" />
                            </div>
                            <div className="advantage__content ">
                                <div className="advantage__title">Лучшая цена</div>
                                <p>Предлагаем близкие к оптовым цены, которые дают возможность приобретать мебель дешевле, чем в розничных салонах и шоу-румах.</p>
                            </div>
                        </li>

                        <li className="advantages__item advantage">
                            <div className="advantage__image ">
                                <img src="/images/about/vector.png" alt="" />
                            </div>
                            <div className="advantage__content">
                                <div className="advantage__title">Прямые поставки</div>
                                <p>С ведущих мебельных фабрик уменьшают срок выполнения вашего заказа, даже если речь идет об изготовлении предметов по индивидуальному проекту.</p>
                            </div>
                        </li>

                        <li className="advantages__item advantage">
                            <div className="advantage__image">
                                <img src="/images/about/time.png" alt="" />
                            </div>
                            <div className="advantage__content">
                                <div className="advantage__title">Экономие времени</div>
                                <p>Не нашли оптимальный вариант или нет времени на поиски? Оставьте онлайн-заявку с критериями, и мы предложим вам несколько достойных образцов.</p>
                            </div>
                        </li>

                        <li className="advantages__item advantage">
                            <div className="advantage__image">
                                <img src="/images/about/production.png" alt="" />
                            </div>
                            <div className="advantage__content">
                                <div className="advantage__title">Изготовление на заказ</div>
                                <p>Принимаем заявки на изготовление мебели по персональному дизайн-проекту от покупателей из любой точки России. Просим быть готовыми к авансированной оплате персональных заказов.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="about-page__features features">
                <div className="features__container _container">
                    <ul className="features__list">
                        <li className="features__item">
                            <h3 className="features__title">Самые «вкусные» предложения</h3>
                            <span></span>
                            <p>Мы делаем всё необходимое, чтобы покупатели получали доступ к актуальным новинкам, которые представляет российский мебельный рынок. Познакомиться с каждой моделью, сравнить цены на аналоги и выбрать лучшее вы можете прямо сейчас. Хотите первыми узнавать о самых выгодных предложениях? Тогда подписывайтесь на информационную рассылку!</p>
                        </li>

                        <li className="features__item">
                            <h3 className="features__title">Гарантированное качество</h3>
                            <span></span>
                            <p>Вся продукция сопровождается гарантией производителя. В каталогах представлена только сертифицированная мебель. Собственный контроль качества тщательно проверяет каждый образец перед отправкой заказчику. Покупатели получают необходимые документы – гарантийный талон и чек.</p>
                        </li>

                        <li className="features__item">
                            <h3 className="features__title">Впечатляющий ассортимент</h3>
                            <span></span>
                            <p>Ежедневно мы выбираем для наших каталогов идеальные образцы из товарной матрицы производителей по всей России. Модные расцветки, экологически безопасные материалы, надежные комплектующие – у нас вы найдете мебель своей мечты!</p>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="about-page__about-service about-service">
                <div className="about-service__container _container">
                    <ul className="about-service__list">
                        <li className="about-service__item">
                            <div className="about-service__image">
                                <img src="/images/about/coop.png" alt="" />
                            </div>
                            <div className="about-service__content">
                                <h3 className="about-service__title">Особенные условия для оптовиков</h3>
                                <p>Число наших оптовых покупателей неуклонно возрастает и всё потому, что мы сумели предложить владельцам мебельных магазинов наиболее выгодные условия.</p>
                            </div>
                        </li>

                        <li className="about-service__item">
                            <div className="about-service__image">
                                <img src="/images/about/delivery-box.png" alt="" />
                            </div>
                            <div className="about-service__content">
                                <h3 className="about-service__title">Оперативная доставка</h3>
                                <p>Собственная курьерская служба быстро привезет купленную мебель по указанному адресу. В российские регионы доставка осуществляется силами транспортных компаний.</p>
                            </div>
                        </li>

                        <li className="about-service__item">
                            <div className="about-service__image">
                                <img src="/images/about/support.png" alt="" />
                            </div>
                            <div className="about-service__content">
                                <h3 className="about-service__title">Внимательный сервис</h3>
                                <p>Квалифицированные менеджеры интернет-магазина ответят на все вопросы по ассортименту и предоставляемым  возможностям, а также помогут оформить заказ и проконтролируют реализацию клиентских пожеланий при заказе мебели. </p>
                            </div>
                        </li>

                        <li className="about-service__item">
                            <div className="about-service__image">
                                <img src="/images/about/re.png" alt="" />
                            </div>
                            <div className="about-service__content">
                                <h3 className="about-service__title">Каждый пятый покупатель заказывает у насповторно! </h3>
                                <p>И мы благодарим всех, кто воспользовался нашим уникальным предложением, заказал мебель быстро и недорого и порекомендовал  друзьям и знакомым. </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="about-page__economy economy">
                <div className="economy__container _container">
                    <p className="economy__tagline">Мы поможем сэкономить время, силы и деньги!</p>
                    <ul className="economy__list">
                        <li className="economy__item">
                            <div className="economy__icon">
                                <img src="/images/about/check.png" alt="" />
                            </div>
                            <div className="economy__content">
                                <b>Время.</b>
                                <p>Примем вашу заявку в кротчайшие сроки. При необходимости подберем для вас достойные варианты по заданным критериям.</p>
                            </div>
                        </li>

                        <li className="economy__item">
                            <div className="economy__icon">
                                <img src="/images/about/check.png" alt="" />
                            </div>
                            <div className="economy__content">
                                <b>Силы. </b>
                                <p>Закупим оптом или закажем на фабрике, избавив от длительных обсуждений заказа с исполнителем. Курируем все этапы работы над заказом.</p>
                            </div>
                        </li>

                        <li className="economy__item">
                            <div className="economy__icon">
                                <img src="/images/about/check.png" alt="" />
                            </div>
                            <div className="economy__content">
                                <b>Деньги. </b>
                                <p>Вы точно купите мебель дешевле, чем в розницу.</p>
                            </div>
                        </li>
                    </ul>
                    <p className="economy__tagline economy__tagline--indented">На чем мы не экономим? <br /> На вашем комфорте икачестве мебели!</p>
                </div>
            </section>
        </div>
    )
}

export default About;
