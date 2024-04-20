import { LANGUAGE, ORDER } from "@/types/common";
import { HP_MULTI_LANG_HANDLER } from "@/utils/helper";

export const IndexNavigation = ({
  lang,
  order,
}: {
  lang: string;
  order: string;
}) => {
  const handleChangeSelect = (key: string, value: string) => {
    const sp = new URLSearchParams(window.location.search);
    sp.set(key, value);
    window.location.search = sp.toString();
  };
  return (
    <div className="bg-white w-full h-16 sticky top-0 shadow-[0px_0px_5px_0px_rgba(0,0,0,0.55)]">
      <div className="flex flex-col md:flex-row md:gap-5 justify-center items-center h-full gap-1">
        <div className="flex">
          <div className="flex-1">
            {HP_MULTI_LANG_HANDLER(lang, "언어", "Language")}
          </div>
          <select
            className="flex-1"
            aria-label=""
            defaultValue={lang === LANGUAGE.ko ? "ko" : "en"}
            onChange={(e) => handleChangeSelect("lang", e.target.value)}
          >
            <option value="ko">한국어</option>
            <option value="en">ENGLISH</option>
          </select>
        </div>
        <div className="flex">
          <div className="flex-1">
            {HP_MULTI_LANG_HANDLER(lang, "정렬", "Sort")}
          </div>
          <select
            className="flex-1 min-w-[120px]"
            aria-label=""
            defaultValue={order === ORDER.desc ? "recent" : "asc"}
            onChange={(e) => handleChangeSelect("order", e.target.value)}
          >
            <option value="desc">
              {HP_MULTI_LANG_HANDLER(lang, "최근 순", "recent")}
            </option>
            <option value="asc">
              {HP_MULTI_LANG_HANDLER(lang, "오래된 순", "old")}
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};
