import React from 'react'
import ReactDOM from 'react-dom'

// add CSS
import './index.css'

//set up variables

const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51zPWUu4pAL._SY291_BO1,204,203,200_QL40_ML2_.jpg',
  title: 'Blood and Money: A True Story of Murder, Passion, and Power',
  author: 'Thomas Thompson',
}

const Booklist = () => {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book />
    </section>
  )
}

const Book = (props) => {
  console.log(props)
  return (
    <article className='book'>
      <img src={props.img} alt='best book'></img>
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  )
}

ReactDOM.render(<Booklist />, document.getElementById('root'))
