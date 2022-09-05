import React from 'react';
import Authenticated from '@/Layouts/CompanyAuthenticated';
import { Head, useForm,usePage } from '@inertiajs/inertia-react';
import FlashMessage from '@/Components/FlashMessage'

export default function Dashboard(props) {
  const { data, setData, post, processing, errors, reset,progress } = useForm({
    minWage: '',
    maxWage: '',
    language: '',
    url:'',
    file:'',
    fileName:'',
    contents:'',
  });
  const onHandleChange = (event) => {
    setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
  };  
  const submit = (e) => {
    e.preventDefault();

    post(route('company.works.store'));
  };
  const { flash} = usePage().props
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Setting</h2>}
        >
            <Head title="Dashboard" />



            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">労働条件を設定してください</div>
                        <FlashMessage />
                        <section className="text-gray-600 body-font relative">
                          <form onSubmit={submit}>
                          
                          <div className="container px-5 py-12 mx-auto">
                            <div className="lg:w-1/2 md:w-2/3 mx-auto">
                              <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-full">
                                  <div className="relative">
                                    <label htmlFor="min" className="leading-7 text-sm text-gray-600">最低時給</label>
                                    <input type="number" id="min" name="minWage" onChange={(e) => onHandleChange(e)} defaultValue={data.minWage} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                    {errors.min_wage && <div>{errors.min_wage}</div>}
                                  </div>
                                </div>
                                <div className="p-2 w-full">
                                  <div className="relative">
                                    <label htmlFor="max" className="leading-7 text-sm text-gray-600">最高時給</label>
                                    <input type="number" id="max" name="maxWage" onChange={(e) => onHandleChange(e)} defaultValue={data.maxWage} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                    {errors.max_wage && <div>{errors.max_wage}</div>}
                                  </div>
                                </div>
                                <div className="p-2 w-full">
                                  <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">プログラミング言語</label>
                                    <input type="text" id="language" name="language" onChange={(e) => onHandleChange(e)} defaultValue={data.language} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                    {errors.language && <div>{errors.language}</div>}
                                  </div>
                                </div>
                                <div className="p-2 w-full">
                                  <div className="relative">
                                    <label htmlFor="url" className="leading-7 text-sm text-gray-600">URL</label>
                                    <input type="url" id="url" name="url" onChange={(e) => onHandleChange(e)} defaultValue={data.url} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                    {errors.url && <div>{errors.url}</div>}
                                  </div>
                                </div>
                                <div className="p-2 w-full mx-auto">
                                  <div className="relative">
                                    <label htmlFor="image" className="leading-7 text-sm text-gray-600">画像</label>
                                    <input type="file" id="image" name="file" multiple accept="image/png,image/jpeg,image/jpg" onChange={e => setData('image', e.target.files[0])} defaultValue={data.file} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                    {progress && (
                                      <progress value={progress.percentage} max="100">
                                        {progress.percentage}%
                                      </progress>
                                    )}
                                  </div>
                                </div>
                                <div className="p-2 w-full">
                                  <div className="relative">
                                    <label htmlFor="contents" className="leading-7 text-sm text-gray-600">内容,条件等</label>
                                    <textarea id="contents" name="contents" onChange={(e) => onHandleChange(e)} defaultValue={data.contents} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    {errors.content && <div>{errors.content}</div>}
                                  </div>
                                </div>
                                <div className="p-2 w-full">
                                  <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          </form>
                        </section>
                    </div>
                </div>
            </div>



            
        </Authenticated>
    );
}
