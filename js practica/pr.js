
// 5
// let inputField = document.getElementById("inputField");
// let keys = document.querySelectorAll(".key");
// let capsLockKey = document.querySelector(".caps-lock");

// let capsLockEnabled = false;

// capsLockKey.addEventListener("click", () => {
//     capsLockEnabled = !capsLockEnabled;
//     if (capsLockEnabled) {
//         capsLockKey.classList.add("active");
//     } else {
//         capsLockKey.classList.remove("active");
//     }
// });

// keys.forEach((key) => {
//     key.addEventListener("click", () => {
//         let keyPressed = key.textContent;
        
//         // Если Caps Lock включен, преобразовываем текст в верхний регистр
//         if (capsLockEnabled && /^[a-z]$/.test(keyPressed)) {
//             keyPressed = keyPressed.toUpperCase();
//         }
        
//         
//         let currentValue = inputField.value;
//         inputField.value = currentValue + keyPressed;
//         inputField.focus();
//     });
// });

// 6
// let daysList = document.getElementById("daysList");
// let currentMonthElement = document.getElementById("currentMonth");
// let prevMonthLink = document.getElementById("prevMonth");
// let nextMonthLink = document.getElementById("nextMonth");

// let currentDate = new Date();
// let currentYear = currentDate.getFullYear();
// let currentMonth = currentDate.getMonth();

// function updateCalendar() {
//     let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
//     let firstDay = new Date(currentYear, currentMonth, 1).getDay();
    
//     daysList.innerHTML = "";
//     currentMonthElement.textContent = `${getMonthName(currentMonth)} ${currentYear}`;
    
//     for (let i = 1; i <= daysInMonth; i++) {
//         let dayElement = document.createElement("li");
//         dayElement.textContent = i;
        
//         if (i === currentDate.getDate() && currentMonth === currentDate.getMonth()) {
//             dayElement.classList.add("current-day");
//         }
        
//         daysList.appendChild(dayElement);
//     }
    
//     for (let i = 0; i < firstDay; i++) {
//         let emptyDay = document.createElement("li");
//         daysList.appendChild(emptyDay);
//     }
// }

// function getMonthName(month) {
//     let months = [
//         "Январь", "Февраль", "Март", "Апрель",
//         "Май", "Июнь", "Июль", "Август",
//         "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
//     ];
//     return months[month];
// }

// prevMonthLink.addEventListener("click", () => {
//     if (currentMonth === 0) {
//         currentYear--;
//         currentMonth = 11;
//     } else {
//         currentMonth--;
//     }
//     updateCalendar();
// });

// nextMonthLink.addEventListener("click", () => {
//     if (currentMonth === 11) {
//         currentYear++;
//         currentMonth = 0;
//     } else {
//         currentMonth++;
//     }
//     updateCalendar();
// });

// updateCalendar();

// 7
// let tagDescriptions = {
//     "a": "Тег &lt;a&gt; предназначен для создания ссылок.",
//     "div": "Тег &lt;div&gt; представляет собой блочный элемент, который используется для группировки других HTML-элементов и применяется для создания блочной модели документа.",
//     "p": "Тег &lt;p&gt; представляет собой абзац текста.",
//     "img": "Тег &lt;img&gt; используется для отображения изображений на веб-странице.",
// };

// let tagInput = document.getElementById("tagInput");
// let tagDescription = document.getElementById("tagDescription");

// tagInput.addEventListener("keydown", function(event) {
//     if (event.key === "Enter") {
//         let tagName = tagInput.value.toLowerCase();
//         let description = tagDescriptions[tagName];

//         if (description) {
//             tagDescription.innerHTML = description;
//         } else {
//             tagDescription.innerHTML = "Тег не найден.";
//         }

//         tagInput.value = "";
//     }
// });


// 8
// let yearInput = document.getElementById("yearInput");
// let eventsTableBody = document.querySelector("#eventsTable tbody");

// 
// let historicalEvents = [
//     { date: "2000-01-01", title: "Событие 1", description: "Описание события 1" },
//     { date: "2001-02-15", title: "Событие 2", description: "Описание события 2" },
//     { date: "2002-05-20", title: "Событие 3", description: "Описание события 3" },
//    
// ];

