import { useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Checkbox from '@/Components/Checkbox';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register(auth) {

    const { data, setData, post, errors } = useForm({

        title: '',
        description: '',
        photo: '',
        category:[]

    });

    const submit = (e) => {
        e.preventDefault();

        post(route('post.store'));
    };

    return (
        <AuthenticatedLayout
            user={auth.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}>
            <Head title="new post" />

            <form onSubmit={submit} >
                <div>
                    <InputLabel htmlFor="title" value="Title" />

                    <TextInput
                        id="title"
                        name="title"
                        value={data.title}
                        className="mt-1 block w-full"
                        autoComplete="title"
                        isFocused={true}
                        onChange={(e) => setData('title', e.target.value)}
                        required
                    />

                    <InputError message={errors.title} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="decription" value="Description" />

                    <TextInput
                        id="description"
                        type="text"
                        name="description"
                        value={data.description}
                        className="mt-1 block w-full"
                        autoComplete="title"
                        onChange={(e) => setData('description', e.target.value)}
                        required
                    />

                    <InputError message={errors.description} className="mt-2" />
                </div>

                <input type="file"  onChange={e =>
                        setData('photo', e.target.files[0])}  />

                <div className="mt-4">


                    {auth.categories.map( (item)=>
                    <div>
                        <Checkbox
                        id = "cat"
                        name = "cat"

                        onChange={(e) => {

                                console.log("click",item.id);
                            }   }
                        />
                        <InputLabel htmlFor="categories" value={item.name} />
                    </div>

                    )
                    }

                    <InputError message={errors.description} className="mt-2" />
                </div>

                <PrimaryButton>Invia</PrimaryButton>

            </form>


        </AuthenticatedLayout>
    );
}
