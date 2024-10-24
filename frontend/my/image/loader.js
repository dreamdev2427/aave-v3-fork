'use client'
 
// Docs: https://imagekit.io/docs/image-transformation
export default function imageKitLoader({ src, width, quality }) {
  const params = [`w-${width}`, `q-${quality || 80}`]
  return `https://ik.imagekit.io/cykpetgtn/aqualoan/${src}?tr=${params.join(',')}`
}