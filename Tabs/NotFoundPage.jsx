import {Link} from 'react-router-dom'
import React from 'react'

export default function NotFoundPage() {
  return (
    <div>
        Данная страница не существует. Вернитесь на <Link to='/' >главную</Link> страницу
    </div>
  )
}
