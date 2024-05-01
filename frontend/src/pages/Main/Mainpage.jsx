import { useContext, useEffect } from "react";
import Nav from "../../components/Nav";
import Main from "../../components/BannerMain";
import { GlobalContext } from "../../context";
import { useNavigate } from "react-router-dom";
function MainPage() {
  const { userInfo } = useContext(GlobalContext);
  const navigate = useNavigate();
  console.log(userInfo);

  useEffect(() => {
    if (userInfo || userInfo !== null) {
      navigate("/homepage");
    }
  });

  return (
    <>
      <Nav />
      <Main />
    </>
  );
}

export default MainPage;
