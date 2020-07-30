import KakaoLogins from '@react-native-seoul/kakao-login';

var KakaoHelper = {
  login: login,
  logout: logout,
};

function login(setAuth) {
  KakaoLogins.login()
    .then((result) => {
      console.log(`logout: ${JSON.stringify(result)}`);
      KakaoLogins.getProfile()
        .then((profile) => {
          console.log(`logout: ${JSON.stringify(profile)}`);
          setAuth(true);
          return profile;
        })
        .catch((e) => {
          console.log(e);
        });
    })
    .catch((e) => {
      console.log(e);
    });
}

function logout(setAuth) {
  KakaoLogins.logout()
    .then((result) => {
      console.log(`logout: ${JSON.stringify(result)}`);
      setAuth(false);
    })
    .catch((e) => {
      console.log(e);
    });
}

module.exports = KakaoHelper;
