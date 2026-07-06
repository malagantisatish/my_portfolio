import { useEffect, useState } from 'react';
import { TbChevronLeft, TbChevronRight, TbPhoto } from 'react-icons/tb';

interface ImageCarouselProps {
  images?: string[];
  alt: string;
  autoPlayMs?: number;
}

export default function ImageCarousel({ images, alt, autoPlayMs = 3500 }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const hasImages = images && images.length > 0;
  const count = images?.length ?? 0;

  useEffect(() => {
    if (!hasImages || count <= 1 || paused) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, autoPlayMs);
    return () => clearInterval(timer);
  }, [hasImages, count, paused, autoPlayMs]);

  if (!hasImages) {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded-md border border-dashed border-border-light bg-bg-light text-muted-light dark:border-border-dark dark:bg-bg-dark dark:text-muted-dark">
        <div className="flex flex-col items-center gap-1.5 text-center">
          <TbPhoto size={22} />
          <span className="font-mono text-[11px]">Screenshots coming soon</span>
        </div>
      </div>
    );
  }

  const goTo = (i: number) => setIndex(((i % count) + count) % count);

  return (
    <div
      className="group/carousel relative aspect-video w-full overflow-hidden rounded-md border border-border-light bg-bg-light dark:border-border-dark dark:bg-bg-dark"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images!.map((src, i) => (
          <img
            key={src + i}
            src={src}
            alt={`${alt} screenshot ${i + 1}`}
            className="h-full w-full flex-none object-cover"
            loading="lazy"
          />
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous screenshot"
            className="absolute left-1.5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-bg-dark/60 text-white opacity-0 transition-opacity group-hover/carousel:opacity-100"
          >
            <TbChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next screenshot"
            className="absolute right-1.5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-bg-dark/60 text-white opacity-0 transition-opacity group-hover/carousel:opacity-100"
          >
            <TbChevronRight size={16} />
          </button>

          <div className="absolute inset-x-0 bottom-2 flex items-center justify-center gap-1.5">
            {images!.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to screenshot ${i + 1}`}
                className={[
                  'h-1.5 rounded-full transition-all',
                  i === index ? 'w-4 bg-accent' : 'w-1.5 bg-white/60 hover:bg-white',
                ].join(' ')}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
