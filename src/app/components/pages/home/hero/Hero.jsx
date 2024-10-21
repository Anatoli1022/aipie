'use client';
import React, { useState, useEffect, useMemo } from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';
import styles from './Hero.module.scss';
import border from './images/border.webp';
import arrow from '../../../assets/arrow.svg';
const cx = classNames.bind(styles);

const Hero = () => {
  const staticText = 'ИИ, который '; // Неизменяемая часть
  const dynamicWords = useMemo(
    () => ['консультирует', 'продает', 'квалифицирует клиента'],
    [],
  ); // Слова, которые будут заменяться
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // Индекс текущего слова
  const [displayedWord, setDisplayedWord] = useState(''); // Отображаемое слово
  const [isDeleting, setIsDeleting] = useState(false); // Флаг для режима удаления
  const [index, setIndex] = useState(0); // Индекс для работы с буквами

  useEffect(() => {
    const currentWord = dynamicWords[currentWordIndex]; // Текущее слово
    let interval;

    if (!isDeleting && index < currentWord.length) {
      // Появление текста
      interval = setInterval(() => {
        setDisplayedWord((prev) => prev + currentWord[index]);
        setIndex((prev) => prev + 1);
      }, 100);
    } else if (isDeleting && index > 0) {
      // Удаление текста
      interval = setInterval(() => {
        setDisplayedWord((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }, 150); // Быстрое удаление
    } else if (!isDeleting && index === currentWord.length) {
      // После полного появления текста — пауза и начало удаления
      setTimeout(() => setIsDeleting(true), 1000); // Пауза перед удалением
    } else if (isDeleting && index === 0) {
      // Когда текст полностью стёрт, переключаемся на следующее слово
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % dynamicWords.length); // Переход к следующему слову
    }

    return () => clearInterval(interval);
  }, [index, isDeleting, currentWordIndex, dynamicWords]);
  return (
    <section className={cx('hero')}>
      <div className={cx('container')}>
        <div className={cx('wrapper-content')}>
          <h1 className={cx('title')}>Aipie</h1>
          <p className={cx('text')}>
            AI сотрудник – ваше конкурентное преимущество, всегда на связи 24/7
          </p>

          <div className={cx('wrapper')}>
            <span className={cx('ai-text')}>
              {staticText}
              {displayedWord.split('').map((char, index) => (
                <span key={index}>{char === ' ' ? '\u00A0' : char}</span>
              ))}
            </span>
            <Image
              src={border}
              className={cx('image')}
              alt=""
              aria-hidden="true"
              loading="eager"
            />
          </div>

          <button className={cx('button')} type="button">
            <Image
              src={arrow}
              alt=""
              width={40}
              height={40}
              loading="lazy"
              aria-hidden="true"
            />
            <span className={cx('button-text')}>Попробовать Aipie</span>
          </button>
        </div>

        <iframe
          className={cx('iframe')}
          src="https://my.spline.design/-f4ec32c28f52a6868167ac78ea55bb63/"
          width="100%"
          height="100%"
          style={{ minHeight: '1000px' }}
        ></iframe>
      </div>
    </section>
  );
};

export default Hero;
