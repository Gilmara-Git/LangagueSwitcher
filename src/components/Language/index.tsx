import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity, Text , TouchableOpacityProps } from "react-native";

type LanguageProps = TouchableOpacityProps &{
  language: string;
  lastIndex: boolean;
  onLanguageSelection: (lang: string)=>void;
};

export const Language = ({ language, lastIndex, onLanguageSelection, ...rest }: LanguageProps) => {

    return (
    <>
      <TouchableOpacity
       activeOpacity={0.7}  
      onPress={()=>onLanguageSelection(language)}
       style={styles.languageContainer}
       {...rest}
       >    
        <LinearGradient
          style={styles.languageContainer}
          colors={["#CECECE", "#2f2f30"]}
          end={{ x: 0.1, y: 0.4 }}
        >
          <Text style={styles.languageText}>{language}</Text>
        </LinearGradient>
      </TouchableOpacity>
      {!lastIndex && (
        <Text style={styles.divider}>________________________</Text>
      )}
    </>
  );
};
