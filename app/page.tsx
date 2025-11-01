'use client';

import { A } from '@expo/html-elements';
import { Pressable, Text, View } from 'react-native';

const features = [
  {
    title: 'Realtime Tracking',
    caption: 'Live vehicle positions across agencies with second-by-second fidelity.'
  },
  {
    title: 'Smart Alerts',
    caption: 'Predictive delay insights so commuters can adjust before surprises hit.'
  },
  {
    title: 'Unified Coverage',
    caption: 'One map, every line. Seamless multi-agency routing across the region.'
  }
];

const roadmap = [
  {
    label: 'Now',
    headline: 'Foundational platform',
    description: 'Agency integrations, rider profiles, and baseline reliability metrics.'
  },
  {
    label: 'Q1 2026',
    headline: 'Proactive journeys',
    description: 'Adaptive routing that re-plans as vehicles and riders move.'
  },
  {
    label: 'Q2 2026',
    headline: 'Open data launch',
    description: 'Developer APIs that surface the same realtime intelligence powering Transtfi.'
  }
];

const navLinks = [
  { title: 'Product', href: '#product' },
  { title: 'Roadmap', href: '#roadmap' },
  { title: 'Team', href: '#team' }
];

export default function HomePage() {
  return (
    <View className="min-h-screen w-full bg-[#f8fbff]">
      <View className="sticky top-0 z-20 border-b border-brand-100 bg-white/70 backdrop-blur">
        <View className="mx-auto w-full max-w-6xl flex-row items-center justify-between px-6 py-4">
          <Text className="font-semibold text-xl text-brand-700">Transtfi</Text>
          <View className="flex-row items-center gap-6">
            {navLinks.map((link) => (
              <A
                key={link.title}
                href={link.href}
                className="text-base font-medium text-brand-600 transition-colors hover:text-brand-800"
              >
                {link.title}
              </A>
            ))}
            <A
              href="mailto:hello@transtfi.com"
              className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-brand-700"
            >
              Join the beta
            </A>
          </View>
        </View>
      </View>

      <View className="flex-1">
        <View className="px-6 pb-24" id="product">
          <View className="mx-auto w-full max-w-6xl flex-col gap-10 py-16">
            <View className="w-full max-w-3xl">
              <Text className="uppercase tracking-[0.3em] text-sm text-brand-500">
                Transit tracking, reimagined
              </Text>
              <Text className="mt-4 text-4xl font-semibold leading-tight text-brand-900 md:text-5xl">
                Realtime data that keeps riders in sync with the city around them.
              </Text>
              <Text className="mt-6 text-lg leading-relaxed text-brand-700">
                Transtfi pulls together every agency feed, cleans the noise, and delivers actionable
                updates the moment they matter. Riders see exactly what is happening nearby and what is
                coming next.
              </Text>
              <View className="mt-8 flex-row flex-wrap items-center gap-4">
                <A
                  href="mailto:hello@transtfi.com"
                  className="rounded-full bg-brand-600 px-6 py-3 text-base font-semibold uppercase tracking-wide text-white shadow transition-transform hover:-translate-y-1 hover:bg-brand-700"
                >
                  Request early access
                </A>
                <A
                  href="#roadmap"
                  className="rounded-full border border-brand-200 px-6 py-3 text-base font-semibold uppercase tracking-wide text-brand-700 transition-colors hover:border-brand-400 hover:text-brand-900"
                >
                  View the roadmap
                </A>
              </View>
            </View>
            <View className="w-full flex-1 rounded-3xl border border-brand-100 bg-white/80 p-1 shadow-md">
              <View className="h-80 w-full flex-1 items-center justify-center rounded-[26px] border border-dashed border-brand-200 bg-gradient-to-br from-brand-50 via-white to-brand-100">
                <Text className="text-center text-base font-medium text-brand-600">
                  Live map visualization placeholder
                </Text>
                <Text className="mt-2 max-w-sm text-center text-sm text-brand-400">
                  A realtime map module featuring vehicle clusters, agency overlays, and predicted arrival windows will land here.
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View className="px-6 pb-24" id="features">
          <View className="mx-auto w-full max-w-6xl rounded-3xl border border-brand-100 bg-white/90 p-10 shadow-sm">
            <Text className="text-center text-3xl font-semibold text-brand-900">What riders get on day one</Text>
            <View className="mt-10 flex-col gap-8 md:flex-row">
              {features.map((feature) => (
                <View key={feature.title} className="flex-1 rounded-2xl border border-brand-100 bg-brand-50/60 p-6">
                  <Text className="text-xl font-semibold text-brand-800">{feature.title}</Text>
                  <Text className="mt-3 text-base leading-relaxed text-brand-600">{feature.caption}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <View className="px-6 pb-24" id="roadmap">
          <View className="mx-auto w-full max-w-6xl rounded-3xl border border-brand-100 bg-white/90 p-10 shadow-sm">
            <Text className="text-center text-3xl font-semibold text-brand-900">Launch trajectory</Text>
            <View className="mt-10 flex-col gap-6">
              {roadmap.map((item, index) => (
                <View key={item.label} className="flex-row items-start gap-4">
                  <View className="mt-1 h-7 w-7 items-center justify-center rounded-full bg-brand-600">
                    <Text className="text-center text-sm font-semibold text-white">{index + 1}</Text>
                  </View>
                  <View className="flex-1 rounded-2xl border border-brand-100 bg-brand-50/70 p-6">
                    <Text className="text-xs uppercase tracking-[0.2em] text-brand-500">{item.label}</Text>
                    <Text className="mt-2 text-xl font-semibold text-brand-800">{item.headline}</Text>
                    <Text className="mt-3 text-base leading-relaxed text-brand-600">{item.description}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>

        <View className="px-6 pb-24" id="team">
          <View className="mx-auto w-full max-w-6xl flex-col gap-10 rounded-3xl border border-brand-100 bg-white/90 p-10 text-brand-700 shadow-sm">
            <Text className="text-center text-3xl font-semibold text-brand-900">Built by transit obsessives</Text>
            <Text className="text-center text-base leading-relaxed text-brand-600">
              Transtfi is crafted by a distributed team of engineers, planners, and operators who understand
              the stakes of every missed connection. We partner directly with agencies to ensure accuracy and
              reliability from the rails to the curb.
            </Text>
            <View className="items-center">
              <Pressable
                accessibilityRole="link"
                onPress={() => {
                  if (typeof window !== 'undefined') {
                    window.open('mailto:hello@transtfi.com', '_blank');
                  }
                }}
                className="rounded-full bg-brand-600 px-6 py-3 text-base font-semibold uppercase tracking-wide text-white shadow transition-transform hover:-translate-y-1 hover:bg-brand-700"
              >
                <Text className="text-white">Partner with us</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>

      <View className="border-t border-brand-100 bg-white/80">
        <View className="mx-auto w-full max-w-6xl flex-row flex-wrap items-center justify-between gap-4 px-6 py-6">
          <Text className="text-sm text-brand-500">{`Copyright ${new Date().getFullYear()} Transtfi. All rights reserved.`}</Text>
          <View className="flex-row gap-4">
            <A href="mailto:support@transtfi.com" className="text-sm text-brand-600 transition-colors hover:text-brand-800">
              Support
            </A>
            <A href="mailto:partnerships@transtfi.com" className="text-sm text-brand-600 transition-colors hover:text-brand-800">
              Partnerships
            </A>
            <A href="mailto:press@transtfi.com" className="text-sm text-brand-600 transition-colors hover:text-brand-800">
              Press
            </A>
          </View>
        </View>
      </View>
    </View>
  );
}
