import { createI18n } from "vue-i18n";
import * as en from './locales/en.json'

// function loadLocaleMessages() {
//   // eslint-disable-next-line no-undef
//   const locales = require.context(
//     "./locales",
//     true,
//     /[A-Za-z0-9-_,\s]+\.json$/i
//   );
//   const messages = {};
//   locales.keys().forEach((key) => {
//     const matched = key.match(/([a-z0-9]+)\./i);
//     if (matched && matched.length > 1) {
//       const locale = matched[1];
//       messages[locale] = locales(key);
//     }
//   });
//   return messages;
// }

export default createI18n({
  locale: "en",
  fallbackLocale: "en",
  legacy: false,
  messages: en
});
