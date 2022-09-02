import React from 'react';
import { usePage } from '@inertiajs/inertia-react'

export default function FlashMessage() {
    const { flash } = usePage().props
    console.log(flash);
    return (
        <main>
        <div>
          {flash.message && (
            <div class="alert">{flash.message}</div>
          )}
        </div>
      </main>
    );
}