// yearInput.addEventListener("keydown", function(event) {
//     if (event.key === "Enter") {
//         let year = parseInt(yearInput.value);
//         if (!isNaN(year)) {
//             displayEvents(year);
//         }
//     }
// });

// function displayEvents(year) {
//     eventsTableBody.innerHTML = "";

//     let filteredEvents = historicalEvents.filter(event => {
//         return new Date(event.date).getFullYear() === year;
//     });

//     filteredEvents.forEach(event => {
//         let row = document.createElement("tr");
//         let dateCell = document.createElement("td");
//         let titleCell = document.createElement("td");
//         let descriptionCell = document.createElement("td");

//         dateCell.textContent = event.date;
//         titleCell.textContent = event.title;
//         descriptionCell.textContent = event.description;

//         row.appendChild(dateCell);
//         row.appendChild(titleCell);
//         row.appendChild(descriptionCell);

//         eventsTableBody.appendChild(row);
//     });
// }

// 9
// let birthdateInput = document.getElementById("birthdate");
// let radioButtons = document.querySelectorAll('input[name="day"]');
// let generateButton = document.getElementById("generateButton");
// let horoscopeDisplay = document.getElementById("horoscope");

// generateButton.addEventListener("click", generateHoroscope);

// function generateHoroscope() {
//     let birthdate = new Date(birthdateInput.value);
//     let selectedRadio = document.querySelector('input[name="day"]:checked');
//     let selectedDay = selectedRadio ? selectedRadio.value : "today";

//     if (isNaN(birthdate.getTime())) {
//         alert("Пожалуйста, введите корректную дату рождения.");
//         return;
//     }
//     let horoscopeText = getHoroscope(selectedDay, birthdate);
//     horoscopeDisplay.textContent = horoscopeText;
// }
// function getHoroscope(day, birthdate) {
//     return "Гороскоп на выбранный день для вашего знака Зодиака.";
// }


// 10
// let startButton = document.getElementById("startButton");
// let stopButton = document.getElementById("stopButton");
// let predictionElement = document.getElementById("prediction");

// let timer;
// let isPredictionFixed = false;

// startButton.addEventListener("click", () => {
//     startButton.disabled = true;
//     stopButton.classList.remove("hidden");
//     predictionElement.classList.add("hidden");
//     isPredictionFixed = false;

//     timer = setInterval(() => {
//         let randomNumber = Math.floor(Math.random() * 100) + 1;
//         predictionElement.textContent = `Предсказание: ${randomNumber}`;
//         predictionElement.classList.remove("green", "red");
//         predictionElement.classList.add(randomNumber % 2 === 0 ? "green" : "red");
//     }, 100);
// });

// stopButton.addEventListener("click", () => {
//     if (!isPredictionFixed) {
//         clearInterval(timer);
//         isPredictionFixed = true;
//         predictionElement.classList.remove("hidden");
//         stopButton.classList.add("hidden");
//     }
// });


// 11
// let countryInput = document.getElementById("countryInput");
// let suggestionsList = document.getElementById("suggestions");
// let countries = ['Belarus', 'Belgium', 'Bulgaria'];
// countryInput.addEventListener("input", () => {
//     let inputValue = countryInput.value.toLowerCase();
//     let filteredCountries = countries.filter(country => country.toLowerCase().startsWith(inputValue));
//     displaySuggestions(filteredCountries);
// });
// countryInput.addEventListener("focus", () => {
//     if (countryInput.value.trim() !== "") {
//         suggestionsList.style.display = "block";
//     }
// });
// countryInput.addEventListener("blur", () => {
//     setTimeout(() => {
//         suggestionsList.style.display = "none";
//     }, 200);
// });
// function displaySuggestions(filteredCountries) {
//     suggestionsList.innerHTML = "";
//     if (filteredCountries.length > 0) {
//         filteredCountries.forEach(country => {
//             let listItem = document.createElement("li");
//             listItem.textContent = country;
//             listItem.addEventListener("click", () => {
//                 countryInput.value = country;
//                 suggestionsList.style.display = "none";
//             });
//             suggestionsList.appendChild(listItem);
//         });
//         suggestionsList.style.display = "block";
//     } else {
//         suggestionsList.style.display = "none";
//     }
// }

