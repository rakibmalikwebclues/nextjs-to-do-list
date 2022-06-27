import Head from 'next/head'
import Image from 'next/image'
// styles from '../styles/Home.module.css'
import Forminput from './components/Forminput'
import List from './components/List'
import Footer from './components/Footer'
import {DataProvider} from './components/DataProvider'

export default function Home() {
  return (
    <DataProvider>
      <div className="App">
        <h1>To Do List</h1>
        <Forminput />
        <List />
        <Footer />
      </div>
    </DataProvider>
  )
}