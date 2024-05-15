import { useState } from 'react'
import styles from './App.module.scss'

export function App() {
	const [count, setCount] = useState(0)

	function increment() {
		setCount(count + 1)
	}

	return <div className={styles.btn}></div>
}