// 12
// let toggleLinks = document.querySelectorAll(".toggle");
// toggleLinks.forEach(link => {
//     link.addEventListener("click", (e) => {
//         e.preventDefault();
//         let spoiler = link.parentElement.nextElementSibling;
//         if (spoiler.classList.contains("active")) {
//             spoiler.classList.remove("active");
//             link.textContent = "развернуть";
//         } else {
//             spoiler.classList.add("active");
//             link.textContent = "свернуть";
//         }
//     });
// });

// 13
// document.addEventListener("DOMContentLoaded", function() {
//     let menuLinks = document.querySelectorAll(".menu a");
//     let tabs = document.querySelectorAll(".tabs .tab");

//     menuLinks.forEach((link, index) => {
//         link.addEventListener("click", (e) => {
//             e.preventDefault();
//             menuLinks.forEach((menuLink) => {
//                 menuLink.classList.remove("active");
//             });
//             tabs.forEach((tab) => {
//                 tab.classList.remove("active");
//             });
//             link.classList.add("active");
//             tabs[index].classList.add("active");
//         });
//     });
// });


// 14
// document.addEventListener("DOMContentLoaded", function() {
//     let accordionLinks = document.querySelectorAll(".tab .link a");

//     accordionLinks.forEach((link) => {
//         link.addEventListener("click", (e) => {
//             e.preventDefault();
//             let tab = link.closest(".tab");
//             if (tab.classList.contains("active")) {
//                 tab.classList.remove("active");
//             } else {
//                 let activeTabs = document.querySelectorAll(".tab.active");
//                 activeTabs.forEach((activeTab) => {
//                     activeTab.classList.remove("active");
//                 });
//                 tab.classList.add("active");
//             }
//         });
//     });
// });


// игра в города
// document.addEventListener("DOMContentLoaded", function() {
//     let cityInput = document.getElementById("cityInput");
//     let submitBtn = document.getElementById("submitBtn");
//     let output = document.getElementById("output");
//     let usedCities = new Set();

//     let currentPlayer = 1;

//     function switchPlayer() {
//         currentPlayer = currentPlayer === 1 ? 2 : 1;
//     }

//     function isCityValid(city) {
//         // Проверка на уникальность города
//         if (usedCities.has(city)) {
//             return false;
//         }
//         // Проверка на соответствие правилам (начинается на последнюю букву предыдущего города)
//         if (usedCities.size > 0) {
//             let lastCity = [...usedCities][usedCities.size - 1];
//             let lastCityLastLetter = lastCity.slice(-1).toLowerCase();
//             let cityFirstLetter = city[0].toLowerCase();

//             if (lastCityLastLetter !== cityFirstLetter) {
//                 return false;
//             }
//         }

//         return true;
//     }

//     function addCity(city) {
//         usedCities.add(city);
//         output.innerHTML += `Игрок ${currentPlayer}: ${city}<br>`;
//     }

//     function resetGame() {
//         usedCities.clear();
//         output.innerHTML = "";
//         currentPlayer = 1;
//     }

//     submitBtn.addEventListener("click", () => {
//         let city = cityInput.value.trim();

//         if (city === "") {
//             return;
//         }

//         if (isCityValid(city)) {
//             addCity(city);
//             switchPlayer();
//             cityInput.value = "";
//         } else {
//             alert("Этот город нельзя использовать. Попробуйте другой.");
//         }
//     });

//     cityInput.addEventListener("keyup", (e) => {
//         if (e.key === "Enter") {
//             submitBtn.click();
//         }
//     });

//     // Обработка сброса игры
//     document.addEventListener("keydown", (e) => {
//         if (e.key === "Escape") {
//             resetGame();
//             alert("Игра сброшена. Начните заново.");
//         }
//     });
// });


