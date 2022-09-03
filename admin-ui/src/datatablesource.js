export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },{
        field: "User", 
        headerName: "User", 
        width: 230, 
        renderCell: (params)=>{
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            )
           
        },
    },
    {
        field: "email",
        headerName: "Email",
        width: 230,
    },
    {
        field: "age",
        headerName: "Age",
        width: 100,
    }
    ,
    {
        field: "status",
        headerName: "Status",
        width: 160,
        renderCell: (params)=> {
            return(
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
    }
     
]
export const userRows = [
    { id: 1,
        username: 'Snow', 
        img: 'https://avatars.githubusercontent.com/u/83992245?v=4',
        email: 'Adika@gmail.com', 
        age: 35,
        status: "active"
     },
    { id: 2, 
        username: 'Lannister', 
        img: 'https://avatars.githubusercontent.com/u/83992245?v=4',
        email: 'Adika@gmail.com', 
        age: 42,
        status: "pending"
     },
    { id: 3, 
        username: 'Lannister', 
        img: 'https://avatars.githubusercontent.com/u/83992245?v=4',
        email: 'Adika@gmail.com', 
        age: 45,
        status: "active"
     },
    { id: 4, 
        username: 'Stark', 
        img: 'https://avatars.githubusercontent.com/u/83992245?v=4',
        email: 'Adika@gmail.com', 
        age: 16,
        status: "passive"
     },
    { id: 5, 
        username: 'Targaryen', 
        img: 'https://avatars.githubusercontent.com/u/83992245?v=4',
        email: 'Adika@gmail.com', 
        age: null,
        status: "active",
     },
    { id: 6, 
        username: 'Melisandre',  
        img: 'https://avatars.githubusercontent.com/u/83992245?v=4',
        email: 'Adika@gmail.com', 
        age: 150,
        status: "active",
     },
    { id: 7, 
        username: 'Clifford', 
        img: 'https://avatars.githubusercontent.com/u/83992245?v=4',
        email: 'Adika@gmail.com', 
        age: 44,
        status: "active"
     },
    { id: 8, 
        username: 'Frances', 
        img: 'https://avatars.githubusercontent.com/u/83992245?v=4',
        email: 'Adika@gmail.com', 
        age: 36,
        status: "active"
     },
    { id: 9, 
        username: 'Roxie', 
        img: 'https://avatars.githubusercontent.com/u/83992245?v=4',
        email: 'Adika@gmail.com', 
        age: 65,
        status: "active"
     },
  ];