const main = (a: number, b: number): Array<number> => {
	let array = []

	let begin = a
	let end = b

	array.push(begin)

	while (++begin <= end) {
		array.push(begin)
	}

	return array
}
document.body.innerHTML = `<div>KEEEK</div>`
console.log(main(-3, 3))
