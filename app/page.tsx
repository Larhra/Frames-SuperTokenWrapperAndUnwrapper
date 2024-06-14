import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';


const FRAMES_URL = process.env.FRAMES_URL || ""
const imageUrl = new URL("/og", FRAMES_URL).href
const postUrl = new URL("/frames/TokenInput", FRAMES_URL).href

const frameMetadata = getFrameMetadata({
  buttons: [
      {label: 'Start!', action: 'post'},
  ],
  image: imageUrl,
  post_url: postUrl,

});

export const metadata: Metadata = {
  title: 'Wrap and Unwrap Tokens',
  description: 'A frame to Launch, Wrap and Unwrap Super Tokens',
  openGraph: {
    title: 'A frame to Launch, Wrap and Unwrap Super Tokens',
    description: 'A frame to Launch, Wrap and Unwrap Super Tokens',
    images: [imageUrl],
  },
  other: {
    'of:accepts:xmtp': '2024-02-01',
    ...frameMetadata,
  },
};

export default async function Page() {
   return (
    <div>wrapper and unwrap </div>
   )
}