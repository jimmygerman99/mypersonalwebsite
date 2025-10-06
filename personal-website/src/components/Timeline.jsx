import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Props:
 *  - items: [{ year, title, subtitle?, event?, description? }]
 *  - startLabel?, endLabel?
 *  - infoHeightClass?: Tailwind height class for the caption block (default "h-36 md:h-32")
 */
export default function TimelineScrubber({
  items = [],
  startLabel,
  endLabel,
  infoHeightClass = 'h-36 md:h-32',
}) {
  const data = useMemo(() => {
    const copy = [...items];
    copy.sort((a, b) => {
      const ay = isNaN(+a.year) ? Number.MAX_SAFE_INTEGER : +a.year;
      const by = isNaN(+b.year) ? Number.MAX_SAFE_INTEGER : +b.year;
      return ay - by;
    });
    return copy;
  }, [items]);

  const [idx, setIdx] = useState(0);
  const active = data[idx];

  const railRef = useRef(null);
  const [railWidth, setRailWidth] = useState(0);

  useEffect(() => {
    function recalc() {
      if (!railRef.current) return;
      setRailWidth(railRef.current.offsetWidth);
    }
    recalc();
    window.addEventListener('resize', recalc);
    return () => window.removeEventListener('resize', recalc);
  }, []);

  const onTickClick = (i) => setIdx(i);

  function positionToIndex(clientX) {
    if (!railRef.current) return 0;
    const { left, width } = railRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - left, width));
    const t = x / width;
    return Math.round(t * (data.length - 1));
  }
  function onPointerMove(e) {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setIdx(positionToIndex(clientX));
  }
  function onKeyDown(e) {
    if (e.key === 'ArrowRight') setIdx((i) => Math.min(i + 1, data.length - 1));
    if (e.key === 'ArrowLeft') setIdx((i) => Math.max(i - 1, 0));
    if (e.key === 'Home') setIdx(0);
    if (e.key === 'End') setIdx(data.length - 1);
  }

  const thumbLeft =
    railWidth === 0 ? 0 : (idx / Math.max(1, data.length - 1)) * railWidth;

  return (
    <div className="w-full">
      <div className={`relative ${infoHeightClass} mb-4`}>
        {/* The outer div has a fixed height; we absolutely position the animated
            content inside so the height never changes, preventing layout jumps. */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={`${active?.year}-${idx}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="absolute inset-0"
          >
            <div className="h-full flex flex-col items-center justify-center text-center px-4">
              <div className="text-sm uppercase tracking-wide text-slate-400">
                {String(active?.year)}
              </div>
              <div className="text-lg font-semibold text-slate-100 mt-0.5">
                {active?.title}
              </div>
              {active?.subtitle && (
                <div className="text-slate-400 text-sm mt-0.5">
                  {active.subtitle}
                </div>
              )}

              {(active?.event || active?.description) && (
                <div className="mt-3 w-full max-w-3xl mx-auto overflow-y-auto">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {active?.event ?? active?.description}
                  </p>
                </div>
              )}

              <div className="pointer-events-none absolute left-0 right-0 top-0 h-4 bg-gradient-to-b from-slate-900/60 to-transparent" />
              <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-4 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="px-2 md:px-6">
        <div
          ref={railRef}
          className="relative h-16 select-none rounded-md
             focus:outline-none
             focus-visible:ring-2 focus-visible:ring-blue-500/40
             focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          role="slider"
          aria-valuemin={0}
          aria-valuemax={data.length - 1}
          aria-valuenow={idx}
          aria-label="Timeline scrubber"
          tabIndex={0}
          onKeyDown={onKeyDown}
          onMouseDown={(e) => {
            onPointerMove(e);
            const move = (evt) => onPointerMove(evt);
            const up = () => {
              window.removeEventListener('mousemove', move);
              window.removeEventListener('mouseup', up);
            };
            window.addEventListener('mousemove', move);
            window.addEventListener('mouseup', up);
          }}
          onTouchStart={onPointerMove}
          onTouchMove={onPointerMove}
        >
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-slate-700/60" />

          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between">
            {data.map((d, i) => (
              <button
                key={`${d.year}-${i}`}
                type="button"
                className="relative group outline-none"
                onClick={() => onTickClick(i)}
                aria-label={`Jump to ${d.year}`}
              >
                <span
                  className={`block w-[2px] rounded-full transition-all ${
                    i === idx
                      ? 'h-5 bg-blue-400'
                      : 'h-4 bg-slate-500/60 group-hover:bg-slate-400/80'
                  }`}
                />
                <span
                  className={`hidden md:block absolute -top-7 left-1/2 -translate-x-1/2 text-xs px-2 py-0.5 rounded-full border ${
                    i === idx
                      ? 'border-blue-500/60 text-blue-300'
                      : 'border-slate-700 text-slate-400'
                  } bg-slate-900`}
                >
                  {d.year}
                </span>
              </button>
            ))}
          </div>

          <motion.div
            className="absolute top-1/2 -translate-y-1/2"
            animate={{ left: thumbLeft }}
            transition={{
              type: 'spring',
              stiffness: 180,
              damping: 20,
              mass: 0.2,
            }}
          >
            <div className="w-[10px] h-[10px] rounded-full bg-blue-500 ring-4 ring-slate-900 border border-blue-300" />
          </motion.div>
        </div>

        <div className="flex justify-between text-xs text-slate-500 mt-2 px-1">
          <span>{startLabel ?? data[0]?.year}</span>
          <span>{endLabel ?? data[data.length - 1]?.year}</span>
        </div>
      </div>

      <div className="mt-3 text-center text-xs text-slate-400">
        Drag, click, or use ← → to scrub through the years
      </div>
    </div>
  );
}
