import { Platform } from 'react-native';
import { getApp, getApps, initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCh_uUjeweO6sSzmfgQZqD1HipSODjZFCU',
  authDomain: 'studymate1220.firebaseapp.com',
  projectId: 'studymate1220',
  storageBucket: 'studymate1220.firebasestorage.app',
  messagingSenderId: '1082844835826',
  appId: '1:1082844835826:web:6ec32e273e80340857856b',
  measurementId: 'G-YQMN638TR8',
};

export const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

export async function initializeFirebaseAnalytics() {
  if (Platform.OS !== 'web') {
    return null;
  }

  const { getAnalytics, isSupported } = await import('firebase/analytics');
  const supported = await isSupported();

  if (!supported) {
    return null;
  }

  return getAnalytics(firebaseApp);
}