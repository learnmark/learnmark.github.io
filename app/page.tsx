import Intro from "@/components/Intro";
import Feature from "@/components/Feature";
import CTA from '@/components/CTA';
import WorkWith from '@/components/WorkWith';
import Stats from '@/components/Stats';
import Feedback from '@/components/Feedback';
import LatestUpdate from '@/components/LatestUpdate';
import Team from '@/components/Team';
import Customer from '@/components/Customer';
import Subscribe from '@/components/Subscribe';
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
      {/* <Feature></Feature>
      <CTA></CTA> */}
      <WorkWith messages={messages.workWith} />
      <Stats messages={messages.stats} />
      <Feedback messages={messages.feedback} />
      {/* <LatestUpdate></LatestUpdate> */}
      {/* <Team></Team>
      <Customer></Customer> */}
      <Subscribe messages={messages.subscribe} />
    </>
  )
}
