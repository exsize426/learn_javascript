import React from 'react'
import MyInput from './Input/MyInput'
import MySelect from './Select/MySelect'

export default function PostFilter({filter, setFilter}) {
  return (
    <div>
        <MyInput 
            placeholder="Поиск..."
            value={filter.query}
            onChange={event => setFilter({...filter, query: event.target.value})}
        />
        <MySelect 
            value={filter.sort}
            onChange={selectSort => setFilter({...filter, sort: selectSort})}
            defaultValue="Сортировка"
            options={[
                {value: "title", name: "По названию"},
                {value: "body", name: "По описанию"}
                            
            ]}
        />
    </div>
  )
}
