import React from 'react';
import logo from './logo.svg';
import './App.css';

const name = 'natsuki';

let nameChange = 'natsuki';
nameChange = 'natsuki yamaguchi';

let username: string = 'natsuki yamaguchi';
let number: number  = 100;
let boo: boolean = true;

let arr1: boolean[] = [true, false, true];
let arr2 = [1, 2, 'natsuki'];

interface NAME {
  first: string;
  last?: string | null;
}
let nameObj: NAME = {
  first: 'natsuki'
};

const func1 = (x: number , y: number): number => {
  return x + y;
}

// Intersection Types
type PROFILE = {
  age: number;
  city: string;
}

type LOGIN = {
  username: string;
  password: string;
}

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 18,
  city: 'Hamburg',
  username: 'natsuki',
  password: '12345'
}

// Union Types
let value: boolean | number;
value = 10;

let arrUnit: (number | boolean)[];
arrUnit = [0, 1, 2, true];

// Lyteral 
let company: 'Facebook' | 'Amazon' | 'Google';
company = 'Google';

let memory: 256 | 512;
memory = 512;

// Typeof
let msg: string = 'hi';
let msg2: typeof msg;
msg2 = 'hello';

let animal = { cat: 'doraemon'};
let newAnimal: typeof animal = {
  cat: 'micky mouse'
}

// Keyof
type KEYS = {
  primary: string;
  secondary: string;
};

let key: keyof KEYS;
key = 'primary';

// typeof + keyof

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
