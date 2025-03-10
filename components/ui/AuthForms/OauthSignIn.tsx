'use client';

import { Github, Facebook, Twitter } from 'lucide-react';
import { useState } from 'react';
import Button from '../Button';
import Google from '../../icons/Google';
import X from '../../icons/X';
import { signInWithOAuth } from '../../../utils/auth-helpers/client';

type OAuthProviders = {
  name: any;
  displayName: string;
  icon: JSX.Element;
};

export default function OauthSignIn() {
  const oAuthProviders: OAuthProviders[] = [
    {
      name: 'google',
      displayName: 'Google',
      icon: <Google className="h-5 w-5" />
    },
    // {
    //   name: 'twitter',
    //   displayName: 'Twitter',
    //   icon: <X className="h-5 w-5" />
    // },
    // {
    //   name: 'facebook',
    //   displayName: 'Facebook',
    //   icon: <Facebook className="h-5 w-5" />
    // },
    {
      name: 'github',
      displayName: 'GitHub',
      icon: <Github className="h-5 w-5" />
    },
  ];
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true); // Disable the button while the request is being handled
    await signInWithOAuth(e);
    setIsSubmitting(false);
  };

  return (
    <div className="mt-8">
      {oAuthProviders.map((provider) => (
        <form
          key={provider.name}
          className="pb-2"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input type="hidden" name="provider" value={provider.name} />
          <Button
            variant="slim"
            type="submit"
            className="w-full"
            loading={isSubmitting}
          >
            <span className="mr-2">{provider.icon}</span>
            <span>{provider.displayName}</span>
          </Button>
        </form>
      ))}
    </div>
  );
}
