import { addUserFavorite, removeUserFavorite } from "./firebaseService";

export const handlePressFavorite = async (userId: string | null, hotelId: string, isFavorite: boolean) => {
  if (!userId) {
    console.log("Kullanıcı giriş yapmamış, favori işlemi yapılamıyor.");
    return;
  }

  try {
    if (isFavorite) {
      await removeUserFavorite(userId, hotelId);
    } else {
      await addUserFavorite(userId, hotelId);
    }
  } catch (error) {
    console.error("Favori işlemi sırasında hata oluştu:", error);
    throw error;
  }
};
