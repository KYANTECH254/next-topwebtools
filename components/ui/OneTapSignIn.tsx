// 'use client'

// import Script from 'next/script'
// import { createClient } from '../../utils/supabase/server'
// import { CredentialResponse } from 'google-one-tap'
// import { useRouter } from 'next/navigation'
// import { useEffect } from 'react'
// import { getErrorRedirect, getStatusRedirect } from '../../utils/helpers'

// const OneTapComponent = () => {
//     const supabase = createClient()
//     const router = useRouter()
//     const requestUrl = new URL(window.location.href)

//     // Function to generate a nonce
//     const generateNonce = async (): Promise<string[]> => {
//         const nonce = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(32))))
//         const encoder = new TextEncoder()
//         const encodedNonce = encoder.encode(nonce)
//         const hashBuffer = await crypto.subtle.digest('SHA-256', encodedNonce)
//         const hashArray = Array.from(new Uint8Array(hashBuffer))
//         const hashedNonce = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
//         return [nonce, hashedNonce]
//     }

//     useEffect(() => {
//         const initializeGoogleOneTap = async () => {
//             try {
//                 console.log('Initializing Google One Tap')

//                 const [nonce, hashedNonce] = await generateNonce()
//                 console.log('Generated Nonce:', nonce, hashedNonce)

//                 // Check if session already exists
//                 const { data, error } = await supabase.auth.getSession()
//                 if (error) {
//                     console.error('Error fetching session:', error)
//                     getErrorRedirect(
//                         `${requestUrl.origin}/signin`,
//                         error.name,
//                         "Sorry, we weren't able to log you in. Please try again."
//                     )
//                     return
//                 }
//                 if (data.session) {
//                     getStatusRedirect(
//                         `${requestUrl.origin}/account`,
//                         'Success!',
//                         'You are already signed in.'
//                     )
//                     return
//                 }

//                 // Initialize Google One Tap
//                 /* global google */
//                 google.accounts.id.initialize({
//                     client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
//                     callback: async (response: CredentialResponse) => {
//                         try {
//                             const { data, error } = await supabase.auth.signInWithIdToken({
//                                 provider: 'google',
//                                 token: response.credential,
//                                 nonce,
//                             })
//                             if (error) throw error
//                             console.log('Logged in:', data)
//                             getStatusRedirect(
//                                 `${requestUrl.origin}/account`,
//                                 'Success!',
//                                 'You are now signed in.'
//                             )
//                         } catch (error) {
//                             console.error('Google One Tap login error:', error)
//                             getErrorRedirect(
//                                 `${requestUrl.origin}/signin`,
//                                 error.name,
//                                 "Sorry, we weren't able to log you in. Please try again."
//                             )
//                         }
//                     },
//                     nonce: hashedNonce,
//                     use_fedcm_for_prompt: true,
//                 })
//                 google.accounts.id.prompt()
//             } catch (error) {
//                 console.error('Initialization Error:', error)
//             }
//         }

//         initializeGoogleOneTap()

//         return () => {
//             console.log('Cleaning up Google One Tap listener')
//         }
//     }, [supabase, router])

//     return (
//         <>
//             <Script
//                 src="https://accounts.google.com/gsi/client"
//                 strategy="afterInteractive"
//                 onLoad={() => console.log('Google One Tap script loaded')}
//             />
//             <div id="oneTap" className="fixed top-0 right-0 z-[100]" />
//         </>
//     )
// }

// export default OneTapComponent
