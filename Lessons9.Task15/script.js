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

const newkitchenProducts =  kitchenProducts.map(kitchenProduct => {
    const product = Object.create(Kitchen);
    Object.keys(kitchenProduct).forEach(key => {
      product[key]=kitchenProduct[key]
    });
    if(product.names === `grater`) {
        product.color = `white`;
        product.image = `/images/kitchen/grater.svg`;
    }
    if(product.names === `pastry-bag`) {
        product.color = `black`;
        product.image = `/images/kitchen/pastry-bag.svg`;
    }
    if(product.names === `scale`) {
        product.color = `pink`;
        product.image = `/images/kitchen/scale.svg`;
    }
	if(product.names === `whisk`) {
        product.color = `white`;
        product.image = `/images/kitchen/whisk.svg`;
    }
    return product;
    
})

const newdevicesProducts =  devicesProducts.map(devicesProduct => {
    const product = Object.create(Devices);
    Object.keys(devicesProduct).forEach(key => {
      product[key]=devicesProduct[key]
    });
    if(product.names === `desktop`) {
        product.color = `white`;
        product.image = `/images/devices/desktop.svg`;
    }
    if(product.names === `laptop`) {
        product.color = `black`;
        product.image = `/images/devices/laptop.svg`;
    }
    if(product.names === `smartphone`) {
        product.color = `blue`;
        product.image = `/images/devices/smartphone.svg`;
    }
    if(product.names === `tablet`) {
        product.color = `pink`;
        product.image = `/images/devices/tablet.svg`;
    }
    return product;
    
})

const newcosmeticsProducts =  cosmeticsProducts.map(cosmeticsProduct => {
    const product = Object.create(Cosmetics);
    Object.keys(cosmeticsProduct).forEach(key => {
      product[key]=cosmeticsProduct[key]
    });
    if(product.names === `blush`) {
        product.color = `white`;
        product.image = `/images/cosmetics/blush.svg`;
    }
    if(product.names === `eyeshadow`) {
        product.color = `black`;
        product.image = `/images/cosmetics/eyeshadow.svg`;
    }
    if(product.names === `lipstick`) {
        product.color = `blue`;
        product.image = `/images/cosmetics/lipstick.svg`;
    }
    if(product.names === `nail-polish`) {
        product.color = `pink`;
        product.image = `/images/cosmetics/nail-polish.svg`;
    }
    if(product.names === `perfume`) {
        product.color = `pink`;
        product.image = `/images/cosmetics/perfume.svg`;
    }
    return product;
    
})

const categoryKitchen = document.createElement(`div`)
const categoryDevices = document.createElement(`div`)
const categoryCosmetics = document.createElement(`div`)



categoryKitchen.className = `kitchen`
document.body.appendChild(categoryKitchen)

categoryDevices.className = `devices`
document.body.appendChild(categoryDevices)

categoryCosmetics.className = `cosmetics`
document.body.appendChild(categoryCosmetics)


const pKitchen = document.createElement(`p`)
pKitchen.className = `p`
pKitchen.innerHTML = `Category: kitchen`
categoryKitchen.appendChild(pKitchen)

const pDevices = document.createElement(`p`)
pDevices.className = `p`
pDevices.innerHTML = `Category: devices`
categoryDevices.appendChild(pDevices)

const pCosmetics = document.createElement(`p`)
pCosmetics.className = `p`
pCosmetics.innerHTML = `Category: cosmetics`
categoryCosmetics.appendChild(pCosmetics)


