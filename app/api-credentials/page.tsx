import { createClient } from '../../utils/supabase/server';
import { redirect } from 'next/navigation';
import { getUser, getUserDetails } from '../../utils/supabase/queries';
import PublicKey from '../../components/ui/CredentialsForms/PublicKey';
import PlartFormID from '../../components/ui/CredentialsForms/PlartformId';
import DerivID from '../../components/ui/CredentialsForms/DerivID';
import Origins from '../../components/ui/CredentialsForms/Origins';


export default async function Credentials() {
  const supabase = createClient();
  const [user, userDetails] = await Promise.all([
    getUser(supabase),
    getUserDetails(supabase),
  ]);

  if (!user) {
    return redirect('/signin');
  }
  console.log("User Info:",user)

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
        
        <PublicKey userName={user?.user_metadata.full_name ?? ''} />
        <PlartFormID userName={user?.user_metadata.full_name ?? ''} />
        <DerivID userName={user?.user_metadata.full_name ?? ''} />
        <Origins userName={user?.user_metadata.full_name ?? ''} />
      </div>
    </section>
  );
}
