import React from "react";
import Tag from "./Tag";

// Icons
import ArrowLeft from '../assets/icons/CircleLeft.svg'
import CommentIcon from '../assets/icons/Comment.svg'

const Card = ({data, color=null}) => {
    const { tag, title, content, comments } = data
    return (
        <div className="w-[540px] flex text-white flex-col h-72 rounded-[32px] border-2 border-white border-opacity-35 bg-black bg-opacity-10 backdrop-blur-[114px] shadow-lg py-4 px-8">
            <Tag color={color}>{tag}</Tag>
            <h1 className="font-Gilroy text-[34px] py-2">{title}</h1>
            <p className="text-xl font-medium leading-8 py-2">{content}</p>
            <span className="flex items-center bg-violet rounded-full mt-4 p-1 w-fit">
                <img src={CommentIcon} alt="CommentIcon" />
                <p className="mx-2 text-[10px]">{comments} نظر</p>
            </span>
            <div className="bg-violet rounded-bl-[30px] rou rounded-r-xl absolute left-1 bottom-1 p-4 h-fit">
                <img src={ArrowLeft} alt="ArrowLeft" />
            </div>
        </div>
    );
};

export default Card;
