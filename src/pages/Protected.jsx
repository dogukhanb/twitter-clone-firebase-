import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";

const Protected = () => {
  // kullanıcı yetkisi var mı state'i
  const [isAuth, setIsAuth] = useState();

  useEffect(() => {
    //onAuthStateChanged >> kullanıcı oturumundaki değişimi izler
    onAuthStateChanged(auth, (user) => {
      // eğer kullanıcı varsa yetkisini true' ya çek oturumu kapalıysa yetkiyi false 'a çek
      setIsAuth(user ? true : false);
    });
  }, []);

  // eğer yetkisi yoksa
  if (isAuth === false) {
    return <Navigate to={"/"} />;
  }

  // yetkisi varsa alt route'daki sayfayı göster
  return <Outlet />;
};

export default Protected;
