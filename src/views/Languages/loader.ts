export default async () => {
  const response = await fetch("/locales/languages.json");
  const languages = await response.json();
  return languages;
};
