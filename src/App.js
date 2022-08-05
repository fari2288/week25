import React from 'react';
import './App.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Hello from './components/Hello';
//import Hello from './components/Hello';
import {Comment, comment} from './components/Comment';

ChartJS.register(ArcElement, Tooltip, Legend);





export const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

function App() {
  return (
    <div>
      <Pie data={data}/>
      <Hello/>
      <Comment
      date={comment.date}
      text={comment.text}
      author={comment.author} />
    </div>
  );
}

export default App