import React from 'react';
import Authenticated from '@/Layouts/CompanyAuthenticated';
import { Head,usePage } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    const { contacts } = usePage().props;
    console.log(contacts);
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Contact</h2>}
        >
            <Head title="Dashboard" />

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-4 mx-auto">
                    <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                    <table className="table-auto w-full text-left whitespace-no-wrap">
                        <thead>
                        <tr>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">名前</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">メールアドレス</th>
                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">GIT URL</th>
                        </tr>
                        </thead>
                        <tbody>
                        {contacts.map((contact,index)=>{
                            return(
                            <tr key={contact.id} >
                                <td className="px-4 py-3">{contact.name}</td>
                                <td className="px-4 py-3">{contact.email}</td>
                                <td className="px-4 py-3"><a href ={contact.url}>{contact.url}</a></td>
                            </tr>
                            )
                        })}    
                        
                        </tbody>
                    </table>
                    </div>
                </div>
            </section>



        </Authenticated>
    );
}
