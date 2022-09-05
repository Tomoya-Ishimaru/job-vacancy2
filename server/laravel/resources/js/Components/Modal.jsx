import React,{useMemo,useCallback} from "react";
import { useForm} from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia'
const Modal = (props) => {
    // console.log(`${props.work.id}`);
    // const { data,setData,post } = useForm({workid:'',contents:''});
    const { data, setData, post, processing, errors, reset,progress } = useForm({
        contents:'',
        workid:''
    });
    // console.log(data);
    // const init = useCallback(()=>{
    //     setData(props.work);
    // },[])
    // init();
    // setData(props.work);
    // console.log(`modal:${JSON.stringify(data)}`);
    const closeModal = () => {
        props.setShowModal(false);
    };
    // const apply = (id) => {
    //     console.log(id);
    //     setData({workid:id})
    //     post(route('contacts.store'));
    // };  

    const getHome = (url) => {
        window.open(url, '_blank');
    };
    // const onHandleChange = (event) => {
    //     console.log(event.target.name,event.target.value);
    //     setData(event.target.name,event.target.value);
    //     setData('workid',props.work.id);
    //     console.log(data);
    // };  

    const submit = (e,work) => {
        e.preventDefault();
        // console.log(data);
        Inertia.post(route('contacts.store'),work);
      };  


    const modalContent = {
        background: "white",
        padding: "10px",
        borderRadius: "3px",
    };

    const overlay = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };
  return useMemo (()=>{
    return (
    <>
    {props.showFlag ? (
     <div id="overlay" style={overlay}>
     <div id="modalContent" style={modalContent}>
     {/* <form onSubmit={submit}> */}
     <div className='w-[250px]'>
        <img className="lg:h-48 md:h-36 w-full object-cover object-center mb-2" src={`storage/image/${props.work.image_name}`} alt="blog"/>
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 ">{props.work.language}</h2>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-2">{props.work.company_name}</h1>
        <p className="leading-relaxed mb-1">時給 {props.work.min_wage}円〜{props.work.max_wage}円</p>
        <p className="leading-relaxed break-words whitespace-pre-wrap mb-1">{props.work.content}</p>
        {/* <p className="leading-relaxed mb-3">時給 {props.work.min_wage}円〜{props.work.max_wage}円</p> */}
       {/* <p>{props.content}</p> */}
       {/* <div className="p-2 w-full">
            <div className="relative">
                <label htmlFor="contents" className="leading-7 text-sm text-gray-600">問い合わせ</label>
                <textarea id="contents" name="contents" defaultValue={data.contents} onChange={e => setData('contents', e.target.value)}  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
        </div> */}
       <div className="flex justify-around">
       <button className="rounded border text-left" onClick={closeModal}>閉じる</button>
       <button className="rounded border text-center" onClick={()=>getHome(props.work.url)}>ホームページ</button>
       <button className="rounded border text-right"onClick={(e)=>submit(e,props.work)} >問い合わせる</button>
       </div>
    </div>
       {/* </form> */}
     </div>
   </div>
    ) : (
      <></>
    )}
  </>
    )
  },[props]);
};

export default Modal;