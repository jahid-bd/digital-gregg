import Modal from '@components/Modal/Modal';
import dynamic from 'next/dynamic';

// dynamic import
const ModalText = dynamic(() => import('./ModalText'));

const AgreeModal = ({ open, setOpen, setIsAccept }: any) => {
    return (
        <>
            <Modal open={open} setOpen={setOpen} title={'PRIVACY POLICY'}>
                
                <ModalText />

                <div className='flex md:flex-row flex-col gap-4 mt-4 mb-3'>
                    <button onClick={() => {
                      setIsAccept(true);
                      setOpen(false);
                    }} className='p-[15px_20px] bg-primary border border-transparent hover:border hover:border-primary w-full text-white hover:text-primary outline-none cursor-pointer rounded-[4px] hover:bg-white  font-semibold transition-all ease-in-out duration-300'>I accept</button>
                    <button 
                    onClick={() => {
                      setIsAccept(false);
                      setOpen(false);
                    }}
                    className='p-[15px_20px] bg-white hover:bg-primary border border-primary hover:border-primary w-full text-primary hover:text-white outline-none cursor-pointer rounded-[4px] font-semibold transition-all ease-in-out duration-300'>{`I don't accept`}</button>
                </div>

            </Modal>
        </>
    )
}

export default AgreeModal