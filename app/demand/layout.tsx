import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free AI Visibility Report for Care Homes',
  description:
    'Find out if ChatGPT, Claude, and Perplexity are recommending your care home. Get your free AI Visibility Report and see how you compare to competitors.',
  openGraph: {
    title: 'Free AI Visibility Report for Care Homes | Maxxo.ai',
    description:
      'Find out if ChatGPT, Claude, and Perplexity are recommending your care home. Get your free AI Visibility Report and see how you compare to competitors.',
  },
  twitter: {
    title: 'Free AI Visibility Report for Care Homes | Maxxo.ai',
    description:
      'Find out if ChatGPT, Claude, and Perplexity are recommending your care home. Get your free AI Visibility Report and see how you compare to competitors.',
  },
};

export default function DemandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
