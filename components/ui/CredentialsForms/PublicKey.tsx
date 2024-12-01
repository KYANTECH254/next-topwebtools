'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Card from '../Card';
import Button from '../Button';
import { updateName } from '../../../utils/auth-helpers/server';
import { handleRequest } from '../../../utils/auth-helpers/client';

export default function PublicKey({ userName }: { userName: string }) {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setIsSubmitting(true);
        // Check if the new name is the same as the old name
        if (e.currentTarget.fullName.value === userName) {
            e.preventDefault();
            setIsSubmitting(false);
            return;
        }
        handleRequest(e, updateName, router);
        setIsSubmitting(false);
    };

    return (
        <Card
            title="Your Public Key"
            description="This public Key is required to verify your application."
            footer={
                <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
                    <p className="pb-4 sm:pb-0">64 characters</p>
                    <Button
                        variant="slim"
                        type="submit"
                        form="publicKeyForm"
                        loading={isSubmitting}
                    >
                        Update Public Key
                    </Button>
                </div>
            }
        >
            <div className="mt-8 mb-4 text-xl font-semibold">
                <form id="nameForm" onSubmit={(e) => handleSubmit(e)}>
                    <input
                        readOnly={true}
                        type="text"
                        name="publicKey"
                        className="w-1/2 p-3 rounded-md bg-zinc-800"
                        defaultValue={userName}
                        placeholder="Your Public Key"
                        maxLength={64}
                    />
                </form>
            </div>
        </Card>
    );
}
