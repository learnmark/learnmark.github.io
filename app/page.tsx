import Intro from "@/components/Intro";
import WorkWith from '@/components/WorkWith';
import Stats from '@/components/Stats';
import { homeMessages } from '@/i18n/messages/home';
import { getLocale } from '@/i18n/server';
import { createPageMetadata } from './seo';

export async function generateMetadata() {
  const locale = await getLocale();
  const messages = homeMessages[locale];

  return createPageMetadata({
    title: messages.seoTitle,
    description: messages.seoDescription,
    path: '/',
    locale,
  });
}

export default async function Home() {
  const locale = await getLocale();
  const messages = homeMessages[locale];

  return (
    <>
      <Intro messages={messages.intro} />
      <WorkWith messages={messages.workWith} />
      <Stats messages={messages.stats} />
    </>
  )
}