newkitchenProducts.forEach((product) => {
	if(product.names === `grater`) {
		const categoryNameProduct= document.createElement('p')
		const categoryBlock = document.createElement(`div`)
		const img = document.createElement(`img`)
		const productName = document.createElement(`p`)
		const productPrice = document.createElement(`p`)
		img.src = `${product.image}`
		img.className = `img`
		productName.className = `span`
		productPrice.className = `span`
		categoryBlock.className = `div-block`
		productName.innerHTML = `Name: ${product.names}`
		productPrice.innerHTML = `Price: $${product.price}`
		categoryKitchen.appendChild(categoryBlock)
		categoryBlock.appendChild(img)
		categoryBlock.appendChild(productName)
		categoryBlock.appendChild(productPrice)
		// console.log(key.image);
	}
	if(product.names === `pastry-bag`) {
		const categoryNameProduct= document.createElement('p')
		const categoryBlock = document.createElement(`div`)
		const img = document.createElement(`img`)
		const productName = document.createElement(`p`)
		const productPrice = document.createElement(`p`)
		img.src = `${product.image}`
		img.className = `img`
		productName.className = `span`
		productPrice.className = `span`
		categoryBlock.className = `div-block`
		productName.innerHTML = `Name: ${product.names}`
		productPrice.innerHTML = `Price: $${product.price}`
		categoryKitchen.appendChild(categoryBlock)
		categoryBlock.appendChild(img)
		categoryBlock.appendChild(productName)
		categoryBlock.appendChild(productPrice)
		// console.log(key.image);
	}
	if(product.names === `scale`) {
		const categoryNameProduct= document.createElement('p')
		const categoryBlock = document.createElement(`div`)
		const img = document.createElement(`img`)
		const productName = document.createElement(`p`)
		const productPrice = document.createElement(`p`)
		img.src = `${product.image}`
		img.className = `img`
		productName.className = `span`
		productPrice.className = `span`
		categoryBlock.className = `div-block`
		productName.innerHTML = `Name: ${product.names}`
		productPrice.innerHTML = `Price: $${product.price}`
		categoryKitchen.appendChild(categoryBlock)
		categoryBlock.appendChild(img)
		categoryBlock.appendChild(productName)
		categoryBlock.appendChild(productPrice)
		// console.log(key.image);
	}
	if(product.names === `whisk`) {
		const categoryNameProduct= document.createElement('p')
		const categoryBlock = document.createElement(`div`)
		const img = document.createElement(`img`)
		const productName = document.createElement(`p`)
		const productPrice = document.createElement(`p`)
		img.src = `${product.image}`
		img.className = `img`
		productName.className = `span`
		productPrice.className = `span`
		categoryBlock.className = `div-block`
		productName.innerHTML = `Name: ${product.names}`
		productPrice.innerHTML = `Price: $${product.price}`
		categoryKitchen.appendChild(categoryBlock)
		categoryBlock.appendChild(img)
		categoryBlock.appendChild(productName)
		categoryBlock.appendChild(productPrice)
	
		//console.log(productName);
	}
	
})


newdevicesProducts.forEach((product) => {
	if(product.names === `desktop`) {
		const categoryNameProduct= document.createElement('p')
		const categoryBlock = document.createElement(`div`)
		const img = document.createElement(`img`)
		const productName = document.createElement(`p`)
		const productPrice = document.createElement(`p`)
		img.src = `${product.image}`
		img.className = `img`
		productName.className = `span`
		productPrice.className = `span`
		categoryBlock.className = `div-block`
		productName.innerHTML = `Name: ${product.names}`
		productPrice.innerHTML = `Price: $${product.price.join('-')}`
		categoryDevices.appendChild(categoryBlock)
		categoryBlock.appendChild(img)
		categoryBlock.appendChild(productName)
		categoryBlock.appendChild(productPrice)
		//console.log(product.names);
	}
	if(product.names === `laptop`) {
		const categoryNameProduct= document.createElement('p')
		const categoryBlock = document.createElement(`div`)
		const img = document.createElement(`img`)
		const productName = document.createElement(`p`)
		const productPrice = document.createElement(`p`)
		img.src = `${product.image}`
		img.className = `img`
		productName.className = `span`
		productPrice.className = `span`
		categoryBlock.className = `div-block`
		productName.innerHTML = `Name: ${product.names}`
		productPrice.innerHTML = `Price: $${product.price.join('-')}`
		categoryDevices.appendChild(categoryBlock)
		categoryBlock.appendChild(img)
		categoryBlock.appendChild(productName)
		categoryBlock.appendChild(productPrice)
		// console.log(key.image);
	}
	if(product.names === `smartphone`) {
		const categoryNameProduct= document.createElement('p')
		const categoryBlock = document.createElement(`div`)
		const img = document.createElement(`img`)
		const productName = document.createElement(`p`)
		const productPrice = document.createElement(`p`)
		img.src = `${product.image}`
		img.className = `img`
		productName.className = `span`
		productPrice.className = `span`
		categoryBlock.className = `div-block`
		productName.innerHTML = `Name: ${product.names}`
		productPrice.innerHTML = `Price: $${product.price.join('-')}`
		categoryDevices.appendChild(categoryBlock)
		categoryBlock.appendChild(img)
		categoryBlock.appendChild(productName)
		categoryBlock.appendChild(productPrice)
		// console.log(key.image);
	}
	if(product.names === `tablet`) {
		const categoryNameProduct= document.createElement('p')
		const categoryBlock = document.createElement(`div`)
		const img = document.createElement(`img`)
		const productRep = product.price
		console.log(productRep)
		const productName = document.createElement(`p`)
		const productPrice = document.createElement(`p`)
		img.src = `${product.image}`
		img.className = `img`
		productName.className = `span`
		productPrice.className = `span`
		categoryBlock.className = `div-block`
		productName.innerHTML = `Name: ${product.names}`
		productPrice.innerHTML = `Price: $${product.price.join('-')}`
		categoryDevices.appendChild(categoryBlock)
		categoryBlock.appendChild(img)
		categoryBlock.appendChild(productName)
		categoryBlock.appendChild(productPrice)
	
		//console.log(productName);
	}
	
})


