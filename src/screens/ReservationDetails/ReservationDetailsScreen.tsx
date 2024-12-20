import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/type";
import { useNavigation } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { useReservationDetailsStore } from "../../stores/reservationDetailsStore";
import BackAndTitleHeader from "../../components/Headers/BackAndTitleHeader";
import { useUserStore } from "../../stores/userStore";
import { fetchHotelByName } from "../../services/firebaseService";
import { Hotel } from "../../utils/types";
import { Ionicons } from "@expo/vector-icons";
import Button from "../../components/Button/Button";
import { addUserReservation } from "../../services/firebaseService";
import { styles } from "./styles";

type RouteProps = RouteProp<RootStackParamList, "ReservationDetails">;
type NavigationProps = BottomTabScreenProps<RootStackParamList, "Intro">["navigation"];

export default function ReservationDetailsScreen() {
  const route = useRoute<RouteProps>();
  const navigation = useNavigation<NavigationProps>();
  const reservations = useUserStore((state) => state.reservations);

  const { reservationDetails } = useReservationDetailsStore.getState();
  const { city, startDate, endDate, rooms, roomDetails } = reservationDetails;

  const { hotelName, roomName } = route.params;

  const [hotel, setHotel] = useState<Hotel | null>(null);

  const start = parseInt(startDate.split(" ")[0], 10);
  const end = parseInt(endDate.split(" ")[0], 10);
  const nightCount = end - start;

  const adults = roomDetails.reduce((total, room) => total + room.adults, 0);
  const children = roomDetails.reduce((total, room) => total + room.children, 0);

  const childrenText = children > 0 ? `, ${children} çocuk, ` : "";

  const totalPrice = (hotel?.pricePerNight ?? 0) * nightCount * rooms;

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const fetchedHotel = await fetchHotelByName(hotelName);
        setHotel(fetchedHotel);
      } catch (err) {
        console.error("Error fetching hotel:", err);
      }
    };
    fetchHotel();
  }, [hotelName]);

  const handlePress = () => {
    addUserReservation("userId", hotelName);
    navigation.navigate("Main", { screen: "Reservations" });
  };

  return (
    <View style={styles.container}>
      <BackAndTitleHeader title="Rezervasyon özeti" />
      <ScrollView>
        <View style={styles.innerContainer}>
          <View style={styles.stars}>
            {[...Array(5)].map((_, index) => (
              <Ionicons key={index} name="star" size={16} color="gold" />
            ))}
          </View>
          <Text style={styles.hotelName}>{hotel?.name}</Text>
          <View style={styles.iconContainer}>
            <Ionicons name="bookmark" size={50} color="green" />
            <Text style={styles.ratingText}>{hotel?.rating}</Text>
          </View>
          <View style={styles.horizontalDivider} />
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.title}>Check-in</Text>
              <Text style={styles.textBold}>{startDate}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.column}>
              <Text style={styles.title}>Çıkış</Text>
              <Text style={styles.textBold}>{endDate}</Text>
            </View>
          </View>
          <View style={styles.horizontalDivider} />
          <View style={styles.row}>
            <Text style={styles.title}>{`${nightCount} gece, ${adults} yetişkin ${childrenText}için ${rooms} oda`}</Text>
          </View>
        </View>
        <View style={styles.priceContainer}>
          <View style={styles.row}>
            <Text style={styles.textLeft}>Orjinal fiyat</Text>
            <Text style={styles.textRight}>$ {totalPrice.toFixed(1)}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.textLeft}>Sınırlı Süreli Fırsat</Text>
            <Text style={styles.textRight}>- $ {(totalPrice * 0.2).toFixed(1)}</Text>
          </View>
          <View style={styles.horizontalDivider} />
          <View style={styles.row}>
            <Text style={styles.priceLeft}>Fiyat</Text>
            <Text style={styles.priceOriginal}>$ {totalPrice.toFixed(1)}</Text>
            <Text style={styles.priceRight}>$ {(totalPrice * 0.8).toFixed(1)}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.priceTaxText}>+$ {(totalPrice * 0.25).toFixed(1)} vergi ve ücretler</Text>
          </View>
          <View style={styles.horizontalDivider} />
          <View style={styles.row}>
            <Text style={styles.priceLeft}>Fiyat Bilgisi</Text>
          </View>
          <View style={styles.row}>
            <Ionicons name="cash-outline" size={24} color="black" />
            <View style={styles.column}>
              <Text style={styles.text}>$ {(totalPrice * 0.25).toFixed(1)} tutarında vergi ve ücretler</Text>
              <Text style={styles.text}>$ {(totalPrice * 0.32).toFixed(1)} tesis ücreti</Text>
              <Text style={styles.text}>$ {(totalPrice * 0.14).toFixed(1)} temizlik ücreti</Text>
              <Text style={styles.text}>$ {(totalPrice * 0.22).toFixed(1)} hizmet masrafı</Text>
              <Text style={styles.text}>$ {(totalPrice * 0.04).toFixed(1)} şehir vergisi</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Ionicons name="wallet-outline" size={24} color="black" />
            <View style={styles.column}>
              <Text style={styles.text}>
                Size yaklaşık ücreti TL olarak göstermek için fiyat, döviz kuru (1 USD = 35,19 TL) kullanılarak USD biriminden dönüştürülmüştür${" "}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.header}>Tesis kurallarını gözden geçirin</Text>
          <View style={styles.column}>
            <Text style={styles.text}>• Odalarda sigara içilmez</Text>
            <Text style={styles.text}>• Evcil hayvanlar kabul edilmez</Text>
            <Text style={styles.text}>• Partilere/etkinliklere izin verilmez</Text>
            <Text style={styles.text}>• Sessiz saatler 22:00 ile 08:00 arasındadır</Text>
          </View>

          <Text style={styles.header}>Rezervasyon Koşulları</Text>
          <View style={styles.conditionItem}>
            <Ionicons name="cash-outline" size={20} color="black" />
            <Text style={styles.conditionText}>
              <Text style={styles.boldText}>Ön ödeme: </Text>
              Rezervasyonun toplam fiyatı rezervasyon yapılırken alınır.
            </Text>
          </View>
          <View style={styles.conditionItem}>
            <Ionicons name="close-circle-outline" size={20} color="black" />
            <Text style={styles.conditionText}>
              <Text style={styles.boldText}>İade edilemez: </Text>
              Rezervasyonunuz iptal edildiğinde veya kullanılmadığında alınacak ücret rezervasyonun toplam fiyatı olacaktır.
            </Text>
          </View>
          <View style={styles.conditionItem}>
            <Ionicons name="information-circle-outline" size={20} color="black" />
            <Text style={styles.conditionText}>
              <Text style={styles.boldText}>İade hakkında bilgi: </Text>
              Bu rezervasyonu iptal ederseniz iade almaya uygun olmayacaksınız.
            </Text>
          </View>
          <View style={styles.conditionItem}>
            <Ionicons name="bed-outline" size={20} color="black" />
            <Text style={styles.conditionText}>
              <Text style={styles.boldText}>Çocuklar ve ilave yataklar: </Text>
              Her yaştan çocuk konaklayabilir. Bu tesiste 18 yaş ve üzeri çocuklar için yetişkin ücreti alınır. 12 yaş altı çocuklar için ilave yatak
              bulunur.
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.footerPriceContainer}>
          <Text style={styles.footerPriceText}>TL {(totalPrice * 35.19 * 1.05).toFixed(1)}</Text>
          <Text style={styles.footerDiscountedPriceText}>TL {(totalPrice * 35.19 * 1.25).toFixed(1)} </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button text="Rezerve Et" onPress={handlePress} />
        </View>
      </View>
    </View>
  );
}
