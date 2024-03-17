import React, { memo } from 'react';

const FormComent = memo(() => {
    return (
      <div className='flex flex-col gap-2 mt-10'>
        <div className='font-medium uppercase'> 
            viết bình luận
        </div>
            <form className='flex flex-col gap-4 py-4'>
                <input type="text"  className='border focus-visible:outline-primary rounded p-1 px-2' placeholder='Họ và tên' required/>
                <input type="email"  className='border focus-visible:outline-primary rounded p-1 px-2' placeholder='Email' required/>
                <textarea name="" id="" cols="30" rows="10" className='border focus-visible:outline-primary rounded p-1 px-2' placeholder='Nội dung'></textarea>
                <button type='submit' className='bg-secondary text-light w-fit rounded py-2 px-8 hover:bg-dark_secondary uppercase'>
                    Gửi
                </button>
            </form>
      </div>
    );
});

FormComent.displayName = 'FormComent'
export default FormComent;