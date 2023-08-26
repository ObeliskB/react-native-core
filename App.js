import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Image,
  Button,
} from "react-native";

const logo = {
  uri: "https://reactnative.dev/docs/assets/p_cat1.png",
  width: 64,
  height: 64,
};

function Cat(props) {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View>
      <Text>
        I am {props.name}, and I am {isHungry ? "hungry" : "full"}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
      />
    </View>
  );
}

export default function App() {
  const [text, setText] = useState("");

  return (
    <View style={styles.mycontainer}>
      <TextInput
        style={styles.mytextinput}
        placeholder="Type here!"
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
      <Text style={{ padding: 10, fontSize: 18 }}>
        There are {text.split(" ").length} word (s)
      </Text>
      <Cat name="Maru" />
      <Cat name="Memphis" />
      <ScrollView>
        <Text style={styles.margin10}>This is a cat</Text>
        <Image style={styles.margin10} source={logo} />
        <Image style={styles.margin10} source={logo} />
        <Image style={styles.margin10} source={logo} />
        <Image style={styles.margin10} source={logo} />
        <Image style={styles.margin10} source={logo} />
        <Image style={styles.margin10} source={logo} />
        <Image style={styles.margin10} source={logo} />
        <Text style={styles.margin10}>This is a cat</Text>
        <Image style={styles.margin10} source={logo} />
        <Image style={styles.margin10} source={logo} />
        <Image style={styles.margin10} source={logo} />
        <Image style={styles.margin10} source={logo} />
        <Image style={styles.margin10} source={logo} />
        <Image style={styles.margin10} source={logo} />
        <Image style={styles.margin10} source={logo} />
        <Text style={styles.margin10}>This is a cat</Text>
        <Image style={styles.margin10} source={logo} />
        <Image style={styles.margin10} source={logo} />
        <Image style={styles.margin10} source={logo} />
        <Image style={styles.margin10} source={logo} />
        <Image style={styles.margin10} source={logo} />
        <Image style={styles.margin10} source={logo} />
        <Image style={styles.margin10} source={logo} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mycontainer: {
    padding: 20,
    ...Platform.select({
      ios: {
        paddingTop: 60,
      },
      android: {
        paddingTop: 30,
      },
    }),
  },
  mytextinput: {
    height: 40,
    backgroundColor: "#f0f8ff",
    borderWidth: 1,
    padding: 10,
  },
  margin10: {
    marginBottom: 10,
  },
});
