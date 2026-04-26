'use client';
import { useMemo } from 'react';
import styles from './Styles.module.scss';
import Image from 'next/image';
import classNames from 'classnames/bind';
import manyStars from '../../../../assets/manyStars.svg';
import star from '../../../../assets/star.svg';
import lightning from '../../../../assets/lightning.svg';
import arrowButton from '../../../../assets/arrowButton.svg';
import Ai from './Ai';
import useAnimatedChat from './useAnimatedChat';

const cx = classNames.bind(styles);

const Advises = () => {
  const messageQueue = useMemo(
    () => [
      {
        sender: 'send-message',
        text: 'Добрый день, хотел бы сделать возврат товара',
        id: 1,
      },
      {
        sender: 'bot-message',
        text: 'Добрый день, вижу, что вы делали два заказа. Пожалуйста, выберите товар, который вы хотите вернуть:',
        id: 2,
      },
      { sender: 'option', text: 'Витамин D3', option: true, id: 3 },
      { sender: 'option', text: 'Омега 3', id: 4 },
      {
        sender: 'bot-message',
        text: 'Ярлык для возврата был отправлен на электронную почту, указанную в вашем аккаунте. Если вам нужно что-то еще, пожалуйста, дайте знать. Всего хорошего!',
        id: 5,
      },
      { sender: 'send-message', text: 'Отлично спасибо!', id: 6 },
    ],
    [],
  );

  const { ref, listRef, messages, input, setInput, handleSubmit, isBotTyping } =
    useAnimatedChat(
      messageQueue,
      'Принято! Оформлю возврат и пришлю ярлык на вашу почту.',
    );

  return (
    <div className={cx('content-wrapper')} ref={ref}>
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
            <button
              type="submit"
              className={cx('button-form')}
              aria-label="Отправить"
            >
              <Image
                src={arrowButton}
                alt=""
                loading="lazy"
                aria-hidden="true"
                className={cx('button-image')}
              />
            </button>
          </form>
        </div>
      </div>

      <div className={cx('wrapper')}>
        <span className={cx('text')}>Техподдержка клиентов</span>
        <h3 className={cx('title')}>Автоматическая обработка 90% заявок</h3>
        <p className={cx('text-product')}>
          AI-ассистент может довести клиента до завершения сделки, даже если
          клиент перестал отвечать
        </p>
        <ul className={cx('list')}>
          <li className={cx('item')}>
            <Image src={manyStars} alt="" loading="lazy" aria-hidden="true" />
            <p className={cx('item-text')}>Отслеживание заказов</p>
          </li>
          <li className={cx('item')}>
            <Image src={star} alt="" loading="lazy" aria-hidden="true" />
            <p className={cx('item-text')}>Обработка жалоб</p>
          </li>
          <li className={cx('item')}>
            <Image src={lightning} alt="" loading="lazy" aria-hidden="true" />
            <p className={cx('item-text')}>Обработка возвратов</p>
          </li>
        </ul>
        <button className={cx('button')}>Подключить ассистента</button>
      </div>
    </div>
  );
};

export default Advises;
