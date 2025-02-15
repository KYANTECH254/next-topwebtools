import { createClient } from '../../utils/supabase/server';
import { redirect } from 'next/navigation';
import { getUser, getUserDetails,getUserCredentials } from '../../utils/supabase/queries';
import PublicKey from '../../components/ui/CredentialsForms/PublicKey';
import PlartFormID from '../../components/ui/CredentialsForms/PlartformId';
import DerivID from '../../components/ui/CredentialsForms/DerivID';
import Origins from '../../components/ui/CredentialsForms/Origins';
import { insertCredentials } from '../../utils/supabase/admin';


export default async function Credentials() {
  const supabase = createClient();
  const [user, userDetails,credentials] = await Promise.all([
    getUser(supabase),
    getUserDetails(supabase),
    getUserCredentials(supabase)
  ]);

  if (!user) {
    return redirect('/signin');
  }

  if (!credentials || !user) {
    await insertCredentials(user.email as string);
  }

  console.log("User Info:",user, "Credentials:",credentials)

  return (
    <section className="mb-32 bg-black">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:px-6 sm:pt-24 lg:px-8">
        <div className="sm:align-center sm:flex sm:flex-col">
          <h1 className="text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
            Api Credentials
          </h1>
        </div>
      </div>
      <div className="p-4">
        <PublicKey userName={credentials?.apiKey ?? ''} />
        <PlartFormID userName={credentials?.platformId ?? ''} />
        <DerivID userName={credentials?.derivId ?? ''} />
        <Origins userName={credentials?.origin ?? ''} />
      </div>
    </section>
  );
}
