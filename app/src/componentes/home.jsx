import React from 'react';
import CardYo from './card';
import "../css/home.css"
import Banner from "../componentes/banner";
import QuestionForm from '../componentes/QuestionForm';

const Home = () => {
  return (
    <div  className='cuerpoHome'>
      <Banner />
      <div className='Card'>
        <CardYo />
      </div>
      <div id='sec2' className='seccion2'>
      <QuestionForm />
      </div>
      
    </div>
   
  );
};

export default Home;