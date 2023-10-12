
// // Validate Repeat Entry in Lab 5 (Extra Credit)

do {
again = window.prompt("Repeat entries? (y/n)")

if (again === 'y') {
document.write("Lets repeat the entries.")
break
} else if (again === 'n') {
document.write("Thanks for trying")
break
}
} while (again != 'y' || again != 'n')
