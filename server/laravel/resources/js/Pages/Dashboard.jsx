import React, { useState ,useCallback} from "react";
import Authenticated from '@/Layouts/Authenticated';
import { Head,usePage } from '@inertiajs/inertia-react';
import Modal from "@/Components/Modal"; //Modalコンポーネントをimportする

export default function Dashboard(props) {
    const { works } = usePage().props;
    // console.log(works);
    const [showModal, setShowModal] = useState(false);
    const [modalWork,setModalWork] =  useState({
        // company_id:'',
        // min_wage:'' ,
        // max_wage:'',
        // content:'',
        // language:'',
        // url:''
    });
    // let modalWork ={};
    const ShowModal = useCallback((work) => {
        // console.log(work);
        // console.log("aa:"+modalWork)
        // modalWork=work;
        setModalWork(work);
        setShowModal(true);
      },[]);
    
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">You're logged in!</div>
                    </div>

                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="flex flex-wrap -m-4">
                            {works.map((work,index)=>{
                                return(
                                    // <div>{work.min_wage}</div>
                                <div className="p-4 md:w-1/3" key={work.id}>
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={`storage/image/${work.image_name}`} alt="blog"/>
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{work.language}</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{work.company_name}</h1>
                                    <p className="leading-relaxed mb-3">時給 {work.min_wage}円〜{work.max_wage}円</p>
                                    <div className="flex items-center flex-wrap ">
                                    <button className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" onClick={() =>ShowModal(work)}>詳細を見る
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                    </div>
                                </div>
                                </div>
                            </div>
                                )
                            })}    
                            </div>
                        </div>
                    </section>
                    <h2>Modal実装</h2>
                    <button onClick={ShowModal}>Open Modal</button>
                    {/* Appコンポーネントから子であるModalコンポーネントにpropsを渡す */}
                    <Modal showFlag={showModal} setShowModal={setShowModal} content="親から渡された値です。" work={modalWork}/>
                </div>
            </div>
        </Authenticated>
    );
}
