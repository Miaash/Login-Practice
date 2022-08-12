import React, { useEffect, useState } from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 컴포넌트가 처음 실행될때, 로컬스토리지에 담겨져있다면 로그인 유지!
  // useEffect는 모든 app컴포넌트 함수를 실행하고 이 useEffect함수를 다시 실행하는것이다! (하지만 여기선 처음 렌더링될때 한번만 실행)
  useEffect(() => {
    const storeUserLoggedInInformation = localStorage.getItem("isLoggedIn")

    if(storeUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, [])


  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
