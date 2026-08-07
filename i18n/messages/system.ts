import type { Locale } from '../config'

type SystemMessages = {
  signIn: {
    seoTitle: string
    seoDescription: string
    title: string
    email: string
    password: string
    forgotPassword: string
    submit: string
    notMember: string
    trial: string
  }
  notFound: {
    title: string
    description: string
    home: string
  }
  error: {
    eyebrow: string
    title: string
    description: string
    retry: string
  }
}

export const systemMessages: Record<Locale, SystemMessages> = {
  en: {
    signIn: { seoTitle: 'Sign In', seoDescription: 'Sign in to Learnmark.', title: 'Sign in to your account', email: 'Email address', password: 'Password', forgotPassword: 'Forgot password?', submit: 'Sign in', notMember: 'Not a member?', trial: 'Start a 14 day free trial' },
    notFound: { title: 'Page not found', description: 'Sorry, we couldn’t find the page you’re looking for.', home: 'Go back home' },
    error: { eyebrow: 'Unexpected error', title: 'Something went wrong.', description: 'The page could not be completed. Try the request again or return later.', retry: 'Try again' },
  },
  'zh-CN': {
    signIn: { seoTitle: '登录', seoDescription: '登录 Learnmark。', title: '登录您的账户', email: '电子邮箱', password: '密码', forgotPassword: '忘记密码？', submit: '登录', notMember: '还不是会员？', trial: '开始 14 天免费试用' },
    notFound: { title: '找不到页面', description: '抱歉，我们找不到您要访问的页面。', home: '返回首页' },
    error: { eyebrow: '意外错误', title: '出现了问题。', description: '页面无法完成加载，请重试或稍后再来。', retry: '重试' },
  },
  'zh-TW': {
    signIn: { seoTitle: '登入', seoDescription: '登入 Learnmark。', title: '登入您的帳戶', email: '電子郵件', password: '密碼', forgotPassword: '忘記密碼？', submit: '登入', notMember: '還不是會員？', trial: '開始 14 天免費試用' },
    notFound: { title: '找不到頁面', description: '抱歉，我們找不到您要造訪的頁面。', home: '返回首頁' },
    error: { eyebrow: '非預期錯誤', title: '發生問題。', description: '頁面無法完成載入，請重試或稍後再回來。', retry: '重試' },
  },
  ja: {
    signIn: { seoTitle: 'サインイン', seoDescription: 'Learnmark にサインインします。', title: 'アカウントにサインイン', email: 'メールアドレス', password: 'パスワード', forgotPassword: 'パスワードをお忘れですか？', submit: 'サインイン', notMember: 'まだ登録していませんか？', trial: '14 日間の無料トライアルを始める' },
    notFound: { title: 'ページが見つかりません', description: 'お探しのページを見つけることができませんでした。', home: 'ホームに戻る' },
    error: { eyebrow: '予期しないエラー', title: '問題が発生しました。', description: 'ページを完了できませんでした。もう一度試すか、後ほどお戻りください。', retry: 'もう一度試す' },
  },
  fr: {
    signIn: { seoTitle: 'Connexion', seoDescription: 'Connectez-vous à Learnmark.', title: 'Connectez-vous à votre compte', email: 'Adresse e-mail', password: 'Mot de passe', forgotPassword: 'Mot de passe oublié ?', submit: 'Se connecter', notMember: 'Pas encore membre ?', trial: 'Commencer un essai gratuit de 14 jours' },
    notFound: { title: 'Page introuvable', description: 'Désolé, nous n’avons pas trouvé la page demandée.', home: 'Retour à l’accueil' },
    error: { eyebrow: 'Erreur inattendue', title: 'Un problème est survenu.', description: 'La page n’a pas pu être chargée. Réessayez ou revenez plus tard.', retry: 'Réessayer' },
  },
  de: {
    signIn: { seoTitle: 'Anmelden', seoDescription: 'Bei Learnmark anmelden.', title: 'Bei Ihrem Konto anmelden', email: 'E-Mail-Adresse', password: 'Passwort', forgotPassword: 'Passwort vergessen?', submit: 'Anmelden', notMember: 'Noch kein Mitglied?', trial: '14-tägige kostenlose Testphase starten' },
    notFound: { title: 'Seite nicht gefunden', description: 'Die gesuchte Seite konnte leider nicht gefunden werden.', home: 'Zur Startseite' },
    error: { eyebrow: 'Unerwarteter Fehler', title: 'Etwas ist schiefgelaufen.', description: 'Die Seite konnte nicht abgeschlossen werden. Versuchen Sie es erneut oder kommen Sie später wieder.', retry: 'Erneut versuchen' },
  },
}