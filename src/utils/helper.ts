import { LANGUAGE, ORDER } from "types/common";

export const HP_LANGUAGE_PARAMETER_FILTER = (lang: keyof typeof LANGUAGE) => {
  if (!lang || !Object.keys(LANGUAGE).includes(lang)) return LANGUAGE.ko;
  return LANGUAGE[lang];
};

export const HP_ORDER_PARAMETER_FILTER = (order: keyof typeof ORDER) => {
  if (!order || !Object.keys(ORDER).includes(order)) return ORDER.desc;
  return ORDER[order];
};

export const HP_MULTI_LANG_HANDLER = (lang: string, ko: string, en: string) => {
  return lang === LANGUAGE.ko ? ko : en;
};
