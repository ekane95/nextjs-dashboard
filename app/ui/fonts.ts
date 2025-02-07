import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});

// import localFont from 'next/font/local';

// const myFont = localFont({
//     src: './my-font.woff2',
//     display: 'swap',
// })

// const myLocalFont = localFont({
//     src: [
//         {
//             path: './Roboto-Regular.woff2',
//             weight: '400',
//             style: 'normal',
//         },
//         {
//             path: './Roboto-Italic.woff2',
//             weight: '400',
//             style: 'italic',
//         },
//         {
//             path: './Roboto-Bold.woff2',
//             weight: '700',
//             style: 'normal',
//         },
//         {
//             path: './Roboto-BoldItalic.woff2',
//             weight: '700',
//             style: 'italic',
//         },
//     ],
// })