// против робота
// document.addEventListener("DOMContentLoaded", function() {
//     let cityInput = document.getElementById("cityInput");
//     let submitBtn = document.getElementById("submitBtn");
//     let output = document.getElementById("output");
//     let cities = ['Москва', 'Санкт-Петербург', 'Киев', 'Минск', 'Нью-Йорк', 'Лондон']; // Пример массива городов
//     let usedCities = new Set();
//     let currentPlayer = 1;

//     function switchPlayer() {
//         currentPlayer = currentPlayer === 1 ? 2 : 1;
//     }

//     function isCityValid(city) {
//         if (usedCities.has(city) || !cities.includes(city)) {
//             return false;
//         }

//         if (usedCities.size > 0) {
//             let lastCity = [...usedCities][usedCities.size - 1];
//             let lastCityLastLetter = lastCity.slice(-1).toLowerCase();
//             let cityFirstLetter = city[0].toLowerCase();

//             if (lastCityLastLetter !== cityFirstLetter) {
//                 return false;
//             }
//         }

//         return true;
//     }

//     function addCity(city) {
//         usedCities.add(city);
//         output.innerHTML += `Игрок ${currentPlayer}: ${city}<br>`;
//     }

//     function resetGame() {
//         usedCities.clear();
//         output.innerHTML = "";
//         currentPlayer = 1;
//     }

//     function robotTurn() {
//         for (let city of cities) {
//             if (!usedCities.has(city)) {
//                 addCity(city);
//                 switchPlayer();
//                 return;
//             }
//         }
//     }

//     submitBtn.addEventListener("click", () => {
//         let city = cityInput.value.trim();

//         if (city === "") {
//             return;
//         }

//         if (isCityValid(city)) {
//             addCity(city);
//             switchPlayer();
//             cityInput.value = "";
//             robotTurn();
//         } else {
//             alert("Этот город нельзя использовать. Попробуйте другой.");
//         }
//     });

//     cityInput.addEventListener("keyup", (e) => {
//         if (e.key === "Enter") {
//             submitBtn.click();
//         }
//     });

//     document.addEventListener("keydown", (e) => {
//         if (e.key === "Escape") {
//             resetGame();
//             alert("Игра сброшена. Начните заново.");
//         }
//     });
// });


// чек лист 18-23
// let input = document.querySelector('#input');
// let list = document.querySelector('#list');

// input.addEventListener('keypress', function(event) {
// 	if (event.key == 'Enter') {
// 		let li = document.createElement('li');
		
// 		let task = document.createElement('span');
// 		task.classList.add('task');
// 		task.textContent = this.value;
// 		task.addEventListener('dblclick', function() {
// 			let text = this.textContent;
// 			this.textContent = '';
			
// 			let edit = document.createElement('input');
// 			edit.value = text;
// 			this.appendChild(edit);
			
// 			let self = this;
// 			edit.addEventListener('keypress', function(event) {
// 				if (event.key == 'Enter') {
// 					self.textContent = this.value;
// 				}
// 			});
// 		});
// 		li.appendChild(task);
		
// 		let remove = document.createElement('span');
// 		remove.textContent = 'удалить';
// 		remove.classList.add('remove');
// 		remove.addEventListener('click', function() {
// 			this.parentElement.remove();
// 		});
// 		li.appendChild(remove);
		
// 		let mark = document.createElement('span');
// 		mark.textContent = 'сделано';
// 		mark.classList.add('mark');
// 		mark.addEventListener('click', function() {
// 			this.parentElement.classList.add('done');
// 		});
// 		li.appendChild(mark);
		
// 		list.appendChild(li);
		
// 		this.value = '';
// 	}
// });


// калькулятор продуктов 24-29
// document.addEventListener("DOMContentLoaded", function() {
//     let productForm = document.getElementById("productForm");
//     let productTable = document.getElementById("productTable");
//     let productName = document.getElementById("productName");
//     let productPrice = document.getElementById("productPrice");
//     let productQuantity = document.getElementById("productQuantity");
//     let totalAmount = document.getElementById("totalAmount");
//     let tbody = productTable.querySelector("tbody");

//     productForm.addEventListener("submit", function(e) {
//         e.preventDefault();
//         let name = productName.value.trim();
//         let price = parseFloat(productPrice.value);
//         let quantity = parseInt(productQuantity.value);

