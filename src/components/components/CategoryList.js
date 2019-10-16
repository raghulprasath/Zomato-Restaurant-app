import React from 'react'

const CategoryList = (props) => (
    props.categories ? (
        <div className="list-group">
         {props.categories.map(category => (
             <button key={category.id} onClick={() => props.categoryClickHandler(category)} className={'list-group-item list-group-item-action ' + (props.categorySelected && category.id === props.categorySelected.id ? 'active' : '')}>
                 {category.name}
             </button>
         ))}    
        </div>
    ) : (
        <p> Loading... </p>
    )
)

export default CategoryList