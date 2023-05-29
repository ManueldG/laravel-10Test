import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth, post }) {
    console.log(post.categories);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">


                            <div className="p-6 text-gray-900">

                                <div>{post.title}</div>

                                 <div>{post.description}</div>
                                 {post.photo != "null" ? <img src={"/"+post.photo} alt={"immagine relativa a " + post.title} /> :  <br/>}
                                 <div>{post.categories.map((elem)=>elem.name)}</div>
                            </div>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
