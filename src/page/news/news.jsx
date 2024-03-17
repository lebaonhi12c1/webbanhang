import React, { memo } from "react";
import RightCategory from "../../components/news/right-category";
import ListNews from "../../components/news/list-news";

const News = memo(() => {
    const data = [
        {
            id: 1,
            image: "https://i.ytimg.com/vi/h-a7Og5mG5Y/sddefault.jpg",
            title: "Điện thoại Iphone 15 Pro max, 15 Pro, 15 Pro max, Store Premium, Chính hãng VN/A",
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quo commodi doloribus itaque cum vel quos tempore praesentium quasi, tenetur, temporibus nemo architecto esse officia. Porro voluptatibus quae omnis at.',
            created_at: "2023-01-01 00:00:00",
            category: 'news',
        },
        {
            id: 2,
            image: "https://i.ytimg.com/vi/h-a7Og5mG5Y/sddefault.jpg",
            title: "Điện thoại Iphone 15 Pro max, 15 Pro, 15 Pro max, Store Premium, Chính hãng VN/A",
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quo commodi doloribus itaque cum vel quos tempore praesentium quasi, tenetur, temporibus nemo architecto esse officia. Porro voluptatibus quae omnis at.',
            created_at: "2023-01-01 00:00:00",
            category: 'news',
        },
        {
            id: 3,
            image: "https://i.ytimg.com/vi/h-a7Og5mG5Y/sddefault.jpg",
            title: "Điện thoại Iphone 15 Pro max, 15 Pro, 15 Pro max, Store Premium, Chính hãng VN/A",
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quo commodi doloribus itaque cum vel quos tempore praesentium quasi, tenetur, temporibus nemo architecto esse officia. Porro voluptatibus quae omnis at.',
            created_at: "2023-01-01 00:00:00",
            category: 'news',
        },
        {
            id: 4,
            image: "https://i.ytimg.com/vi/h-a7Og5mG5Y/sddefault.jpg",
            title: "Điện thoại Iphone 15 Pro max, 15 Pro, 15 Pro max, Store Premium, Chính hãng VN/A",
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quo commodi doloribus itaque cum vel quos tempore praesentium quasi, tenetur, temporibus nemo architecto esse officia. Porro voluptatibus quae omnis at.',
            created_at: "2023-01-01 00:00:00",
            category: 'news',
        },
    ]
    return (
        <div className="container_box flex flex-col gap-4 ">
            <div className="">
                <img
                    src="https://pixlr.com/images/mobile/banner.webp"
                    alt=""
                    className="h-[250px] w-full object-contain shadow-md shadow-primary rounded"
                />
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
                <div className=" lg:col-span-4">
                    <ListNews data={data}/>
                </div>
                <div>
                    <RightCategory/>
                </div>
            </div>
        </div>
    );
});

News.displayName = "News";

export default News;
