import React  from "react";
import { useEffect, useState } from "react";


export default function LikeCounter () {

    const [count, setCount] = useState(0);
    // const [del, setDel] = useState(0);
    const [answer, setAnswer] = useState(false)

    

    useEffect(() => {
        console.log("Я отрисовался")

        count >= 0;

        if(count > 5) {
            setAnswer(true)
        }

        return () => {
            
            console.log('Я удалился')
          }
        }
    ,[count]);

    const handleClick = (e) => {
        e.preventDefault();
        setCount((value) => ++value )
    }

    const handleClickDelete = (e) => {
        e.preventDefault();
       setCount((value) => --value )
    }

    return (
        <div>
            <form>
                <button className="">{count}</button>
                <button className="like" onClick={handleClick}>Поставить лайк</button>
                <button className="dislike" onClick={handleClickDelete}>Убрать лайк</button>
                {answer && (<p>Вы довольны на {count} лайков</p>)}
            </form>
            
        </div>
    
    )
}
