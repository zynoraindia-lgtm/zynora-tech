'use client';

import Reveal from './Reveal';

export default function SectionHeader({
  eyebrow,
  title,
  accent,
  description,
  align = 'left',
  className = '',
  children,
}) {
  const alignment =
    align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      {eyebrow ? (
        <Reveal direction="fade">
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      ) : null}

      <Reveal delay={0.06}>
        <h2 className={`h2 mt-5 max-w-3xl text-balance ${align === 'center' ? 'mx-auto' : ''}`}>
          {title}
          {accent ? <span className="accent-text"> {accent}</span> : null}
        </h2>
      </Reveal>

      {description ? (
        <Reveal delay={0.12}>
          <p className={`lead mt-5 max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
            {description}
          </p>
        </Reveal>
      ) : null}

      {children}
    </div>
  );
}
