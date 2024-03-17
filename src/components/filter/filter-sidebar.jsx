import React, { memo, useState } from "react";
import { formatNumber } from "../../utils";
import { useNavigate } from "react-router-dom";

const FilterSidebar = memo(() => {
    const [range_price, setRangePrice] = useState(0)
    const [range_price_max, setRangePriceMax] = useState(0)

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formDataObject = {};
        for (let pair of formData.entries()) {
            formDataObject[pair[0]] = pair[1];
        }
        
        navigate(`/filter?${new URLSearchParams(formDataObject).toString()}`)
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-2">
                <input
                    type="search"
                    name="name"
                    placeholder="Tìm kiếm.."
                    className="p-2 text-[14px] focus-visible:outline-primary border focus-visible:border-white"
                    required
                />
                <div>
                    Giá khởi điểm:
                    <div className="flex items-center gap-2 text-secondary">
                        <input type="range" max={100000000} min={0} value={range_price} onChange={(e) => setRangePrice(e.target.value)} className="flex-1" name="price_min" required />
                        {formatNumber(range_price)} đ
                    </div>
                </div>
                <div>
                    Giá kết thúc:
                    <div className="flex items-center gap-2 text-secondary">
                        <input type="range" max={100000000} min={range_price} value={range_price_max} onChange={(e) => setRangePriceMax(e.target.value)} className="flex-1" name="price_max" required />
                        {formatNumber(range_price_max)} đ
                    </div>
                </div>
                <button className="bg-primary text-light p-2 hover:bg-dark_primary" type="submit">
                    Áp dụng
                </button>
            </form>
        </div>
    );
});
FilterSidebar.displayName = "FilterSidebar";
export default FilterSidebar;
