'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Card from '../Card';
import Button from '../Button';
import { updateName } from '../../../utils/auth-helpers/server';
import { handleRequest } from '../../../utils/auth-helpers/client';

export default function DerivID({ userName }: { userName: string }) {
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
            title="Your Deriv App ID"
            description="This Deriv App ID is required to verify your application. Get it from from your Deriv Api Dashboard!"
            footer={
                <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
                    <p className="pb-4 sm:pb-0">Int characters only</p>
                    <Button
                        variant="slim"
                        type="submit"
                        form="derivIDForm"
                        loading={isSubmitting}
                    >
                        Update Deriv App ID
                    </Button>
                </div>
            }
        >
            <div className="mt-8 mb-4 text-xl font-semibold">
                <form id="derivIDForm" onSubmit={(e) => handleSubmit(e)}>
                    <input
                        readOnly={true}
                        type="text"
                        name="derivID"
                        className="w-1/2 p-3 rounded-md bg-zinc-800"
                        defaultValue={userName}
                        placeholder="Your Deriv App ID"
                        maxLength={6}
                    />
                </form>
            </div>
        </Card>
    );
}
