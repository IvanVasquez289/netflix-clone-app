import {create} from 'zustand'
export interface ModalStoreInterface {
    movieId: string;
    isOpen: boolean;
    openModal: (movieId:string)=>void;
    closeModal:()=>void;
}

const useInfoModal = create<ModalStoreInterface>((set)=>({
    movieId: '657fd3912ce287e60f6e14ec',
    isOpen: false,
    openModal:(movieId:string)=>set({isOpen:true,movieId}),
    closeModal:()=>set({isOpen:false,movieId:undefined})
}))

export default useInfoModal;