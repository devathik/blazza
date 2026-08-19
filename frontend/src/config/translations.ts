import { homeTranslations } from "@/modules/home/translations";
import { aboutTranslations } from "@/modules/about/translations";
import { eventsTranslations } from "@/modules/events/translations";
import { leadershipTranslations } from "@/modules/leadership/translations";
import { membershipTranslations } from "@/modules/membership/translations";
import { contactTranslations } from "@/modules/contact/translations";
import { chaptersTranslations } from "@/modules/chapters/translations";
import { newsTranslations } from "@/modules/news/translations";
import { publicationsTranslations } from "@/modules/publications/translations";
import { galleryTranslations } from "@/modules/gallery/translations";

export const translations = {
  bn: {
    ...homeTranslations.bn,
    ...aboutTranslations.bn,
    ...eventsTranslations.bn,
    ...leadershipTranslations.bn,
    ...membershipTranslations.bn,
    ...contactTranslations.bn,
    ...chaptersTranslations.bn,
    ...newsTranslations.bn,
    ...publicationsTranslations.bn,
    ...galleryTranslations.bn,
  },
  en: {
    ...homeTranslations.en,
    ...aboutTranslations.en,
    ...eventsTranslations.en,
    ...leadershipTranslations.en,
    ...membershipTranslations.en,
    ...contactTranslations.en,
    ...chaptersTranslations.en,
    ...newsTranslations.en,
    ...publicationsTranslations.en,
    ...galleryTranslations.en,
  },
};
