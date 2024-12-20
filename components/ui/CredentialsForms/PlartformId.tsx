'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Card from '../Card';
import Button from '../Button';
import { updateName } from '../../../utils/auth-helpers/server';
import { handleRequest } from '../../../utils/auth-helpers/client';

export default function PlartFormID({ userName }: { userName: string }) {
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
            title="Your Platform ID"
            description="This Platform ID is used to verify and distinguish applications."
            footer={
                <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
                    <p className="pb-4 sm:pb-0">32 characters</p>
                    <Button
                        variant="slim"
                        type="submit"
                        form="platformIDForm"
                        loading={isSubmitting}
                    >
                        Update Platform ID
                    </Button>
                </div>
            }
        >
            <div className="mt-8 mb-4 text-xl font-semibold">
                <form id="platformForm" onSubmit={(e) => handleSubmit(e)}>
                    <input
                        readOnly={true}
                        type="text"
                        name="platformID"
                        className="w-1/2 p-3 rounded-md bg-zinc-800"
                        defaultValue={userName}
                        placeholder="Your Platform ID"
                        maxLength={32}
                    />
                </form>
            </div>
        </Card>
    );
}
