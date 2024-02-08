let kitchenProducts = [
	{
		names: 'grater',
		price: 10
	},
	{
		names: 'pastry-bag',
		price: 25
	},
	{
		names: 'scale',
		price: 5
	},
	{
		names: 'whisk',
		price: 15
	}
];

let devicesProducts = [
	{
		names: 'desktop',
		price: [100,1000]
	},
	{
		names: 'laptop',
		price: [50,1500]
	},
	{
		names: 'smartphone',
		price: [80,2000]
	},
	{
		names: 'tablet',
		price: [20,1300]
	}
];

let cosmeticsProducts = [
	{
		names: 'blush',
		price: 100
	},
	{
		names: 'eyeshadow',
		price: 50
	},
	{
		names: 'lipstick',
		price: 80
	},
	{
		names: 'nail-polish',
		price: 200
	},
	{
		names: 'perfume',
		price: 300,
	}
];

let Kitchen = {category: 'kitchen'};
let Cosmetics = {category: 'cosmetics'};
let Devices = {category: 'devices'};

cosmeticsProducts.map((product) => {
	product.__proto__ = Cosmetics
});
kitchenProducts.map((product) => {
	product.__proto__ = Kitchen
});
devicesProducts.map((product) => {
	product.__proto__ = Devices
});

[Kitchen, Devices, Cosmetics].map((categoryObject) => {
	let category = document.createElement(`div`);
	let titleCategoryNameProduct = document.createElement(`div`)
	let lineHR = document.createElement(`div`)
    category.className = categoryObject.category 
	lineHR.className = `hr`
	lineHR.innerHTML = `<hr>`
    document.body.appendChild(category);
	category.appendChild(titleCategoryNameProduct)
	titleCategoryNameProduct.className = categoryObject.category
	titleCategoryNameProduct.innerHTML =`Category: ${Object.values(categoryObject)}`
	category.appendChild(lineHR)
    
});

[kitchenProducts, cosmeticsProducts, devicesProducts].map((categoryProducts) => {
		categoryProducts.map((categoryProduct) => {
		let categoryNameProduct= document.createElement('p')
		let categoryBlock = document.createElement(`div`)
		let img = document.createElement(`img`)
		let productName = document.createElement(`p`)
		let productPrice = document.createElement(`p`)
		img.src = `/images/${categoryProduct.category}/${categoryProduct.names}.svg`
		img.className = `img`
		productName.className = `span`
		productPrice.className = `span`
		categoryBlock.className = `div-block`
		productName.innerHTML = `Name: ${categoryProduct.names}`
		if (Array.isArray(categoryProduct.price)){
			productPrice.innerHTML = `Price: $${categoryProduct.price.join('-')}`
		} else{
			productPrice.innerHTML = `Price: $${categoryProduct.price}`
		}
		categoryBlock.appendChild(img)
		categoryBlock.appendChild(productName)
		categoryBlock.appendChild(productPrice)
		
		document.getElementsByClassName(categoryProduct.category)[0].appendChild(categoryBlock)	
	});
});
