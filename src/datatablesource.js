export const userColumns = [
	{ field: "id", headerName: "ID", width: 70 },
	{
		field: "user",
		headerName: "User",
		width: 230,
		renderCell: (params) => {
			return (
				<div className="cellWithImg">
					<img className="cellImg" src={params.row.img} alt="avatar" />
					{params.row.username}
				</div>
			);
		},
	},
	{ field: "email", headerName: "Email", width: 230 },
	{ field: "age", headerName: "Age", width: 100 },
	{ field: "status", headerName: "Status", width: 160 },
];

export const userRows = [
	{
		id: 1,
		username: "Snow",
		img: "https://images.pexels.com/photos/10215997/pexels-photo-10215997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		status: "active",
		email: "1snow@gmail.com",
		age: 25,
	},
	{
		id: 2,
		username: "Brandon",
		img: "https://images.pexels.com/photos/7168490/pexels-photo-7168490.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		status: "passive",
		email: "1zigzag@gmail.com",
		age: 15,
	},
	{
		id: 3,
		username: "Arya",
		img: "https://images.pexels.com/photos/8065520/pexels-photo-8065520.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		status: "pending",
		email: "msstabby@gmail.com",
		age: 18,
	},
	{
		id: 4,
		username: "rob",
		img: "https://images.pexels.com/photos/4708066/pexels-photo-4708066.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		status: "active",
		email: "dontgotomywedding@gmail.com",
		age: 25,
	},
	{
		id: 5,
		username: "Ricard",
		img: "https://images.pexels.com/photos/7990889/pexels-photo-7990889.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		status: "passive",
		email: "1snow@gmail.com",
		age: 25,
	},
	{
		id: 6,
		username: "Jamie",
		img: "https://images.pexels.com/photos/11614548/pexels-photo-11614548.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
		status: "active",
		email: "handsdownthebest@gmail.com",
		age: 25,
	},
	{
		id: 7,
		username: "Edard",
		img: "https://images.pexels.com/photos/10145724/pexels-photo-10145724.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
		status: "active",
		email: "dontwanttoloosemyhead@gmail.com",
		age: 25,
	},
	{
		id: 8,
		username: "lucy",
		img: "https://images.pexels.com/photos/10215997/pexels-photo-10215997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		status: "active",
		email: "1snow@gmail.com",
		age: 25,
	},
	{
		id: 9,
		username: "Brandy",
		img: "https://images.pexels.com/photos/7168490/pexels-photo-7168490.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		status: "passive",
		email: "1zigzag@gmail.com",
		age: 15,
	},
	{
		id: 10,
		username: "Jack",
		img: "https://images.pexels.com/photos/8065520/pexels-photo-8065520.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		status: "pending",
		email: "msstabby@gmail.com",
		age: 18,
	},
	{
		id: 11,
		username: "robby",
		img: "https://images.pexels.com/photos/4708066/pexels-photo-4708066.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		status: "active",
		email: "dontgotomywedding@gmail.com",
		age: 25,
	},
	{
		id: 12,
		username: "joe",
		img: "https://images.pexels.com/photos/7990889/pexels-photo-7990889.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		status: "passive",
		email: "1snow@gmail.com",
		age: 25,
	},
	{
		id: 13,
		username: "willie",
		img: "https://images.pexels.com/photos/11614548/pexels-photo-11614548.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
		status: "active",
		email: "handsdownthebest@gmail.com",
		age: 25,
	},
	{
		id: 14,
		username: "Jake",
		img: "https://images.pexels.com/photos/10145724/pexels-photo-10145724.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
		status: "active",
		email: "dontwanttoloosemyhead@gmail.com",
		age: 25,
	},
];
