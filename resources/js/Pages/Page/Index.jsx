import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import DangerButton from '@/Components/DangerButton';


export default function Dashboard({ auth,posts }) {

    const {
            errors,
        } = useForm({

        });

    const path = (id) => {
        return "/page/"+id;
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">

                        {posts.map( (child,k) =>
                            <div key = {k} className="p-6 text-gray-900">

                                <div>{child.title}</div>

                                 <div>{child.description}</div>

                                 <Link className="rounded-full" href={path(child.id)}>
                                    Show
                                </Link>

                            </div>

                        )}

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
