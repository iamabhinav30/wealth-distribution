import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Wealth Distribution Among Siblings": "Wealth Distribution",
      "Home": "Home",
      "About": "About",
      "Enter Total Wealth": "Enter Total Wealth",
      "Total Wealth": "Total Wealth",
      "Add a Sibling": "Add a Sibling",
      "Sibling Name": "Sibling Name",
      "Age": "Age",
      "Health Issue?": "Health Issue?",
      "Studying?": "Studying?",
      "Dependent on (Caregiver Name)": "Dependent on (Caregiver Name)",
      "Add": "Add",
      "Wealth Distribution": "Wealth Distribution",
      "Health Issue": "Health Issue",
      "Under 18 Bonus": "Under 18 Bonus",
      "Studying Bonus": "Studying Bonus",
      "Dependent Bonus": "Dependent Bonus",
      "Dependent on": "Dependent on",
      "Total distributed": "Total distributed",
      "Enter total wealth and add siblings to calculate distribution.": "Enter total wealth and add siblings to calculate distribution.",
      "Share With Friends": "Share With Friends",
      "Search": "Search",
      "Increase Font": "A+",
      "Decrease Font": "A-",
      "Switch Language": "हिन्दी"
    }
  },
  hi: {
    translation: {
      "Wealth Distribution Among Siblings": "धन वितरण",
      "Home": "होम",
      "About": "के बारे में",
      "Enter Total Wealth": "कुल संपत्ति दर्ज करें",
      "Total Wealth": "कुल संपत्ति",
      "Add a Sibling": "भाई-बहन जोड़ें",
      "Sibling Name": "भाई-बहन का नाम",
      "Age": "आयु",
      "Health Issue?": "स्वास्थ्य समस्या?",
      "Studying?": "अध्ययन?",
      "Dependent on (Caregiver Name)": "निर्भर किस पर (देखभालकर्ता का नाम)",
      "Add": "जोड़ें",
      "Wealth Distribution": "धन वितरण",
      "Health Issue": "स्वास्थ्य समस्या",
      "Under 18 Bonus": "18 से कम बोनस",
      "Studying Bonus": "अध्ययन बोनस",
      "Dependent Bonus": "निर्भर बोनस",
      "Dependent on": "पर निर्भर",
      "Total distributed": "कुल वितरण",
      "Enter total wealth and add siblings to calculate distribution.": "संपूर्ण संपत्ति दर्ज करें और वितरण के लिए भाई-बहनों को जोड़ें।",
      "Share With Friends": "दोस्तों के साथ साझा करें",
      "Search": "खोज",
      "Increase Font": "अ+",
      "Decrease Font": "अ-",
      "Switch Language": "English"
    }
  }
};

i18next.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18next;
