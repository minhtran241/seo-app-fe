import { languages } from '@/app/i18n/settings';
import { countryCode, getFlagEmoji, getLanguageName } from '@/utils/header';
import { useRouter } from 'next/navigation';

export default function LocaleSwitcher({ lng, currentPath }) {
  const router = useRouter();

  const onSelectChange = (e) => {
    const locale = e.target.value;
    router.push(`/${locale}/${currentPath}`);
  };

  return (
    <>
      <div className="py-2">
        <select
          id="languages-select"
          className="block w-full overflow-hidden rounded-none border border-primary bg-primary py-1 text-sm text-white focus:border-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          title={getLanguageName(countryCode[lng])}
          onChange={onSelectChange}
          defaultValue={lng}
        >
          {languages?.map((locale, i) => (
            <option value={locale} key={i}>
              {`${getLanguageName(countryCode[locale])}`}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
