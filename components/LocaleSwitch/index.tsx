import { languages } from '@/app/i18n/settings';
import Link from 'next/link';
import { countryCode, getFlagEmoji } from '@/utils/header';

export default function LocaleSwitcher({ lng, currentPath }) {
  return (
    <>
      <div className="flex space-x-1">
        {languages?.map((locale, i) => (
          <Link
            href={`/${locale}/${currentPath}`}
            locale={locale}
            className="h-[20px] w-[25px]"
            key={i}
          >
            {getFlagEmoji(countryCode[locale])}
          </Link>
        ))}
      </div>
    </>
  );
}
