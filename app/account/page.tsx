import { createClient } from '../../utils/supabase/server';
import CustomerPortalForm from '../../components/ui/AccountForms/CustomerPortalForm';
import EmailForm from '../../components/ui/AccountForms/EmailForm';
import NameForm from '../../components/ui/AccountForms/NameForm';
import { redirect } from 'next/navigation';
import { getUser, getUserDetails } from '../../utils/supabase/queries';

export default async function Account() {
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
            Account
          </h1>
        </div>
      </div>
      <div className="p-4">
        {/* <CustomerPortalForm subscription={subscription} /> */}
        <NameForm userName={user?.user_metadata.full_name ?? ''} />
        <EmailForm userEmail={user.email} />
      </div>
    </section>
  );
}
