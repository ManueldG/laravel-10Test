import { useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, router, useForm } from '@inertiajs/react';

export default function Register(auth) {

    const { data, setData, post , processing, errors } = useForm({

        name: auth.category.name,

    });



    const submit = (e) => {
        e.preventDefault();

        console.log(data);
        const id = auth.category.id;

        router.post(`/category/${id}`, {
            _method: 'put',
            name: data.name,
          })
    };

    return (
        <AuthenticatedLayout
            user={auth.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}>
            <Head title="update post" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}

                    />

                </div>

                <PrimaryButton>Invia</PrimaryButton>

            </form>
        </AuthenticatedLayout>
    );
}
