import { useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, router, useForm } from '@inertiajs/react';

export default function Register(auth) {

    const { data, setData, post, patch , processing, errors } = useForm({

        title: auth.post.title,
        description: auth.post.description,
        photo: auth.post.photo,

    });



    const submit = (e) => {
        e.preventDefault();

        console.log(data);
        const id = auth.post.id;

        router.post(`/post/${id}`, {
            _method: 'put',
            title: data.title,
            description: data.description,
            photo: data.photo,
          })
    };

    return (
        <AuthenticatedLayout
            user={auth.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}>
            <Head title="update post" />

            <form onSubmit={submit}>
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

                    />

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

                    />

                </div>

                <div className="mt-4">

                    <InputLabel htmlFor="photo" value="Photo" />

                    <input type="file" id="photo" onChange={e =>
                        setData('photo', e.target.files[0])}  />

                    {post.photo != "null" ? <img src={"/"+post.photo} alt={post.title} /> :  <br/>}

                </div>


                <PrimaryButton>Invia</PrimaryButton>

            </form>
        </AuthenticatedLayout>
    );
}
