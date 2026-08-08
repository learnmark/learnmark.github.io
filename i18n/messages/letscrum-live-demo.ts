import type { Locale } from '../config'

export type LiveDemoMessages = {
  eyebrow: string
  title: string
  openLabel: string
  usernameLabel: string
  passwordLabel: string
}

export const letscrumLiveDemo = {
  href: 'https://letscrum.learnmark.com/',
  username: 'admin',
  password: 'admin',
} as const

export const letscrumLiveDemoMessages: Record<Locale, LiveDemoMessages> = {
  en: {
    eyebrow: 'Live demo',
    title: 'Explore LetScrum',
    openLabel: 'Open the LetScrum live demo',
    usernameLabel: 'Username',
    passwordLabel: 'Password',
  },
  'zh-CN': {
    eyebrow: '在线演示',
    title: '体验 LetScrum',
    openLabel: '打开 LetScrum 在线演示',
    usernameLabel: '用户名',
    passwordLabel: '密码',
  },
  'zh-TW': {
    eyebrow: '線上示範',
    title: '體驗 LetScrum',
    openLabel: '開啟 LetScrum 線上示範',
    usernameLabel: '使用者名稱',
    passwordLabel: '密碼',
  },
  ja: {
    eyebrow: 'ライブデモ',
    title: 'LetScrum を試す',
    openLabel: 'LetScrum のライブデモを開く',
    usernameLabel: 'ユーザー名',
    passwordLabel: 'パスワード',
  },
  fr: {
    eyebrow: 'Démo en direct',
    title: 'Essayer LetScrum',
    openLabel: 'Ouvrir la démo en direct de LetScrum',
    usernameLabel: 'Nom d’utilisateur',
    passwordLabel: 'Mot de passe',
  },
  de: {
    eyebrow: 'Live-Demo',
    title: 'LetScrum ausprobieren',
    openLabel: 'LetScrum-Live-Demo öffnen',
    usernameLabel: 'Benutzername',
    passwordLabel: 'Passwort',
  },
}