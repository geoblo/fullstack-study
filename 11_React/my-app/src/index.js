import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import JsxUse from './chapter3/3.4/JsxUse';
import Library from './chapter3/Library';
import Clock from './chapter4/Clock';
import PropsUse from './chapter5/5.3/PropsUse';
import CommentList from './chapter5/CommentList';
import CommentEx from './chapter5/5.6/CommentEx';
import NotificationList from './chapter6/NotificationList';
import Counter from './chapter7/7.2/Counter';
import SetStateMerge from './chapter7/7.2/SetStateMerge';
import Toggle from './chapter8/8.1/Toggle';
import MyButton from './chapter8/8.2/MyButton';
import ConfirmButton from './chapter8/ConfirmButton';
import Greeting from './chapter9/9.1/Greeting';
import LoginControl from './chapter9/9.2/LoginControl';
import LoginControlRefactoring from './chapter9/9.3/LoginControlRefactoring';
import Mailbox from './chapter9/9.3/Mailbox';
import MainPage from './chapter9/9.4/MainPage';
import LandingPage from './chapter9/LandingPage';
import NumberList from './chapter10/10.1/NumberList';
import ListKey from './chapter10/10.2/ListKey';
import AttendanceBook from './chapter10/AttendanceBook';
import NameForm from './chapter11/11.2/NameForm';
import EssayForm from './chapter11/11.3/EssayForm';
import FlavorForm from './chapter11/11.3/FlavorForm';
import TextInputWithFocusButton from './chapter7/7.6/TextInputWithFocusButton';
import FileInput from './chapter11/11.3/FileInput';
import Reservation from './chapter11/11.4/Reservation';
import SignUp from './chapter11/SignUp';
import ReservationRefactoring from './chapter11/11.4/ReservationRefactoring';
import UnitCalculator from './chapter12/UnitCalculator';
import WelcomeDialog from './chapter13/13.1.1.1/WelcomeDialog';
import SplitPaneSection from './chapter13/13.1.1.2/SplitPaneSection';
import DialogContainer from './chapter13/13.1.2/DialogContainer';
import SignUpDialog from './chapter13/13.1.3/SignUpDialog';
import ProfileCard from './chapter13/ProfileCard';
import StyledPage from './chapter15/StyledPage';
import Blocks from './chapter15/theme/Blocks';
import ThemeApp from './chapter15/theme/ThemeApp';
import ComponentVariable from './chapter7/7.6/ComponentVariable';
import SimpleRouter from './chapter16/SimpleRouter';
import CounterEffect from './chapter7/7.3/ex1/CounterEffect';
import EffectSummary from './chapter7/7.3/ex2/EffectSummary';
import EffectContainer from './chapter7/7.3/ex2/EffectContainer';
import TimerContainer from './chapter7/7.3/ex3/TimerContainer';
import ApiRequest from './chapter17/ApiRequest';
import ReduxTestApp from './chapter18/ReduxTestApp';
import { store } from './chapter18/app/store';
import AppContainer from './components/AppContainer';
import { reduxStore } from './components/app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

// 4장 예제
// 1초마다 Clock 컴포넌트를 렌더링 하는 코드
// (실제 개발에서 이렇게 쓰는 경우는 없고 State를 변경해서 재렌더링 시킴)
// setInterval(() => {
//   root.render(
//     <Clock />
//   );
// }, 1000);

// 9장 예제
const messages = ['React', 'Re: React', 'Re:Re: React'];
// const messages = [];

root.render(
  // <App />

  // 3장 예제
  // <JsxUse />
  // <Library />

  // 5장 예제
  // <PropsUse />
  // <CommentList />
  // <CommentEx 
  //   author={{
  //     avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', 
  //     name: '김재현'
  //   }}
  //   text="첫 방문합니다. 또 올게요." 
  //   date="2023-10-18" 
  // />

  // 6장 예제
  // <NotificationList />

  // 7장 예제
  // <Counter />
  // <SetStateMerge />
  // <TextInputWithFocusButton />
  // <ComponentVariable />
  // <CounterEffect />
  // <EffectSummary />
  // <EffectContainer />
  // <TimerContainer />

  // 8장 예제
  // <Toggle />
  // <MyButton />
  // <ConfirmButton />

  // 9장 예제
  // <Greeting isLoggedIn={true} />
  // <LoginControl />
  // <LoginControlRefactoring />
  // <Mailbox unreadMessages={messages} />
  // <MainPage />
  // <LandingPage />

  // 10장 예제
  // <NumberList />
  // <ListKey />
  // <AttendanceBook />

  // 11장 예제
  // <NameForm />
  // <EssayForm />
  // <FlavorForm />
  // <FileInput />
  // <Reservation />
  // <ReservationRefactoring />
  // <SignUp />

  // 12장 예제
  // <UnitCalculator />

  // 13장 예제
  // <WelcomeDialog />
  // <SplitPaneSection />
  // <DialogContainer />
  // <SignUpDialog />
  // <ProfileCard />

  // 15장 예제
  // <StyledPage />
  // <Blocks />
  // <ThemeApp />

  // 16장 예제
  // <SimpleRouter />
  
  // 17장 예제
  // <ApiRequest />

  // 18장 예제
  // 2. 리액트에 Redux Store 제공하기
  // ReduxTestApp 컴포넌트와 그 하위 자식들은 Redux Store에 접근 가능
  // Redux Store에 저장된 state들을 마음대로 꺼내 쓸 수 있음
  // <Provider store={store}>
  //   <ReduxTestApp />
  // </Provider>

  // 수업 외: 다양한 컴포넌트 예제
  // 아래 패키지 설치 필수
  // npm install framer-motion polished react-icons styled-reset swiper @fullcalendar/core @fullcalendar/react @fullcalendar/daygrid @lottiefiles/lottie-player react-youtube
  <Provider store={reduxStore}>
    <AppContainer />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
