// import 'server-only'

const { cookies } = require("next/headers");

export async function createSession(sessionToken,userId) {
    const expires = new Date(Date.now() + 60 * 60 * 1000);
    cookies().set('session', sessionToken, {
        httpOnly: true,
        secure: true,
        expires: expires,
        // sameSite
        sameSite: 'lax',
        path: '/'
    })
    cookies().set('usr_profile', JSON.stringify({userId}), {
        httpOnly: true,
        secure: true,
        expires: expires,
        // sameSite
        sameSite: 'lax',
        path: '/'
    })
    console.log(cookies().toString());
    console.log('Session created');
}

export async function updateSession() {
    const session = cookies().get('session').value
    const userId = cookies().get('usr_profile').value
    const payload = await decrypt(session)
   
    if (!session || !payload) {
      return null
    }
   
    const expires = new Date(Date.now() + 60 * 60 * 1000)
    cookies().set('session', session, {
      httpOnly: true,
      secure: true,
      expires: expires,
      sameSite: 'lax',
      path: '/',
    })
    // cookies().set('usr_profile', userId, {
    //     httpOnly: true,
    //     secure: true,
    //     expires: expires,
    //     // sameSite
    //     sameSite: 'lax',
    //     path: '/'
    // })
  }

export async function getSession() {
  console.log("cookies().get('usr_profile')")
  return cookies().get('usr_profile')
}

export async function deleteSession(params) {
  cookies().delete('session')
  cookies().delete('usr_profile')
}