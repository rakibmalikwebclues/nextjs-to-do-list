import Head from 'next/head'
import Image from 'next/image'
// styles from '../styles/Home.module.css'
import Forminput from './Forminput'
import List from './List'
import Footer from './Footer'
import {DataProvider} from './DataProvider'

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