newcosmeticsProducts.forEach((product) => {
	if(product.names === `blush`) {
		const categoryNameProduct= document.createElement('p')
		const categoryBlock = document.createElement(`div`)
		const img = document.createElement(`img`)
		const productName = document.createElement(`p`)
		const productPrice = document.createElement(`p`)
		img.src = `${product.image}`
		img.className = `img`
		productName.className = `span`
		productPrice.className = `span`
		categoryBlock.className = `div-block`
		productName.innerHTML = `Name: ${product.names}`
		productPrice.innerHTML = `Price: $${product.price}`
		categoryCosmetics.appendChild(categoryBlock)
		categoryBlock.appendChild(img)
		categoryBlock.appendChild(productName)
		categoryBlock.appendChild(productPrice)
		// console.log(key.image);
	}
	if(product.names === `eyeshadow`) {
		const categoryNameProduct= document.createElement('p')
		const categoryBlock = document.createElement(`div`)
		const img = document.createElement(`img`)
		const productName = document.createElement(`p`)
		const productPrice = document.createElement(`p`)
		img.src = `${product.image}`
		img.className = `img`
		productName.className = `span`
		productPrice.className = `span`
		categoryBlock.className = `div-block`
		productName.innerHTML = `Name: ${product.names}`
		productPrice.innerHTML = `Price: $${product.price}`
		categoryCosmetics.appendChild(categoryBlock)
		categoryBlock.appendChild(img)
		categoryBlock.appendChild(productName)
		categoryBlock.appendChild(productPrice)
		// console.log(key.image);
	}
	if(product.names === `lipstick`) {
		const categoryNameProduct= document.createElement('p')
		const categoryBlock = document.createElement(`div`)
		const img = document.createElement(`img`)
		const productName = document.createElement(`p`)
		const productPrice = document.createElement(`p`)
		img.src = `${product.image}`
		img.className = `img`
		productName.className = `span`
		productPrice.className = `span`
		categoryBlock.className = `div-block`
		productName.innerHTML = `Name: ${product.names}`
		productPrice.innerHTML = `Price: $${product.price}`
		categoryCosmetics.appendChild(categoryBlock)
		categoryBlock.appendChild(img)
		categoryBlock.appendChild(productName)
		categoryBlock.appendChild(productPrice)
		// console.log(key.image);
	}
	if(product.names === `nail-polish`) {
		const categoryNameProduct= document.createElement('p')
		const categoryBlock = document.createElement(`div`)
		const img = document.createElement(`img`)
		const productName = document.createElement(`p`)
		const productPrice = document.createElement(`p`)
		img.src = `${product.image}`
		img.className = `img`
		productName.className = `span`
		productPrice.className = `span`
		categoryBlock.className = `div-block`
		productName.innerHTML = `Name: ${product.names}`
		productPrice.innerHTML = `Price: $${product.price}`
		categoryCosmetics.appendChild(categoryBlock)
		categoryBlock.appendChild(img)
		categoryBlock.appendChild(productName)
		categoryBlock.appendChild(productPrice)
	}
	if(product.names === `perfume`) {
		const categoryNameProduct= document.createElement('p')
		const categoryBlock = document.createElement(`div`)
		const img = document.createElement(`img`)
		const productName = document.createElement(`p`)
		const productPrice = document.createElement(`p`)
		img.src = `${product.image}`
		img.className = `img`
		productName.className = `span`
		productPrice.className = `span`
		categoryBlock.className = `div-block`
		productName.innerHTML = `Name: ${product.names}`
		productPrice.innerHTML = `Price: $${product.price}`
		categoryCosmetics.appendChild(categoryBlock)
		categoryBlock.appendChild(img)
		categoryBlock.appendChild(productName)
		categoryBlock.appendChild(productPrice)
	}
	
})

const line = document.createElement(`div`)
line.className = `hr`
line.innerHTML = `<hr>`
categoryKitchen.appendChild(line)

const line2 = document.createElement(`div`)
line2.className = `hr`
line2.innerHTML = `<hr>`
categoryDevices.appendChild(line2)

const line3 = document.createElement(`div`)
line3.className = `hr`
line3.innerHTML = `<hr>`
categoryCosmetics.appendChild(line3)

