import React from 'react';
import { usePage } from '@inertiajs/inertia-react'

export default function FlashMessage() {
    const { flash } = usePage().props
    console.log(flash);
    return (
        <main>
        <div>
          {flash.message && (
            <div className="p-6 bg-white border-b border-gray-200">{flash.message}</div>
          )}
        </div>
      </main>
    );
}