//         if (name && !isNaN(price) && !isNaN(quantity)) {
//             addProduct(name, price, quantity);
//             productName.value = "";
//             productPrice.value = "";
//             productQuantity.value = "";
//             productName.focus();
//         }
//     });

//     function addProduct(name, price, quantity) {
//         let row = document.createElement("tr");
//         let nameCell = document.createElement("td");
//         let priceCell = document.createElement("td");
//         let quantityCell = document.createElement("td");
//         let totalCell = document.createElement("td");
//         let deleteCell = document.createElement("td");

//         nameCell.textContent = name;
//         priceCell.textContent = price.toFixed(2);
//         quantityCell.textContent = quantity;
//         totalCell.textContent = (price * quantity).toFixed(2);
//         let deleteButton = document.createElement("button");
//         deleteButton.textContent = "Удалить";
//         deleteButton.addEventListener("click", () => {
//             tbody.removeChild(row);
//             updateTotal();
//         });
//         deleteCell.appendChild(deleteButton);

//         row.appendChild(nameCell);
//         row.appendChild(priceCell);
//         row.appendChild(quantityCell);
//         row.appendChild(totalCell);
//         row.appendChild(deleteCell);

//         tbody.appendChild(row);

//         updateTotal();
//     }

//     function updateTotal() {
//         let total = 0;
//         let rows = tbody.querySelectorAll("tr");

//         rows.forEach(row => {
//             let totalCell = row.querySelector("td:nth-child(4)");
//             total += parseFloat(totalCell.textContent);
//         });

//         totalAmount.textContent = total.toFixed(2);
//     }

//     productTable.addEventListener("dblclick", function(e) {
//         let target = e.target;
//         if (target.tagName === "TD") {
//             let oldValue = target.textContent;
//             target.innerHTML = `<input type="text" value="${oldValue}">`;
//             let input = target.querySelector("input");
//             input.focus();

//             input.addEventListener("blur", function() {
//                 let newValue = input.value;
//                 target.textContent = newValue;
//                 updateTotal();
//             });

//             input.addEventListener("keyup", function(event) {
//                 if (event.key === "Enter") {
//                     input.blur();
//                 }
//             });
//         }
//     });
// });

// 30-36
// let checkAnswersButton = document.getElementById("checkAnswers");
// let inputs = document.querySelectorAll("input[data-right]");

// checkAnswersButton.addEventListener("click", function () {
//     inputs.forEach(input => {
//         let userAnswer = input.value.trim();
//         let correctAnswer = input.dataset.right;

//         if (userAnswer === correctAnswer) {
//             input.classList.remove("wrong");
//             input.classList.add("right");
//         } else {
//             input.classList.remove("right");
//             input.classList.add("wrong");
//         }
//     });
// });

// inputs.forEach(input => {
//     input.addEventListener("keydown", function (event) {
//         if (event.key === "Enter") {
//             event.preventDefault();
//             checkAnswersButton.click();
//         }
//     });
// });


// 34
// let checkAnswersButton = document.getElementById("checkAnswers");

// checkAnswersButton.addEventListener("click", function () {
//     let questions = document.querySelectorAll("#test > div");
//     questions.forEach(question => {
//         let radioInputs = question.querySelectorAll("input[type='radio']");
//         radioInputs.forEach(input => {
//             if (input.checked) {
//                 if (input.getAttribute("data-right") !== null) {
//                     input.parentNode.classList.remove("wrong");
//                     input.parentNode.classList.add("right");
//                 } else {
//                     input.parentNode.classList.remove("right");
//                     input.parentNode.classList.add("wrong");
//                 }
//             }
//         });
//     });
// });


// 36
// let questions = [
// 	{
// 		text: 'вопрос 1?',
// 		right: 0,
// 		variants: [
// 			'вариант 1',
// 			'вариант 2',
// 			'вариант 3'
// 		]
// 	},
// 	{
// 		text: 'вопрос 2?',
// 		right: 1,
// 		variants: [
// 			'вариант 1',
// 			'вариант 2',
// 			'вариант 3'
// 		]
// 	},
// 	{
// 		text: 'вопрос 3?',
// 		right: 2,
// 		variants: [
// 			'вариант 1',
// 			'вариант 2',
// 			'вариант 3'
// 		]
// 	},
// ];

