import { useEffect, useState } from 'react';

export function useTypewriter(words: string[], typingMs = 70, pauseMs = 1400, deletingMs = 35) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];

    if (!deleting && text === current) {
      const pause = setTimeout(() => setDeleting(true), pauseMs);
      return () => clearTimeout(pause);
    }

    if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const delay = deleting ? deletingMs : typingMs;
    const timeout = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      );
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typingMs, pauseMs, deletingMs]);

  return text;
}
