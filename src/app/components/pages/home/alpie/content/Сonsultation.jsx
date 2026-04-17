'use client';
import { useMemo } from 'react';
import styles from './Styles.module.scss';
import Image from 'next/image';
import classNames from 'classnames/bind';
import storm from '../../../../assets/storm.svg';
import user from '../../../../assets/user.svg';
import mechanism from '../../../../assets/mechanism.svg';
import arrowButton from '../../../../assets/arrowButton.svg';
import Ai from './Ai';
import useAnimatedChat from './useAnimatedChat';

const cx = classNames.bind(styles);

const Consultation = () => {
  const messageQueue = useMemo(
    () => [
      { sender: 'send-message', text: 'Хотел бы приобрести офисный стул', id: 1 },
      { sender: 'bot-message', text: 'Здравствуйте! Подскажите, вам важно, чтобы стул был эргономичным для долгого использования, или вы ищете что-то более бюджетное?', id: 2 },
      { sender: 'send-message', text: 'Нужен стул для длительного сидения, чтобы спина не болела', id: 3 },
      { sender: 'bot-message', text: 'Ага, понял, тогда рекомендую нашу модель ErgoMaster Pro — она специально разработана для поддержки позвоночника при долгой работе. К этой модели мы можем предложить подставку для ног с регулировкой.', id: 4 },
      { sender: 'send-message', text: 'Интересно. Сколько стоит подставка?', id: 5 },
      { sender: 'bot-message', text: 'Стоимость подставки всего 1500 рублей. Если закажете прямо сейчас, я могу предложить скидку 10% на комплект.', id: 6 },
      { sender: 'send-message', text: 'Здорово, а какие сроки доставки?', id: 7 },
      { sender: 'bot-message', text: 'Доставим уже на следующий день по Москве и области. В другие регионы — от 2 до 5 дней.', id: 8 },
      { sender: 'send-message', text: 'Отлично, беру кресло и подставку!', id: 9 },
    ],
    [],
  );

  const { ref, listRef, messages, input, setInput, handleSubmit, isBotTyping } =
    useAnimatedChat(messageQueue, 'Отличный выбор! Оформляю заказ и пришлю подтверждение.');

  return (
    <div className={cx('content-wrapper')} ref={ref}>
      <div className={cx('wrapper')}>
        <span className={cx('text')}>Виджет на сайт</span>
        <h3 className={cx('title')}>Консультирует о товарах и услугах</h3>
        <p className={cx('text-product')}>
          AI-консультант, который помогает пользователям вашего сайта получить
          необходимую информацию о товарах и услугах 24/7
        </p>
        <ul className={cx('list')}>
          <li className={cx('item')}>
            <Image src={storm} alt="" loading="lazy" aria-hidden="true" />
            <p className={cx('item-text')}>Предоставление данных</p>
          </li>
          <li className={cx('item')}>
            <Image src={user} alt="" loading="lazy" aria-hidden="true" />
            <p className={cx('item-text')}>Обработка жалоб</p>
          </li>
          <li className={cx('item')}>
            <Image src={mechanism} alt="" loading="lazy" aria-hidden="true" />
            <p className={cx('item-text')}>Управление процессом</p>
          </li>
        </ul>
        <button className={cx('button')}>Установить виджет</button>
      </div>

      <div className={cx('wrapper-form')}>
        <div className={cx('wrapper-form', 'content-form')}>
          <h3 className={cx('title-form')}>Aipie</h3>

          <div className={cx('message-list')} ref={listRef}>
            <div>
              <Ai />
              <p className={cx('text-ai')}>Чем я могу помочь?</p>
            </div>
            {messages.map((msg) => (
              <span key={msg?.id} className={cx(`${msg?.sender}`, 'message')}>
                {msg?.text}
              </span>
            ))}
            {isBotTyping && (
              <span className={cx('typing')} aria-label="Assistant is typing">
                <span /> <span /> <span />
              </span>
            )}
          </div>

          <form className={cx('input-wrapper')} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Сообщение"
              className={cx('input')}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              aria-label="Введите сообщение"
            />
            <button type="submit" className={cx('button-form')} aria-label="Отправить">
              <Image src={arrowButton} alt="" loading="lazy" aria-hidden="true" className={cx('button-image')} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