// let testContainer = document.getElementById("test");
// let button = document.getElementById("button");

// questions.forEach((question, index) => {
//     let questionDiv = document.createElement("div");
//     let questionText = document.createElement("p");
//     questionText.textContent = question.text;
//     questionDiv.appendChild(questionText);

//     question.variants.forEach((variant, variantIndex) => {
//         let label = document.createElement("label");
//         let input = document.createElement("input");
//         input.type = "radio";
//         input.name = "question" + index;
//         input.value = variantIndex;
//         label.appendChild(input);
//         label.appendChild(document.createTextNode(variant));
//         questionDiv.appendChild(label);
//     });

//     testContainer.appendChild(questionDiv);
// });

// button.addEventListener("click", () => {
//     let score = 0;
//     questions.forEach((question, index) => {
//         let selectedVariant = document.querySelector('input[name="question' + index + '"]:checked');
//         if (selectedVariant && parseInt(selectedVariant.value) === question.right) {
//             score++;
//         }
//     });

//     alert("Правильных ответов: " + score);
// });


// 41-46
// let cells = document.querySelectorAll('#field td');
// start(cells);


// function start(cells) {
//     let i = 0;
//     let maxClicks = cells.length;

//     for (let cell of cells) {
//         cell.addEventListener('click', function() {
//             if (!this.textContent && i < maxClicks) {
//                 this.textContent = ['X', 'O'][i % 2];
//                 i++;
//             }
//         });
//     }
// }

// function start(cells) {
// 	let i = 0;
	
// 	for (let cell of cells) {
// 		cell.addEventListener('click', function step()
// 			 { 
// 			this.textContent = ['X', 'O'][i 
// 				% 2]; 
// 			this.removeEventListener('click', step);
			
// 			if (isVictory(cells)) {
// 				alert('имя победителя');
// 			}
			
// 			i++;
// 		});
// 	}
// }
// function isVictory(cells) {
// 	let combs = [
// 		[0, 1, 2],
// 		[3, 4, 5],
// 		[6, 7, 8],
// 		[0, 3, 6],
// 		[1, 4, 7],
// 		[2, 5, 8],
// 		[0, 4, 8],
// 		[2, 4, 6],
// 	];

// 	for (let comb of combs) {
// 		if (
// 			cells[comb[0]].textContent == cells[comb[1]].textContent &&
// 			cells[comb[1]].textContent == cells[comb[2]].textContent &&
// 			cells[comb[0]].textContent != ''
// 		) {
// 			return true;
// 		}
// 	}
	
// 	return false;
// }
// function start(cells) {
// 	let i = 0;
	
// 	for (let cell of cells) {
// 		cell.addEventListener('click', function step() {
// 			this.textContent = ['X', 'O'][i % 2];
// 			this.removeEventListener('click', step);
			
// 			if (isVictory(cells)) {
// 				alert(this.textContent);
// 			} else if (i == 8) {
// 				alert('ничья');
// 			}
			
// 			i++;
// 		});
// 	}
// }


// 47-51
// let rows = 3;
// let cols = 3;

// let field = document.getElementById("field");

// for (let i = 0; i < rows; i++) {
//     let row = document.createElement("tr");
//     for (let j = 0; j < cols; j++) {
//         let cell = document.createElement("td");
//         row.appendChild(cell);
//     }
//     field.appendChild(row);
// }

// function getRandomElement(arr) {
//     let randomIndex = Math.floor(Math.random() * arr.length);
//     return arr[randomIndex];
// }

// let colors = ['red', 'green', 'blue'];

// let cells = document.querySelectorAll("td");

// cells.forEach(cell => {
//     let randomColor = getRandomElement(colors);
//     cell.classList.add(randomColor);
// });

// function getNextElement(arr, currentElement) {
//     let currentIndex = arr.indexOf(currentElement);
//     let nextIndex = (currentIndex + 1) % arr.length;
//     return arr[nextIndex];
// }

// let currentColor = "";
// let clickCount = 0;
// let clickCountElement = document.getElementById("clickCount");

