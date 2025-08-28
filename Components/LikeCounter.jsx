import React  from "react";
import { useEffect, useState } from "react";
import "../index.css"


export default function LikeCounter ({getLikerValue}) {

    const [count, setCount] = useState(0);
    // const [del, setDel] = useState(0);
    const [answer, setAnswer] = useState(null)

    

    useEffect(() => {
        document.title = `My draft ${count}` ;

        if(count >= 1) {
            setAnswer("happy")
        }else if (count < 0) {
            setAnswer("unhappy")
        } else {
            setAnswer(null)
        }

        return () => {
            
            console.log('Я удалился')
          }
        }
    ,[count]);

    const handleClick = (e) => {
        e.preventDefault();
        setCount((value) => ++value )
        getLikerValue(count) // -прокидывает значение в count в App, передавать или по клику или по изменению
    }

    const handleClickDelete = (e) => {
        e.preventDefault();
       setCount((value) => --value  )
    }

    return (
        <div>
            <form>
                <button className="">{count} ♥</button>
                <button className="heart-button" onClick={handleClick}>Поставить лайк</button>
                <button className="dislike" onClick={handleClickDelete}>Убрать лайк</button>
                {answer == "happy" && (<p>Вы довольны на {count} лайков</p>)}
                {answer == "unhappy" && (<p>Вы не довольны</p>)}
            </form>
            
        </div>
    
    )
}
