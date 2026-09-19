import { LANGUAGES } from '../data/translations.js';

export default function LanguageSwitcher({ lang, onChange }) {
  return (
    <div className="language-switcher" role="group" aria-label="Language">
      {LANGUAGES.map((l) => (
        <button
          key={l.code}
          type="button"
          className={`lang-btn ${lang === l.code ? 'active' : ''}`}
          onClick={() => onChange(l.code)}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
