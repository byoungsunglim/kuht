import KakaoLogins from '@react-native-seoul/kakao-login';

var kakaoHelper = {
  login: login,
  logout: logout,
};

function login() {
  KakaoLogins.login().then(result => {
    KakaoLogins.getProfile().then(result => {
      return result;
    });
  });
}

function logout() {
  KakaoLogins.logout().then(result => {
    console.log(`logout: ${JSON.stringify(result)}`);
  });
}

module.exports = kakaoHelper;
