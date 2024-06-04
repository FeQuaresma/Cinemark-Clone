import {
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  StatusBar,
  View,
} from "react-native";
import { Colors } from "@/constants/Colors";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image
          style={styles.bigImage}
          source={{
            uri: "https://br.web.img3.acsta.net/pictures/24/02/06/15/30/1566768.png",
          }}
        />
        <Text style={styles.textLabel}>Filmes em Cartaz</Text>
        <Image
          style={styles.midImage}
          source={{
            uri: "https://wp-emsaoroque-media.s3.sa-east-1.amazonaws.com/uploads/2023/07/14100512/cine-sr-sao-roque-programacao-filmes-1319072023.jpg",
          }}
        />
        <Text style={styles.textLabel}>Parcerias</Text>
        <Image
          style={styles.midImage}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWGpISO9bu8yllVY8fOuJYlAnYMFXi4MLvEw&s",
          }}
        />
        <Text style={styles.textLabel}>Novidades</Text>
        <View style={styles.novidadesContainer}>
          <Image
            style={styles.smallImage}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM4PWHDIYsVvh1XI44fNZhGB3D1oLGDJkDYMIbEl6-sTns_5kula4Tuf4LRLcPMKZhZig&usqp=CAU",
            }}
          />
          <Image
            style={styles.smallImage}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm4vh3ZD4LYY-ucCQrK04EW8hKbtmgcH4SJjHJeJOo4FbCTPhkSQrG6eXrhYY_crLljyM&usqp=CAU",
            }}
          />
          <Image
            style={styles.smallImage}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwMAwSB75P0AgZQgSMOhQaU3l1oDAQLhSawg&s",
            }}
          />
          <Image
            style={styles.smallImage}
            source={{
              uri: "https://www.kinoplex.com.br/filmes/images/cartaz/262x388/deadpool-e-wolverine.jpg?",
            }}
          />
        </View>
        <Text style={styles.textLabel}>Cupons</Text>
        <ScrollView horizontal={true}>
          <Image
            style={styles.boximage}
            source={{
              uri: "https://www.cinemark.com.br/_next/image?url=https%3A%2F%2Fcdnim.prd.cineticket.com.br%2Fsnackbar%2Fproduct%2Fproduct_3354_20230830115838.png&w=640&q=75",
            }}
          />
          <Image
            style={styles.boximage}
            source={{
              uri: "https://www.cinemark.com.br/_next/image?url=https%3A%2F%2Fcdnim.prd.cineticket.com.br%2Fsnackbar%2Fproduct%2Fproduct_3411_20230830115144.png&w=640&q=75",
            }}
          />
          <Image
            style={styles.boximage}
            source={{
              uri: "https://cinemark.com.br/_next/image?url=https%3A%2F%2Fcdnim.prd.cineticket.com.br%2Fnew-website%2Fcombo.png&w=1200&q=75",
            }}
          />
          <Image
            style={styles.boximage}
            source={{
              uri: "https://www.folhadealphaville.com.br/images/articles/11592/b2ap3_medium_Snapinsta.app_356779585_1700707050350158_5555793280443428238_n_1080.png",
            }}
          />
          <Image
            style={styles.boximage}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlBoCWx2OIN1MohaXuiTEVcCjWPEzKZdd87A&s",
            }}
          />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  novidadesContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  scrollView: {
    backgroundColor: Colors.DarkBackgroundColor,
  },
  textLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.LightTextColor,
    textAlign: "center",
    padding: 20,
  },
  bigImage: {
    width: "100%",
    height: 300,
  },
  midImage: {
    width: "100%",
    height: 200,
  },
  smallImage: {
    margin: 10,
    width: 150,
    height: 200,
  },
  boximage: {
    width: 150,
    height: 150,
  },
});
