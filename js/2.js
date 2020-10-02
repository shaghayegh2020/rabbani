let products = [
	{
		title: 'یاماها',
		price: '$51,000,000',
		src: '../Pictures/motor4.jpg',
	},
	{
		title: 'پورشه',
		price: '$22,000,000',
		src: '../Pictures/car7.jpg',
	},
	{
		title: 'اسکیت1',
		price: '$14,000,000',
		src: '../Pictures/sky3.jpg',
	},
	{
		title: 'هوندا',
		price: '$51,000,000',
		src: '../Pictures/motor3.jpg',
	},
	{
		title: 'لامپورگینی',
		price: '$22,000,000',
		src: '../Pictures/car8.jpg',
	},
	{
		title: 'اسکیت 2',
		price: '$14,000,000',
		src: '../Pictures/sky2.jpg',
	},
	{
		title: 'یاماها',
		price: '$53,000,000',
		src: '../Pictures/motor2.jpg',
	},
	{
		title: 'پورشه',
		price: '$30,000,000',
		src: '../Pictures/sky7.jpg',
	},
	{
		title: 'اسکیت3',
		price: '$13,000,000',
		src: '../Pictures/sky5.jpg',
	},
	{
		title: 'سوزوکی',
		price: '$51,000,000',
		src: '../Pictures/motor5.jpg',
	},
	{
		title: 'لامپورگینی',
		price: '$22,000,000',
		src: '../Pictures/car9.jpg',
	},
	{
		title: 'کلاه کاسکت کراس',
		price: '$14,000,000',
		src: '../Pictures/hat7.jpg',
	},
	{
		title: 'پورشه',
		price: '$30,000,000',
		src: '../Pictures/car2.jpg',
	},
	{
		title: 'اسکیت3',
		price: '$13,000,000',
		src: '../Pictures/sky8.jpg',
	},
	{
		title: 'کلاه ایمنی دوچرخه',
		price: '$51,000,000',
		src: '../Pictures/bike10.jpg',
	},
	{
		title: 'روکش شماره1',
		price: '$22,000,000',
		src: '../Pictures/car10.jpg',
	},
	{
		title: 'اسکیت 4',
		price: '$14,000,000',
		src: '../Pictures/sky6.jpg',
	},
	{
		title: 'کلاه کاسکت رادینسون',
		price: '$1,000,000',
		src: '../Pictures/hat5.jpg',
	},
	{
		title: 'لامپورگینی',
		price: '$22,000,000',
		src: '../Pictures/bike5.jpg',
	},
	{
		title: 'لامپورگینی000',
		price: '$22,000,000',
		src: '../Pictures/car4.jpg',
	},
	{
		title: 'کلاه کاسکت کراس',
		price: '$14,000,000',
		src: '../Pictures/hat3.jpg',
	},
	{
		title: 'پورشه',
		price: '$30,000,000',
		src: '../Pictures/car6.jpg',
	},
	{
		title: 'اسکیت3',
		price: '$13,000,000',
		src: '../Pictures/sky5.jpg',
	},
	{
		title: 'کلاه ایمنی دوچرخه',
		price: '$51,000,000',
		src: '../Pictures/bike11.jpg',
	},
	{
		title: 'اسکیت 4',
		price: '$22,000,000',
		src: '../Pictures/sky9.jpg',
	},
	{
		title: 'کلاه کاسکت آدرین',
		price: '$14,000,000',
		src: '../Pictures/hat4.jpg',
	},
	{
		title: 'روکش ماشین2',
		price: '$1,000,000',
		src: '../Pictures/car15.jpg',
	},
	{
		title: 'لامپورگینی',
		price: '$22,000,000',
		src: '../Pictures/car3.jpg',
	},
	{
	title: 'موتور سوزوکی',
	price: '$22,000,000',
	src: '../Pictures/motor6.jpg',
	},
	{
	title: 'روکش ماشین3',
		price: '$14,000,000',
	src: '../Pictures/car14.jpg',
	},
	{
	title: 'دوچرخه2',
		price: '$30,000,000',
	src: '../Pictures/bike6.jpg',
	},
	{
	title: 'لوازم ایمنی',
		price: '$13,000,000',
	src: '../Pictures/bike8.jpg',
	},
	{
	title: 'کلاه کاسکت نولان',
		price: '$51,000,000',
	src: '../Pictures/hat8.jpg',
	},
	{
	title: 'روکش شماره4',
		price: '$22,000,000',
	src: '../Pictures/car11.jpg',
	},
	{
	title: 'موتور آپاچی',
		price: '$14,000,000',
	src: '../Pictures/motor7.jpg',
	},
	{
	title: 'لوازم ایمنی',
		price: '$1,000,000',
	src: '../Pictures/sky11.jpg',
	}
];

const div = document.getElementById('list');
const input = document.getElementById('search');
const button = document.getElementById('btn');
let result = [];

for (const i in products) {
	let div = document.createElement('div');
	let h2tag = document.createElement('h2');
	let ptag = document.createElement('p');
	let img = document.createElement('img');
	h2tag.setAttribute('class', 'h2tag');
	ptag.setAttribute('class', 'ptag');
	img.setAttribute('class', 'img');
	h2tag.innerText = products[i].title;
	ptag.innerText = products[i].price;
	img.setAttribute('src', products[i].src);
	div.appendChild(img);
	div.appendChild(h2tag);
	div.appendChild(ptag);
	list.appendChild(div);
}

const search = (arr, word) => {
	for (const i in arr) {
		if (arr[i].title.includes(word)) {
			result.push(arr[i]);
		}
	}
	return result;
};
button.addEventListener('click', function () {
	result = [];
	div.innerHTML = '';
	search (products, input.value);
	for (const i in result){
		let div = document.createElement('div');
		let h2tag = document.createElement('h2');
		let ptag = document.createElement('p');
		let img = document.createElement('img');

		h2tag.setAttribute('class', 'h2tag');
		ptag.setAttribute('class', 'ptag');
		img.setAttribute('class', 'img');

		h2tag.innerText = result[i].title;
		ptag.innerText = result[i].price;
		img.setAttribute('src', result[i].src);

		div.appendChild(img);
		div.appendChild(ptag);
		div.appendChild(h2tag);
		list.appendChild(div);
	}
});
