// Validate Numeric Entries in Lab 6 (Extra Credit)


do{
investment = (prompt("Enter investment amount: "))
if (isNaN(investment)) {
alert("Please Resubmit With A Number.")
}else{
document.write(investment)
break
}
} while(isNaN(investment))



do {
rate = (prompt("Enter interest rate as xx.x: "))
if (isNaN(rate)) {
alert("Please Resubmit With A Number.")
} else if (rate < 0.01 || rate > 6) {
alert("Please Enter A Realisitc Rate")
} else {
document.write(rate)
break
}
} while (isNaN(rate)|| rate < 0.01 || rate > 6)



do {
years =(prompt("Enter number of years: "))
if (isNaN(years)) {
alert("Please Resubmit With A Number.")
} else if (years < 1 || years > 30) {
alert("Please Enter A Year Between 1 Through 30")
} else {
document.write(years)
break
}
} while(isNaN(years) || years < 1 || years > 30)
    
    
    