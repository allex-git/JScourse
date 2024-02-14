const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};

const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "JackSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 20
			},
			{
				"title": "Java Enterprise",
				"mark": 100
			}
		]
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "AmalSmith",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "NoahSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 50
			}
		]
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "CharlieSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 75
			},
			{
				"title": "Java Enterprise",
				"mark": 23
			}]
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "EmilySmith",
		role: "admin",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Java Enterprise",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "QA",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Leo Smith",
		age: 53,
		img: "LeoSmith",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 78,
				"studentsScore": 79
			},
			{
				"title": "Java Enterprise",
				"score": 85,
				"studentsScore": 85
			}
		]
	}
];

class User {
	constructor(img, name, age, courses = []) {
	this.img = img;
	this.name = name;
	this.age = age;
	this.courses = courses;	
	}

	render(){
		
		let info = document.createElement(`div`)
			info.className = `user__info`
		let data = document.createElement(`div`)
			data.className = `user__info--data`
		let image = document.createElement(`img`)
			image.src = `images/users/${this.name.replace(' ','')}.png`
			image.height = 50
			image.alt = this.name
		let userNaming = document.createElement(`div`)
			userNaming.className = `user__naming`
		let userName = document.createElement(`p`)
			userName.innerHTML = `Name: <strong>${this.name}</strong>`
			userNaming.appendChild(userName)
		let userAge = document.createElement(`p`)
			userNaming.appendChild(userAge)
			userAge.innerHTML = `Age: <strong>${this.age}</strong>`
		let userInfoStudent = document.createElement(`div`)
			userInfoStudent.className = `user__info--role student`
		let imageRole = document.createElement(`img`)
			imageRole.src = `images/roles/${this.role}.png`
			imageRole.height = 25
		let userCourse = document.createElement(`div`)
			userCourse.className = `user__courses`
		
			info.appendChild(data)
				data.appendChild(image)
				data.appendChild(userNaming)
			info.appendChild(userInfoStudent)
		let p = document.createElement('p')
			p.innerHTML = this.role
			userInfoStudent.appendChild(imageRole)
			userInfoStudent.appendChild(p)
		
		return info
	}
	renderCourses(){
		if (this.courses.length !== 0 && this.role == 'student'){
			// console.log(this.courses)
			let userCourses = document.createElement(`div`)
				userCourses.className = `user__courses`

			this.courses.forEach( (course) => {
				
				let grade = `Nan`
				for (let i=100; i>0; i--){
					if(gradation[i]){
						grade = gradation[i]
					}
					//console.log(course.score, i)
					if(course.mark == i){
						break
					}
				}
				let p = document.createElement(`p`)
				p.className = `user__courses--course student`
				p.innerHTML = `${course.title} <span class="${grade}">${grade}</span>`
				
				userCourses.appendChild(p)
				
			})
			return userCourses
		}
		return null
	}
	
}

class Student extends User {
	role = `student`
}

class Lector extends User {
	role = `lector`
	renderCourses(){
		let userCourses = document.createElement(`div`)
				userCourses.className = `user__courses admin--info`
		
		this.courses.forEach( (course) => {
				
			let grade = `Nan`
			for (let i=100; i>0; i--){
				if(gradation[i]){
					grade = gradation[i]
				}
				//console.log(course.score, i)
				if(course.score == i){
					break
				}
			}
			let userCoursesLector = document.createElement(`div`)
			userCoursesLector.className = `user__courses--course lector`
			userCourses.appendChild(userCoursesLector)
			let pTitle = document.createElement(`p`)
			let pScore = document.createElement(`p`)
			let pLector = document.createElement(`p`)
			pTitle.innerHTML = `Title: <strong>${course.title}</strong>`
			pScore.innerHTML = `Lector's score: <span class="${grade}">${grade}</span>`
			pLector.innerHTML = `Average student's score: <span class="${grade}">${grade}</span>`
			userCoursesLector.appendChild(pTitle)
			userCoursesLector.appendChild(pScore)
			userCoursesLector.appendChild(pLector)
			
		})
		return userCourses;
	}
}

class Admin extends User {
	role = `admin`
	renderCourses(){
		let userCourses = document.createElement(`div`)
				userCourses.className = `user__courses admin--info`

		this.courses.forEach( (course) => {
				
			let grade = `Nan`
			for (let i=100; i>0; i--){
				if(gradation[i]){
					grade = gradation[i]
				}
				//console.log(course.score, i)
				if(course.score == i){
					break
				}
			}
			let userCoursesAdmin = document.createElement(`div`)
			userCoursesAdmin.className = `user__courses--course admin`
			userCourses.appendChild(userCoursesAdmin)
			let pTitle = document.createElement(`p`)
			let pScore = document.createElement(`p`)
			let pLector = document.createElement(`p`)
			pTitle.innerHTML = `Title: <strong>${course.title} </strong>`
			pScore.innerHTML = `Admin's score: <span class="${grade}">${grade}</span>`
			pLector.innerHTML = `Lector: <strong>${course.lector}</strong>`
			userCoursesAdmin.appendChild(pTitle)
			userCoursesAdmin.appendChild(pScore)
			userCoursesAdmin.appendChild(pLector)
		
		})
		return userCourses;
	}
}

let divUsers = document.createElement('div')
divUsers.className = `users`
	users.forEach((user) => {
		let tile = document.createElement(`div`)
		tile.className = `user`
		divUsers.appendChild(tile)

		if(user.role === `student`){
			let student = new Student (user.img, user.name, user.age, user?.courses)
			tile.appendChild(student.render())
			let _courses = student.renderCourses()
			if (_courses) {
				tile.appendChild(_courses)

			}
		}
		if(user.role === `lector`){
			let lector = new Lector (user.img, user.name, user.age, user?.courses)
			tile.appendChild(lector.render())
			let _courses = lector.renderCourses()
			if (_courses) {
				tile.appendChild(_courses)
			}
		}
		if(user.role === `admin`){
			let admins = new Admin (user.img, user.name, user.age, user?.courses)
			tile.appendChild(admins.render())
			let _courses = admins.renderCourses()
			if (_courses) {
				tile.appendChild(_courses)
			}
		}
	})

	document.body.appendChild(divUsers)
