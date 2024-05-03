// import 'server-only'

const { cookies } = require("next/headers");

export async function createSession(sessionToken) {
    const expires = new Date(Date.now() + 5 * 60 * 1000);
    cookies().set('session', sessionToken, {
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
    const payload = await decrypt(session)
   
    if (!session || !payload) {
      return null
    }
   
    const expires = new Date(Date.now() + 5 * 60 * 1000)
    cookies().set('session', session, {
      httpOnly: true,
      secure: true,
      expires: expires,
      sameSite: 'lax',
      path: '/',
    })
  }