function biodata(){
    const data = {
        name : 'Bobi Basari',
        age : 24,
        address : 'Jalan Pekayon 1 No.5 RT 009 RW 03, Ragunan, Pasar Minggu, Jakarta Selatan',
        hobbies : ['Playing PC Games', 'Playing Mobile Games'],
        is_married : false,
        list_school : [
            {
                name : 'SDS Kemala Bhayangkari 3',
                yaer_in : 2001,
                year_out : 2007
            },
            {
                name : 'SMP Negeri 41 Jakarta',
                yaer_in : 2007,
                year_out : 2010
            },
            {
                name : 'SMA Negeri 49 Jakarta',
                year_in : 2010,
                year_out : 2013
            },
            {
                major : null
            }
        ],
        skills : [
            {
                skill_name : "Adobe Photoshop",
                level : "Beginner"
            },
            {
                skill_name : "Adobe Indesign",
                level : "Beginner"
            },
            {
                skill_name : "3ds Max",
                level : "Beginner"
            }
        ],
        interest_in_coding : true
    }
    return data;
    
}

const biodataDiri = JSON.stringify(biodata()); 
document.write(biodataDiri);