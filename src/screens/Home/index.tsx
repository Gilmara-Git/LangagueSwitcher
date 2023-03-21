import { useState } from "react";
import { View, Text, TouchableOpacity, useWindowDimensions } from "react-native";

import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import i18n from "i18n-js";
import { Language } from "../../components/Language";
import * as Localization from "expo-localization";
import { en, es, pt } from "../../translations/translations";

export const Home = () => {
  const [locale, setLocale] = useState(Localization.locale.substring(0, 2));
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [languageList, setLanguageList] = useState([
    "English",
    "Spanish",
    "Portuguese",
  ]);

  const { height } = useWindowDimensions();


  i18n.fallbacks = true;
  i18n.translations = { en, es, pt };
  i18n.locale = locale;

  const handleSelectedLanguage = (language: string) => {
    setSelectedLanguage(language);

    switch (language) {
      case "English":
        setLocale("en");
        break;
      case "Spanish":
        setLocale("es");
        break;
      case "Portuguese":
        setLocale("pt");
        break;
    }
  };

  return (
    <View style={styles.container}>
      {!selectedLanguage ? (
        <View style={[styles.innerContainer, { padding: height > 1000 ? 200 : 0 }]}>
          <Text style={styles.language}>Choose a Language</Text>
          {languageList.map((item) => (
            <Language
              lastIndex={
                languageList.lastIndexOf(item) === languageList.length - 1
              }
              key={item}
              language={item}
              onLanguageSelection={handleSelectedLanguage}
            />
          ))}
        </View>
      ) : (
        <View style={[styles.outputContainer, {padding: height > 1000 ? 200 : 0}]}>
          <View style={styles.buttons}>
            <TouchableOpacity
             activeOpacity={0.7} 
            onPress={() => handleSelectedLanguage("English")}>
              <LinearGradient
                style={styles.linearTouch}
                colors={["#CECECE", "#2f2f30"]}
              >
                <Text style={styles.buttonText}>English</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
             activeOpacity={0.7} 
              onPress={() => handleSelectedLanguage("Portuguese")}
            >
              <LinearGradient
                style={styles.linearTouch}
                colors={["#CECECE", "#2f2f30"]}
              >
                <Text style={styles.buttonText}>Portuguese</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
            activeOpacity={0.7} 
            onPress={() => handleSelectedLanguage("Spanish")}>
              <LinearGradient
                style={styles.linearTouch}
                colors={["#CECECE", "#2f2f30"]}
              >
                <Text style={styles.buttonText}>Spanish</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={styles.textOutputContainer}>
            <Text style={styles.outputGreet}>{i18n.translate("hi")}</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.outputGreet}>{i18n.translate("greet")}</Text>

              <View style={styles.nameContainer}>
                <Text style={styles.outputName}>{i18n.translate("name")}</Text>
              </View>
            </View>
            <Text style={styles.outputDescription}>
              {i18n.translate("description")}
            </Text>
            <Text style={styles.codingLang}>{i18n.translate("react")}</Text>
            <Text style={styles.codingLang}>
              {i18n.translate("connect")}
            </Text>
            <Text style={styles.codingLang}>
              {i18n.translate("typescript")}
            </Text>
          </View>

          <View>
            <View style={styles.iconsContainer}>
              <AntDesign name="apple1" size={52} color="#8c8c8f" />
              <AntDesign name="android1" size={52} color="#8c8c8f" />
            </View>
          </View>
          <View style={styles.heartContainer}>
            <Text>💗 💗 💗 💗</Text>
          </View>
        </View>
      )}
    </View>
  );
};
