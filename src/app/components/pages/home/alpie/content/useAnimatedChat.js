'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

const REVEAL_DELAY = 1400;
const BOT_REPLY_DELAY = 900;

export default function useAnimatedChat(queue, botReply = 'Спасибо за сообщение! Сейчас уточню детали и вернусь с ответом.') {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);
  const listRef = useRef(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 });

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i >= queue.length) {
        clearInterval(interval);
        return;
      }
      setMessages((prev) => [...prev, queue[i]]);
      i += 1;
    }, REVEAL_DELAY);
    return () => clearInterval(interval);
  }, [inView, queue]);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, isBotTyping]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const text = input.trim();
      if (!text) return;
      const userMsg = { sender: 'send-message', text, id: `u-${Date.now()}` };
      setMessages((prev) => [...prev, userMsg]);
      setInput('');
      setIsBotTyping(true);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: 'bot-message', text: botReply, id: `b-${Date.now()}` },
        ]);
        setIsBotTyping(false);
      }, BOT_REPLY_DELAY + Math.min(1200, text.length * 30));
    },
    [input, botReply],
  );

  return { ref, listRef, messages, input, setInput, handleSubmit, isBotTyping };
}
