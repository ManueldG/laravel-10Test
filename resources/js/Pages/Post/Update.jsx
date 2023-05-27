import { useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Checkbox from '@/Components/Checkbox';
import { Head, router, useForm } from '@inertiajs/react';

export default function Register(auth) {

    const { data, setData, post, processing, errors } = useForm({

        title: auth.post.title,
        description: auth.post.description,
        photo: auth.post.photo,
        categories: auth.post.categories,
        list: auth.categories,
        checked: [false,false,false,false] ,

    });

    const check = (val) => data.categories.forEach( (elem,i) =>  {

        let newArr = [...data.checked];
        newArr[val.id-1] = (elem.id==val.id) ? true : newArr[val.id-1] ;
        data.checked = newArr

        return data.checked[val.id-1]
        }
        )


    const submit = (e) => {
        e.preventDefault();

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

                    {post.photo != "null" ? <img src={"/"+data.photo} alt={data.title} /> :  <br/>}

                </div>



                    <div>{data.list.map((cat) =>{
                        check(cat)
                        return(
                        <div key={cat.id}>

                        <Checkbox
                        id = {"cat" + cat.id}
                        name = "cat[]"
                        defaultChecked={ data.checked[cat.id-1] }


                        onChange={(e) => {
                                /*
                                let arr = false;
                                const id = cat.id;
                                arr = document.getElementById("cat" + id).checked;

                                if (arr)
                                    data.category.push(id);
                                else
                                    data.category.remove(id);
                            */
                            }
                           }
                        />


                        <InputLabel htmlFor={"cat" + cat.id} value={cat.name} />
                    </div>)
                    }
                        )}

                        </div>

                <PrimaryButton>Invia</PrimaryButton>

            </form>
        </AuthenticatedLayout>
    );
}