// function checkForWin() {
//     let firstCellClass = cells[0].classList[0]; 

//     for (let i = 1; i < cells.length; i++) {
//         let cellClass = cells[i].classList[0]; 
//         if (cellClass !== firstCellClass) {
//             return; 
//         }
//     }

//     alert("Поздравляем! Вы выиграли!");
// }

// cells.forEach(cell => {
//     cell.addEventListener("click", function() {
//         clickCount++;
//         clickCountElement.textContent = `Количество кликов: ${clickCount}`;

//         if (currentColor) {
//             cell.classList.remove(currentColor);
//         }
//         currentColor = getNextElement(colors, currentColor);
//         cell.classList.add(currentColor);

//         checkForWin(); 
//     });
// });


// 52-62
// let calendar = document.querySelector('#calendar');
// let body = calendar.querySelector('.body');
// let prev = calendar.querySelector('.prev');
// let next = calendar.querySelector('.next');

// let date  = new Date();
// let year  = date.getFullYear();
// let month = date.getMonth();

// draw(body, year, month);

// function draw(body, year, month) {
// 	let arr = range(getLastDay(year, month));
	
// 	let firstWeekDay = getFirstWeekDay(year, month);
// 	let lastWeekDay  = getLastWeekDay(year, month);
	
// 	let nums = chunk(normalize(arr, firstWeekDay, 6 - lastWeekDay), 7);
// 	createTable(body, nums)
// }

// function createTable(parent, arr) {
// 	parent.textContent = '';
// 	let cells = [];
	
// 	for (let sub of arr) {
// 		let tr = document.createElement('tr');
		
// 		for (let num of sub) {
// 			let td = document.createElement('td');
// 			td.textContent = num;
// 			tr.appendChild(td);
			
// 			cells.push(td);
// 		}
		
// 		parent.appendChild(tr);
// 	}
	
// 	return cells;
// }

// function normalize(arr, left, right) {
// 	for (let i = 0; i < left; i++) {
// 		arr.unshift('');
// 	}
// 	for (var i = 0; i < right; i++) {
// 		arr.push('');
// 	}
	
// 	return arr;
// }

// function getFirstWeekDay(year, month) {
// 	let date = new Date(year, month, 1);
// 	let num  = date.getDay();
	
// 	if (num == 0) {
// 		return 6;
// 	} else {
// 		return num - 1;
// 	}
// }

// function getLastWeekDay(year, month) {
// 	let date = new Date(year, month + 1, 0);
// 	let num  = date.getDay();
	
// 	if (num == 0) {
// 		return 6;
// 	} else {
// 		return num - 1;
// 	}
// }

// function getLastDay(year, month) {
// 	let date = new Date(year, month + 1, 0);
// 	return date.getDate();
// }

// function range(count) {
// 	let arr = [];
	
// 	for (let i = 1; i <= count; i++) {
// 		arr.push(i);
// 	}
	
// 	return arr;
// }

// function chunk(arr, n) {
// 	let result = [];
// 	let count = Math.ceil(arr.length / n);
	
// 	for (let i = 0; i < count; i++) {
// 		let elems = arr.splice(0, n);
// 		result.push(elems);
// 	}
	
// 	return result;
// }

// next.addEventListener('click', function() {
// 	draw(body, getNextYear(year, month), getNextMonth(month));
// });
// prev.addEventListener('click', function() {
// 	draw(body, getPrevYear(year, month), getPrevMonth(month));
// });
// function getNextYear(currentYear, currentMonth) {
//     if (currentMonth === 11) {
//         return currentYear + 1;
//     } else {
//         return currentYear;
//     }
// }

// function getNextMonth(currentMonth) {
//     if (currentMonth === 11) {
//         return 0;
//     } else {
//         return currentMonth + 1;
//     }
// }
// function getPrevYear(currentYear, currentMonth) {
//     if (currentMonth === 0) {
//         return currentYear - 1;
//     } else {
//         return currentYear;
//     }
// }

// function getPrevMonth(currentMonth) {
//     if (currentMonth === 0) {
//         return 11;
//     } else {
//         return currentMonth - 1;
//     }
// }

