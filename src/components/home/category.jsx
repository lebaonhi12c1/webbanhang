import React, { memo } from 'react';
import {AiOutlineUnorderedList} from 'react-icons/ai'
import { Link } from 'react-router-dom';
const Category = memo(() => {
    return (
        <div className='h-[300px] overflow-y-auto'>   
            <div className='flex items-center gap-4 bg-primary text-light p-2 sticky top-0'>
                <AiOutlineUnorderedList fontSize={24}/>
                Danh mục
            </div>
            <div className='flex flex-col'>
                    <Link to={'/'}  className='hover:bg-three p-2 text-light_dark sticky top-10 bg-light'>
                        Tất cả sản phẩm
                    </Link>
                    <Link to={'/'}  className='hover:bg-three p-2 text-light_dark'>
                        category1
                    </Link>
                    <Link to={'/'}  className='hover:bg-three p-2 text-light_dark'>
                        category1
                    </Link>
                    <Link to={'/'}  className='hover:bg-three p-2 text-light_dark'>
                        category1
                    </Link>
                    <Link to={'/'}  className='hover:bg-three p-2 text-light_dark'>
                        category1
                    </Link>
                    <Link to={'/'}  className='hover:bg-three p-2 text-light_dark'>
                        category1
                    </Link>
                    <Link to={'/'}  className='hover:bg-three p-2 text-light_dark'>
                        category1
                    </Link>
                    <Link to={'/'}  className='hover:bg-three p-2 text-light_dark'>
                        category1
                    </Link>
                    <Link to={'/'}  className='hover:bg-three p-2 text-light_dark'>
                        category1
                    </Link>
                </div>
        </div>
    );
});
Category.displayName = 'Category'
export default Category;