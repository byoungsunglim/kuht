import KakaoLogins from '@react-native-seoul/kakao-login';

var KakaoHelper = {
  login: login,
  logout: logout,
};

function login() {
  KakaoLogins.login().then((result) => {
    console.log(`logout: ${JSON.stringify(result)}`);
    KakaoLogins.getProfile().then((profile) => {
      console.log(`logout: ${JSON.stringify(profile)}`);
      return profile;
    });
  });
}

function logout() {
  KakaoLogins.logout().then((result) => {
    console.log(`logout: ${JSON.stringify(result)}`);
  });
}

module.exports = KakaoHelper;
