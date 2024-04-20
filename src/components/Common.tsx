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
      <div className="flex justify-center items-center h-full gap-5">
        <div className="flex">
          <div>
            <div>{HP_MULTI_LANG_HANDLER(lang, "언어", "Language")} </div>
          </div>
          <div>
            <select
              name="favorite-cuisine"
              aria-label="언어 설정"
              required
              onChange={(e) => handleChangeSelect("lang", e.target.value)}
            >
              <option disabled value="ko">
                {HP_MULTI_LANG_HANDLER(
                  lang,
                  "언어를 선택하세요.",
                  "Choose a Language",
                )}
              </option>
              <option value="ko" selected={lang === LANGUAGE.ko}>
                한국어
              </option>
              <option value="en" selected={lang === LANGUAGE.en}>
                ENGLISH
              </option>
            </select>
          </div>
        </div>
        <div className="flex">
          <div>{HP_MULTI_LANG_HANDLER(lang, "정렬", "Sort")}</div>
          <div>
            <select
              name="favorite-cuisine"
              aria-label=""
              required
              onChange={(e) => handleChangeSelect("order", e.target.value)}
            >
              <option disabled value="">
                {HP_MULTI_LANG_HANDLER(
                  lang,
                  "정렬방식을 선택하세요.",
                  "Choose a Sorting method",
                )}
              </option>
              <option value="desc" selected={order === ORDER.desc}>
                {HP_MULTI_LANG_HANDLER(lang, "최근 순", "recent")}
              </option>
              <option value="asc" selected={order === ORDER.asc}>
                {HP_MULTI_LANG_HANDLER(lang, "오래된 순", "old")}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
