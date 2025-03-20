import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View, ScrollView, } from 'react-native';

export default function App() {
  function alerta(){
    alert('Pirataria é crime!')
  }    
  return (
    
    <ScrollView contentContainerStyle={styles.scrollContent}>
    
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style= {styles.title}>GAMES</Text>

      <Text style={styles.texto}>Os games são uma forma de entretenimento que evoluiu muito ao longo dos anos, indo dos simples jogos de arcade até experiências imersivas com gráficos ultra-realistas e inteligência artificial avançada. Eles podem ser divididos em diversos gêneros, como ação, aventura, RPG, estratégia, esportes e simulação.</Text>

      <Image
          source={{ uri: "https://sertanejotododia.com.br/wp-content/uploads/2025/03/gta-6.png" }}
          style={styles.image}
        />
        <Image
          source={{ uri: "https://cdn1.epicgames.com/offer/e9a679451d094c1ba3d008b6a01adec5/EGS_FINALFANTASYVIIREBIRTH_SquareEnix_S1_2560x1440-e254f978084058f898118dc49728d04c" }}
          style={styles.image}
        />
        <Image
          source={{ uri: "https://image.api.playstation.com/vulcan/ap/rnd/202306/1301/ca076c20d88cabece6c6a3195fe68fbfbcff8dc5105e4df7.png" }}
          style={styles.image}
        />
        <Image
          source={{ uri: "https://flowgames.gg/wp-content/uploads/2024/05/AC-Shadows-1-1044x594.png" }}
          style={styles.image}
        />
        <Image
          source={{ uri: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2246340/a1df989a3b439e15171dc7144c1ce13c32abcae6/capsule_616x353.jpg?t=1741142072" }}
          style={styles.image}
        />


        <Button title='Baixe aqui!' onPress={alerta}></Button>
        <StatusBar style="auto" />
      
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
    fontFamily: "Poppins",
  },

  texto: {
    fontSize: 15,
    fontWeight: 15,
    color: 'white',
    fontStyle: "italic",
    textAlign: "center",
  },

  image: {
    justifyContent: "center",
    width: 150,
    height: 150,
  },

  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
