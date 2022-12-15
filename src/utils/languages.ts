export interface Language {
  code: string;
  name: string;
  nativeName: string;
  rtl: boolean;
  flag: string;
}

export const languages: Language[] = [
  {
    code: "en",
    name: "English",
    nativeName: "English",
    rtl: false,
    flag: "🇬🇧",
  },
  {
    code: "ua",
    name: "Ukrainian",
    nativeName: "Українська",
    rtl: false,
    flag: "🇺🇦",
  },
];

export const currentLanguage = (code = "en"): Language =>
  languages.find((language) => language.code === code) as Language;
