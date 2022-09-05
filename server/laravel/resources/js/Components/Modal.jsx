import React,{useMemo,useCallback} from "react";
import { useForm} from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia'
const Modal = (props) => {
    const { data, setData, post, processing, errors, reset,progress } = useForm({
        contents:'',
        workid:''
    });
    const closeModal = () => {
        props.setShowModal(false);
    };

    const getHome = (url) => {
        window.open(url, '_blank');
    };
    const submit = (e,work) => {
        e.preventDefault();
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
     <div className='w-[250px]'>
        <img className="lg:h-48 md:h-36 w-full object-cover object-center mb-2" src={`storage/image/${props.work.image_name}`} alt="blog"/>
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 ">{props.work.language}</h2>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-2">{props.work.company_name}</h1>
        <p className="leading-relaxed mb-1">時給 {props.work.min_wage}円〜{props.work.max_wage}円</p>
        <p className="leading-relaxed break-words whitespace-pre-wrap mb-1">{props.work.content}</p>
       <div className="flex justify-around">
       <button className="rounded border text-left" onClick={closeModal}>閉じる</button>
       <button className="rounded border text-center" onClick={()=>getHome(props.work.url)}>ホームページ</button>
       <button className="rounded border text-right"onClick={(e)=>submit(e,props.work)} >問い合わせる</button>
       </div>
    </div>
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