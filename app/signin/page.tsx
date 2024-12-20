import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { getDefaultSignInView } from '../../utils/settings';

export default async function SignIn() {
  const preferredSignInView =
     cookies().get('preferredSignInView')?.value || null;
  const defaultView = getDefaultSignInView(preferredSignInView);

  return redirect(`/signin/${defaultView}`);
}
