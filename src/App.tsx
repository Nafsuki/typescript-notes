import React from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './data.json';
import TestComponent from './TestComponent';

// json data *important!
type USERS = typeof Data;


//
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
const SPORTS = {
  soccor: 'Soccor',
  baseball: 'Baseball',
};

let keySports: keyof typeof SPORTS;
keySports = 'soccor';

// enum
enum OS {
  Windows,
  Mac,
  Linux,
}

interface PC {
  id: number;
  OSType: OS;
}

const PC1: PC = {
  id: 1,
  OSType: OS.Windows,
}

const PC2: PC = {
  id: 2,
  OSType: OS.Linux,
}

//型の互換性
const comp1 = 'test';
let comp2: string = comp1;

let comp3: string = 'test';
// let comp4: 'test' = comp3; // 出来ない

let funcComp1 = (x: number) => {};
let funcComp2 = (x: string) => {};
// funcComp1 = funcComp2; // 出来ない
// funcComp2 = funcComp1; // 出来ない

//Generics *important
interface GEN<T> {
  item: T;
}

const gen0: GEN<string> = {
  item: 'hello'
}
// const gen1: GEN = { // 出来ない
//   item: 'hello'
// }
const gen2: GEN<number> = {
  item: 1,
}

interface GEN1<T = string> {
  item: T;
}
const gen3: GEN1 = {
  item: 'hello',    //出来る
}

interface GEN2<T extends string | number> {
  item: T;
}
const gen4: GEN2<number> = {
  item: 3,
}

function funcGen<T>(props: T) {
  return {item: props}
}
const gen5 = funcGen('test');
const gen6 = funcGen<string | null>(null);

function funcGen1<T extends string | null>(props: T) {
  return {value: props};
} 
const gen7 = funcGen1('hello');
const gen8 = funcGen1<string>('hello');

interface Props {
  price: number;
}
function funcGen3<T extends Props>(props: T){
  return {value: props.price}
}
const gen9 = funcGen3({price: 10});

const funcGen4 = <T extends Props>(props: T) => {
  return {value: props.price};
}

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent text='Hello Natsuki!' />
      </header>
    </div>
  );
}

export default App;
